import{D as p}from"./HardwareInstallation-a0083e3a.js";import{_ as u,u as n,k as m,l as c,D as a,N as i,y as r}from"./vendor-f2b8aa6f.js";import"./vendor-fortawesome-71546160.js";import"./index-b0e5e618.js";import"./vendor-bootstrap-4ad604fa.js";import"./vendor-jquery-d3cb8fad.js";import"./vendor-axios-65ecee4b.js";import"./vendor-sortablejs-2f1828d0.js";import"./dynamic-import-helper-be004503.js";const _={name:"DeviceSolarwatt",mixins:[p]},f={class:"device-solarwatt"};function v(e,t,w,b,g,h){const s=n("openwb-base-heading"),l=n("openwb-base-text-input"),d=n("openwb-base-select-input");return m(),c("div",f,[a(s,null,{default:i(()=>[r(" Einstellungen für Solarwatt/My Reserve ")]),_:1}),a(l,{title:"IP oder Hostname",subtype:"host",required:"","model-value":e.device.configuration.ip_address,"onUpdate:modelValue":t[0]||(t[0]=o=>e.updateConfiguration(o,"configuration.ip_address"))},null,8,["model-value"]),a(d,{title:"Abrufmethode",notSelected:"Bitte auswählen",options:[{value:0,text:"Gateway"},{value:1,text:"Energy Manager"}],"model-value":e.device.configuration.energy_manager,required:"","onUpdate:modelValue":t[1]||(t[1]=o=>e.updateConfiguration(o,"configuration.energy_manager"))},{help:i(()=>[r(" Wenn beide Abrufmethoden verwendet werden sollen, muss für jede Methode ein Gerät erstellt werden. ")]),_:1},8,["model-value"])])}const E=u(_,[["render",v],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solar_watt/solar_watt/device.vue"]]);export{E as default};