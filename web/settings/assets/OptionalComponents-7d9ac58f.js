import{_ as $,C}from"./index-b8f06cb8.js";import{_ as I}from"./dynamic-import-helper-be004503.js";import{l as L,X as O,Y as S,F as V}from"./vendor-fortawesome-9fdc06a9.js";import{_ as y,q as l,k as p,l as m,z as h,M as o,x as a,y as c,B as n,u as r,a1 as z,a2 as q,I as E,A as f}from"./vendor-f0f38b48.js";import"./vendor-bootstrap-384bc385.js";import"./vendor-jquery-8576ed22.js";import"./vendor-axios-e59ef189.js";import"./vendor-sortablejs-cbf37f8f.js";const F={name:"DisplayThemeFallback",emits:["update:configuration"],props:{displayTheme:{type:Object,required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},x={class:"display-theme-fallback"},N={key:1};function j(e,t,s,v,w,u){const d=l("openwb-base-alert"),b=l("openwb-base-textarea");return p(),m("div",x,[Object.keys(s.displayTheme.configuration).length==0?(p(),h(d,{key:0,subtype:"info"},{default:o(()=>[a(' Das Display-Theme "'+c(s.displayTheme.name)+'" bietet keine Einstellungen. ',1)]),_:1})):(p(),m("div",N,[n(d,{subtype:"warning"},{default:o(()=>[a(' Es wurde keine Konfigurationsseite für das Display-Theme "'+c(s.displayTheme.name)+'" gefunden. Die Einstellungen können als JSON direkt bearbeitet werden. ',1)]),_:1}),n(b,{title:"Konfiguration",subtype:"json","model-value":s.displayTheme.configuration,"onUpdate:modelValue":t[0]||(t[0]=g=>u.updateConfiguration(g,"configuration"))},{help:o(()=>[a(" Bitte prüfen Sie, ob die Eingaben richtig interpretiert werden. ")]),_:1},8,["model-value"]),n(d,{subtype:"info"},{default:o(()=>[r("pre",null,c(JSON.stringify(s.displayTheme.configuration,void 0,2)),1)]),_:1})]))])}const A=y(F,[["render",j],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/display_themes/OpenwbDisplayThemeFallback.vue"]]);L.add(O,S);const M={name:"OpenwbDisplayThemeProxy",emits:["update:configuration"],props:{displayTheme:{type:Object,required:!0}},components:{FontAwesomeIcon:V},computed:{myComponent(){return console.debug(`loading display theme: ${this.displayTheme.type}`),z({loader:()=>I(Object.assign({"./cards/displayTheme.vue":()=>$(()=>import("./displayTheme-7a496adb.js"),["assets/displayTheme-7a496adb.js","assets/vendor-f0f38b48.js","assets/vendor-sortablejs-cbf37f8f.js","assets/vendor-867a85e2.css"])}),`./${this.displayTheme.type}/displayTheme.vue`),errorComponent:A})}},methods:{updateConfiguration(e){this.$emit("update:configuration",e)}}};function P(e,t,s,v,w,u){const d=l("font-awesome-icon"),b=l("openwb-base-alert"),g=l("openwb-base-heading");return p(),m(E,null,[s.displayTheme.official?(p(),h(b,{key:0,subtype:"success"},{default:o(()=>[n(d,{"fixed-width":"",icon:["fas","certificate"]}),a(' Das ausgewählte Display Theme "'+c(s.displayTheme.name)+'" wird von openWB gepflegt. ',1)]),_:1})):(p(),h(b,{key:1,subtype:"info"},{default:o(()=>[n(d,{"fixed-width":"",icon:["fas","people-group"]}),a(' Das ausgewählte Display Theme "'+c(s.displayTheme.name)+'" wird in unserer Community gepflegt. Rückfragen oder Probleme bitte im Forum diskutieren. ',1)]),_:1})),n(g,null,{default:o(()=>[a(' Einstellungen für Display Theme "'+c(s.displayTheme.name)+'" ',1)]),_:1}),(p(),h(q(u.myComponent),{displayTheme:s.displayTheme,"onUpdate:configuration":t[0]||(t[0]=_=>u.updateConfiguration(_))},null,40,["displayTheme"]))],64)}const U=y(M,[["render",P],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/display_themes/OpenwbDisplayThemeProxy.vue"]]),H={name:"OpenwbOptionalComponents",mixins:[C],components:{OpenwbDisplayThemeProxy:U},data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/chargepoint/+/config","openWB/chargepoint/+/get/rfid","openWB/chargepoint/+/get/rfid_timestamp","openWB/chargepoint/+/set/rfid","openWB/optional/rfid/active","openWB/optional/led/active","ToDo/optional/led/instant_blocked","ToDo/optional/led/pv_blocked","ToDo/optional/led/scheduled_blocked","ToDo/optional/led/standby_blocked","ToDo/optional/led/stop_blocked","ToDo/optional/led/instant","ToDo/optional/led/pv","ToDo/optional/led/scheduled","ToDo/optional/led/standby","ToDo/optional/led/stop","openWB/optional/int_display/active","openWB/optional/int_display/standby","openWB/optional/int_display/rotation","openWB/optional/int_display/on_if_plugged_in","openWB/optional/int_display/pin_active","openWB/optional/int_display/pin_code","openWB/optional/int_display/theme","openWB/optional/int_display/only_local_charge_points","openWB/system/configurable/display_themes","openWB/optional/et/active","openWB/optional/et/config/provider","openWB/optional/et/config/max_price"],tempIdTagList:{}}},computed:{idTagList(){return Object.values(this.updateIdTagList())},displayThemeList(){return this.$store.state.mqtt["openWB/system/configurable/display_themes"]},displayThemeGroupList(){let e=[{label:"openWB",options:[]},{label:"Community",options:[]}];return this.displayThemeList.forEach(t=>{t.official===!0?e[0].options.push(t):e[1].options.push(t)}),e}},methods:{getIdFromTopic(e){return e.match(/(?:\/)([0-9]+)(?=\/)*/g)[0].replace(/[^0-9]+/g,"")},updateIdTagList(){return Object.entries(this.getWildcardTopics("^openWB/chargepoint/[^+/]+/[gs]et/rfid$",!0)).forEach(e=>{e[1]!==null&&(this.tempIdTagList[e[1]]=`${e[1]} (${e[0].includes("/set/")?"zugewiesen":"erfasst"} an ${this.getChargePointName(this.getIdFromTopic(e[0]))})`)}),this.tempIdTagList},getChargePointName(e){return this.$store.state.mqtt["openWB/chargepoint/"+e+"/config"]?this.$store.state.mqtt["openWB/chargepoint/"+e+"/config"].name:"Ladepunkt "+e},getDisplayThemeDefaults(e){const t=this.displayThemeList.find(s=>s.value==e);return Object.prototype.hasOwnProperty.call(t,"defaults")?{...JSON.parse(JSON.stringify(t.defaults))}:(console.warn("no default configuration found for display theme type!",e),{})},updateSelectedDisplayTheme(e){this.updateState("openWB/optional/int_display/theme",this.getDisplayThemeDefaults(e))},updateConfiguration(e,t){console.debug("updateConfiguration",e,t),this.updateState(e,t.value,t.object)}}},R={class:"optionalComponents"},J={name:"optionalComponentsForm"},G=r("ul",null,[r("li",null," Über einen in der openWB verbauten RFID-Reader (optional, z.B. anhand des Lieferscheins prüfen). "),r("li",null," Durch die automatische Erkennung an einer openWB Pro (muss in den Einstellungen aktiviert werden). "),r("li",null," Durch manuelle Eingabe einer ID am Display einer openWB. ")],-1),K={key:0},X=r("br",null,null,-1),Y=r("br",null,null,-1),Z=["innerHTML"],Q={key:0},ee=r("br",null,null,-1),te=r("hr",null,null,-1),ne={key:1},oe=r("hr",null,null,-1),ae={key:2},ie=r("hr",null,null,-1),se=r("hr",null,null,-1),le={key:0};function pe(e,t,s,v,w,u){const d=l("openwb-base-button-group-input"),b=l("openwb-base-alert"),g=l("openwb-base-textarea"),_=l("openwb-base-card"),T=l("openwb-base-heading"),B=l("openwb-base-range-input"),D=l("openwb-base-select-input"),W=l("openwb-display-theme-proxy"),k=l("openwb-base-submit-buttons");return p(),m("div",R,[r("form",J,[n(_,{title:"Identifikation von Fahrzeugen"},{default:o(()=>[n(d,{title:"Identifikation aktivieren","model-value":e.$store.state.mqtt["openWB/optional/rfid/active"],"onUpdate:modelValue":t[0]||(t[0]=i=>e.updateState("openWB/optional/rfid/active",i)),buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}]},{help:o(()=>[a(" Die Identifikation von Fahrzeugen kann auf mehreren Wegen erfolgen: "),G]),_:1},8,["model-value"]),e.$store.state.mqtt["openWB/optional/rfid/active"]===!0?(p(),m("div",K,[n(b,{subtype:"info",class:"mb-1"},{default:o(()=>[a(" Die ID-Tags, die an dem jeweiligen Ladepunkt gültig sind, müssen in dem Ladepunkt-Profil hinterlegt werden. Die ID-Tags müssen auch in den Einstellungen der Fahrzeuge diesen zugeordnet werden."),X,a(" Es kann zuerst das Fahrzeug angesteckt und dann der ID-Tag erfasst werden oder anders herum. Im letzten Fall muss innerhalb von 5 Minuten ein Fahrzeug angesteckt werden, sonst wird der ID-Tag verworfen. Das Fahrzeug wird erst nach dem Anstecken zugeordnet."),Y,r("span",{innerHTML:e.$store.state.text.rfidWiki},null,8,Z)]),_:1}),n(g,{title:"Erkannte ID-Tags",readonly:"",disabled:"","model-value":u.idTagList.join(`
`)},{help:o(()=>[a(" Solange diese Seite geöffnet ist, werden alle erfassten ID-Tags in dieser Liste aufgeführt. ")]),_:1},8,["model-value"])])):f("",!0)]),_:1}),n(_,{title:"Display (intern oder extern)"},{default:o(()=>[n(d,{title:"Integriertes Display","model-value":e.$store.state.mqtt["openWB/optional/int_display/active"],"onUpdate:modelValue":t[1]||(t[1]=i=>e.updateState("openWB/optional/int_display/active",i)),buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}]},{help:o(()=>[a(' Je nach Bestellung kann die openWB mit oder ohne Display geliefert worden sein. Auch die Variante "Standalone" bietet beide Optionen. Bitte prüfe zuerst die Hardwareausstattung deiner openWB (z.B. Lieferschein). ')]),_:1},8,["model-value"]),e.$store.state.mqtt["openWB/optional/int_display/active"]==!0?(p(),m("div",Q,[n(d,{title:"Orientierung","model-value":e.$store.state.mqtt["openWB/optional/int_display/rotation"],"onUpdate:modelValue":t[2]||(t[2]=i=>e.updateState("openWB/optional/int_display/rotation",i)),buttons:[{buttonValue:0,text:"0°"},{buttonValue:90,text:"90°"},{buttonValue:180,text:"180°"},{buttonValue:270,text:"270°"}]},{help:o(()=>[a(" Mit dieser Einstellung kann das Display im Uhrzeigersinn gedreht werden, falls erforderlich. Nach einer Änderung ist ein Neustart erforderlich!"),ee,a(" Diese Einstellung erfordert ein Raspberry Pi Display. Anzeigen, welche über HDMI angeschlossen sind, werden nicht unterstützt. ")]),_:1},8,["model-value"]),te,n(T,null,{default:o(()=>[a(" Display Standby ")]),_:1}),n(B,{title:"Ausschaltzeit",min:0,max:12,step:1,"model-value":e.$store.state.mqtt["openWB/optional/int_display/standby"],"onUpdate:modelValue":t[3]||(t[3]=i=>e.updateState("openWB/optional/int_display/standby",i)),unit:"Sek",labels:[{label:"Immer an",value:0},{label:5,value:5},{label:10,value:10},{label:15,value:15},{label:30,value:30},{label:45,value:45},{label:"1 Min",value:60},{label:"1,5 Min",value:90},{label:"2 Min",value:120},{label:"3 Min",value:180},{label:"4 Min",value:240},{label:"5 Min",value:300},{label:"10 Min",value:600}]},{help:o(()=>[a(" Hier kann eine Zeitspanne angegeben werden, nach der das Display ausgeschaltet wird. ")]),_:1},8,["model-value"])])):f("",!0),e.$store.state.mqtt["openWB/general/extern"]===!0?(p(),m("div",ne,[oe,n(b,{subtype:"info"},{default:o(()=>[a(' Weitere Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(p(),m("div",ae,[ie,n(d,{title:"Ladepunkte auf externen openWB","model-value":e.$store.state.mqtt["openWB/optional/int_display/only_local_charge_points"],"onUpdate:modelValue":t[4]||(t[4]=i=>e.updateState("openWB/optional/int_display/only_local_charge_points",i)),buttons:[{buttonValue:!1,text:"Alle",class:"btn-outline-danger"},{buttonValue:!0,text:"Nur Lokale",class:"btn-outline-success"}]},{help:o(()=>[a(" Hiermit kann festgelegt werden, ob an angebundenen externen openWB alle oder nur die jeweils lokalen Ladepunkte angezeigt werden sollen. ")]),_:1},8,["model-value"]),se,e.$store.state.mqtt["openWB/optional/int_display/theme"]!==void 0?(p(),m("div",le,[n(D,{class:"mb-2",title:"Theme des Displays",groups:u.displayThemeGroupList,"model-value":e.$store.state.mqtt["openWB/optional/int_display/theme"].type,"onUpdate:modelValue":t[5]||(t[5]=i=>u.updateSelectedDisplayTheme(i))},{help:o(()=>[a(" Hier können unterschiedliche Display-Anzeigen, s.g. Themes, ausgewählt werden. Die Anzahl der Themes wird sich mit zukünftigen Releases erhöhen. ")]),_:1},8,["groups","model-value"]),e.$store.state.mqtt["openWB/optional/int_display/theme"].type?(p(),h(W,{key:0,displayTheme:e.$store.state.mqtt["openWB/optional/int_display/theme"],"onUpdate:configuration":t[6]||(t[6]=i=>u.updateConfiguration("openWB/optional/int_display/theme",i))},null,8,["displayTheme"])):f("",!0)])):f("",!0)]))]),_:1}),n(k,{formName:"optionalComponentsForm",onSave:t[7]||(t[7]=i=>e.$emit("save")),onReset:t[8]||(t[8]=i=>e.$emit("reset")),onDefaults:t[9]||(t[9]=i=>e.$emit("defaults"))})])])}const _e=y(H,[["render",pe],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/OptionalComponents.vue"]]);export{_e as default};