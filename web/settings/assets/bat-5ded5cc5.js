import{_ as c,q as o,k as r,l as p,B as n,M as s,x as a,u,y as l}from"./vendor-c6bc340e.js";import"./vendor-sortablejs-02fb77a0.js";const _={name:"DeviceGoodWeBat",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},f={class:"device-goodwe-bat"},m={class:"small"};function b(e,t,g,h,v,w){const i=o("openwb-base-heading"),d=o("openwb-base-alert");return r(),p("div",f,[n(i,null,{default:s(()=>[a(" Einstellungen für GoodWe Batteriespeicher "),u("span",m,"(Modul: "+l(e.$options.name)+")",1)]),_:1}),n(d,{subtype:"info"},{default:s(()=>[a(" Diese Komponente benötigt keine Einstellungen. ")]),_:1})])}const x=c(_,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/good_we/bat.vue"]]);export{x as default};
