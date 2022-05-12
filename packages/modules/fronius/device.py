#!/usr/bin/env python3
import logging
from typing import Dict, Optional, Union, List

from helpermodules.cli import run_using_positional_cli_args
from modules.common.abstract_device import AbstractDevice
from modules.common.component_context import MultiComponentUpdateContext
from modules.fronius import bat
from modules.fronius import counter_s0
from modules.fronius import counter_sm
from modules.fronius import inverter
from modules.fronius import meter

log = logging.getLogger(__name__)


def get_default_config() -> dict:
    return {
        "name": "Fronius",
        "type": "fronius",
        "id": 0,
        "configuration": {
            "meter_id": 0,  # ToDo: move to counter_*
            "ip_address": None
        }
    }


fronius_component_classes = Union[bat.FroniusBat, counter_sm.FroniusSmCounter,
                                  counter_s0.FroniusS0Counter, inverter.FroniusInverter]


class Device(AbstractDevice):
    COMPONENT_TYPE_TO_CLASS = {
        "bat": bat.FroniusBat,
        "counter_sm": counter_sm.FroniusSmCounter,
        "counter_s0": counter_s0.FroniusS0Counter,
        "inverter": inverter.FroniusInverter,
    }

    def __init__(self, device_config: dict) -> None:
        self.components = {}  # type: Dict[str, fronius_component_classes]
        try:
            self.device_config = device_config
        except Exception:
            log.exception("Fehler im Modul "+device_config["name"])

    def add_component(self, component_config: dict) -> None:
        component_type = component_config["type"]
        if component_type in self.COMPONENT_TYPE_TO_CLASS:
            self.components["component"+str(component_config["id"])] = self.COMPONENT_TYPE_TO_CLASS[component_type](
                self.device_config["id"], component_config, self.device_config["configuration"])
        else:
            raise Exception(
                "illegal component type " + component_type + ". Allowed values: " +
                ','.join(self.COMPONENT_TYPE_TO_CLASS.keys())
            )

    def update(self) -> None:
        log.debug("Start device reading " + str(self.components))
        if self.components:
            with MultiComponentUpdateContext(self.components):
                # zuerst den WR auslesen
                for component in self.components:
                    if isinstance(self.components[component], inverter.FroniusInverter):
                        inverter_state = self.components[component].update()
                        self.components[component].set_inverter_state(inverter_state)
                        # Rückgabe der Leistung des ersten WR mit zurückgesetzter Vorzeichenumkehr
                        power_inverter = -1 * inverter_state.power
                        break
                else:
                    power_inverter = 0
                # dann Zähler auslesen und Werte verrechnen
                for component in self.components:
                    if isinstance(self.components[component], counter_sm.FroniusSmCounter):
                        counter_state, meter_location = self.components[component].update()
                        if meter_location == meter.MeterLocation.load:
                            # wenn SmartMeter im Verbrauchszweig sitzt sind folgende Annahmen getroffen:
                            # PV Leistung wird gleichmäßig auf alle Phasen verteilt
                            # Spannungen und Leistungsfaktoren sind am Verbrauchszweig == Einspeisepunkt
                            # Hier gehen wir mal davon aus, dass der Wechselrichter seine PV-Leistung gleichmäßig
                            # auf alle Phasen aufteilt.
                            powers = [-1 * power - power_inverter/3 for power in counter_state.powers]
                            # Wegen der geänderten Leistungen sind die Ströme erneut zu berechnen
                            currents = [powers[i] / counter_state.voltages[i] for i in range(0, 3)]
                            counter_state.powers = powers
                            counter_state.currents = currents
                        self.components[component].set_counter_state(counter_state)
                        break
                    elif isinstance(self.components[component], counter_s0.FroniusS0Counter):
                        counter_state = self.components[component].update()
                        counter_state.power += power_inverter
                        self.components[component].set_counter_state(counter_state)
                        break
                for component in self.components:
                    if isinstance(self.components[component], bat.FroniusBat):
                        bat_state = self.components[component].update()
                        self.components[component].set_bat_state(bat_state)
        else:
            log.warning(
                self.device_config["name"] +
                ": Es konnten keine Werte gelesen werden, da noch keine Komponenten konfiguriert wurden."
            )


def read_legacy(
        component_type: str,
        ip_address: str,
        meter_id: int,
        variant: int,
        ip_address2: str = "none",
        bat_module: str = "none",
        num: Optional[int] = None) -> None:
    COMPONENT_TYPE_TO_MODULE = {
        "bat": bat,
        "counter_sm": counter_sm,
        "counter_s0": counter_s0,
        "inverter": inverter,
    }

    device_config = get_default_config()
    device_config["configuration"]["ip_address"] = ip_address
    device_config["configuration"]["meter_id"] = meter_id
    dev = Device(device_config)
    if component_type in COMPONENT_TYPE_TO_MODULE:
        component_config = COMPONENT_TYPE_TO_MODULE[component_type].get_default_config()
        if component_type == "counter_sm":
            component_config["configuration"]["variant"] = variant
        elif component_type == "inverter":
            component_config["configuration"]["ip_address2"] = ip_address2
    else:
        raise Exception(
            "illegal component type " + component_type + ". Allowed values: " +
            ','.join(COMPONENT_TYPE_TO_MODULE.keys())
        )
    component_config["id"] = num
    dev.add_component(component_config)

    log.debug('Fronius IP-Adresse: ' + str(ip_address))

    dev.update()


def main(argv: List[str]) -> None:
    run_using_positional_cli_args(read_legacy, argv)
