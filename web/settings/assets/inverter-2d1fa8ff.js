import{_ as c,q as n,k as d,l as p,B as o,M as s,x as a,u,y as l}from"./vendor-b03da118.js";import"./vendor-sortablejs-595f2e06.js";const _={name:"DeviceBatterXInverter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},f={class:"device-batterx-inverter"},m={class:"small"};function b(e,t,v,g,h,x){const r=n("openwb-base-heading"),i=n("openwb-base-alert");return d(),p("div",f,[o(r,null,{default:s(()=>[a(" Einstellungen für BatterX Wechselrichter "),u("span",m,"(Modul: "+l(e.$options.name)+")",1)]),_:1}),o(i,{subtype:"info"},{default:s(()=>[a(" Diese Komponente benötigt keine Einstellungen. ")]),_:1})])}const $=c(_,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/batterx/inverter.vue"]]);export{$ as default};