import{D as u}from"./HardwareInstallation-2c646227.js";import{_ as m,u as o,k as b,l as c,G as t,E as s,y as r,x as f}from"./vendor-f90150d8.js";import"./vendor-fortawesome-8488187c.js";import"./index-0eaa3ed7.js";import"./vendor-bootstrap-99f0c261.js";import"./vendor-jquery-99ccf6d7.js";import"./vendor-axios-871a0510.js";import"./vendor-sortablejs-cfc19546.js";import"./dynamic-import-helper-be004503.js";const g={name:"DeviceSolarEdge",mixins:[u]},_={class:"device-solaredge"};function v(n,e,w,h,B,k){const a=o("openwb-base-heading"),d=o("openwb-base-alert"),p=o("openwb-base-text-input"),l=o("openwb-base-number-input");return b(),c("div",_,[t(a,null,{default:s(()=>e[2]||(e[2]=[r(" Einstellungen für SolarEdge ")])),_:1}),t(d,{subtype:"info"},{default:s(()=>e[3]||(e[3]=[r(" ModbusTCP muss im Wechselrichter aktiviert werden und der Wechselrichter per LAN angebunden sein."),f("br",null,null,-1),r(" SolarEdge lässt nur eine ModbusTCP-Verbindung zu. Wenn Sie mit einem weiteren Smarthome-System, wie z.B. ioBroker oder openHAB, den SolarEdge-Wechselrichter abfragen, kann dies die Abfrage durch die openWB stören oder verhindern. ")])),_:1}),t(p,{title:"IP oder Hostname",subtype:"host",required:"","model-value":n.device.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=i=>n.updateConfiguration(i,"configuration.ip_address"))},null,8,["model-value"]),t(l,{title:"Port",required:"",min:1,max:65535,"model-value":n.device.configuration.port,"onUpdate:modelValue":e[1]||(e[1]=i=>n.updateConfiguration(i,"configuration.port"))},{help:s(()=>e[4]||(e[4]=[r(" Je nach Produktionsdatum und Softwareversion ist 502 oder 1502 ab Werk eingestellt. Bitte im Wechselrichter überprüfen. ")])),_:1},8,["model-value"])])}const $=m(g,[["render",v],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solaredge/solaredge/device.vue"]]);export{$ as default};