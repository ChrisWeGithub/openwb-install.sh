import{C as p}from"./HardwareInstallation-a0083e3a.js";import{_ as r,u as o,k as l,l as u,D as n,N as c,y as m}from"./vendor-f2b8aa6f.js";import"./vendor-fortawesome-71546160.js";import"./index-b0e5e618.js";import"./vendor-bootstrap-4ad604fa.js";import"./vendor-jquery-d3cb8fad.js";import"./vendor-axios-65ecee4b.js";import"./vendor-sortablejs-2f1828d0.js";import"./dynamic-import-helper-be004503.js";const d={name:"DeviceOpenwbEvukitBat",mixins:[p]},_={class:"device-openwb-evukit-bat"};function v(e,t,b,f,w,g){const i=o("openwb-base-heading"),s=o("openwb-base-select-input");return l(),u("div",_,[n(i,null,{default:c(()=>[m(" Einstellungen für openWB EVU-Kit Batteriespeicher ")]),_:1}),n(s,{title:"Zählermodell",notSelected:"Bitte auswählen",options:[{value:0,text:"MPM3PM"},{value:1,text:"SDM120"},{value:2,text:"SDM630/SDM72D-M"}],"model-value":e.component.configuration.version,required:"","onUpdate:modelValue":t[0]||(t[0]=a=>e.updateConfiguration(a,"configuration.version"))},null,8,["model-value"])])}const V=r(d,[["render",v],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/openwb/openwb_evu_kit/bat.vue"]]);export{V as default};