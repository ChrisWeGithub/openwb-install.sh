import{_ as p,q as n,k as r,l as d,B as o,M as s,x as a,u,y as _}from"./vendor-c6bc340e.js";import"./vendor-sortablejs-02fb77a0.js";const l={name:"DeviceOpenwbEvuKit",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},f={class:"device-openwb-evukit"},b={class:"small"};function m(e,t,v,g,w,h){const i=n("openwb-base-heading"),c=n("openwb-base-alert");return r(),d("div",f,[o(i,null,{default:s(()=>[a(" Einstellungen für openWB EVU-Kit "),u("span",b,"(Modul: "+_(e.$options.name)+")",1)]),_:1}),o(c,{subtype:"info"},{default:s(()=>[a(" Dieses Gerät erfordert keine Einstellungen. ")]),_:1})])}const $=p(l,[["render",m],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/openwb_evu_kit/device.vue"]]);export{$ as default};
