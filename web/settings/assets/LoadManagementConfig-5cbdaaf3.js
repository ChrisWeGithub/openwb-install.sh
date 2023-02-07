import{l as C,L as k,M as S,F as $}from"./vendor-fortawesome-6c4715bf.js";import{C as x}from"./index-7dcf3b1e.js";import{S as V}from"./OpenwbSortableList-e567feec.js";import{_ as M,q as d,l,m,u as c,A as a,K as s,v as i,F as _,G as v,z as L,y,x as w}from"./vendor-5f866419.js";import"./vendor-bootstrap-22773050.js";import"./vendor-jquery-b0d74e8f.js";import"./vendor-axios-e1e2ff98.js";import"./vendor-sortablejs-793d687d.js";C.add(k,S);const q={name:"OpenwbLoadManagementConfig",mixins:[x],emits:["sendCommand"],components:{SortableList:V,FontAwesomeIcon:$},data(){return{mqttTopicsToSubscribe:["openWB/counter/get/hierarchy","openWB/system/device/+/component/+/config","openWB/counter/+/config/max_currents","openWB/counter/+/config/max_total_power","openWB/pv/+/config/max_ac_out","openWB/chargepoint/+/config"]}},computed:{counterConfigs:{get(){let e=this.getWildcardTopics("openWB/system/device/+/component/+/config");return Object.keys(e).filter(t=>e[t].type.includes("counter")).reduce((t,n)=>({...t,[n]:e[n]}),{})}},inverterConfigs:{get(){let e=this.getWildcardTopics("openWB/system/device/+/component/+/config");return Object.keys(e).filter(t=>e[t].type.includes("inverter")).reduce((t,n)=>({...t,[n]:e[n]}),{})}},hierarchyLabels:{get(){let e={};for(const t of Object.values(this.$store.state.mqtt["openWB/counter/get/hierarchy"]))e={...e,...this.getElementTreeNames(t)};return e}}},methods:{getElementTreeNames(e){let t={};if(e.type=="cp"){let n=this.getChargePoint(e.id);n&&(t[e.id]=n.name)}else{let n=this.getComponent(e.id);n&&(t[e.id]=n.name)}return e.children.forEach(n=>{t={...t,...this.getElementTreeNames(n)}}),t},getComponent(e){let t;return Object.keys(this.$store.state.mqtt).forEach(n=>{n.match("^openWB/system/device/[0-9]+/component/"+e+"/config$")&&(t=this.$store.state.mqtt[n])}),t},getChargePoint(e){let t;return Object.keys(this.$store.state.mqtt).forEach(n=>{n.match("^openWB/chargepoint/"+e+"/config$")&&(t=this.$store.state.mqtt[n])}),t}}},z={class:"loadManagementConfig"},Z={name:"loadManagementConfigForm"},N={key:0},U={key:1},A={key:0},D={key:1},E=c("br",null,null,-1),P=c("br",null,null,-1),T=c("br",null,null,-1);function F(e,t,n,O,j,g){const h=d("openwb-base-alert"),f=d("openwb-base-heading"),b=d("font-awesome-icon"),u=d("openwb-base-number-input"),p=d("openwb-base-card"),W=d("sortable-list"),B=d("openwb-base-submit-buttons");return l(),m("div",z,[c("form",Z,[a(p,{title:"Einstellungen",collapsible:!0,collapsed:!1},{default:s(()=>[e.$store.state.mqtt["openWB/general/extern"]===!0?(l(),m("div",N,[a(h,{subtype:"info"},{default:s(()=>[i(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Modus "Nur Ladepunkt" befindet. ')]),_:1})])):(l(),m("div",U,[a(f,null,{default:s(()=>[i(" Vorhandene Zählermodule ")]),_:1}),a(h,{subtype:"info"},{default:s(()=>[i(" Die maximale Leistung wird nur für den EVU-Zähler berücksichtigt. Bei Zwischenzählern begrenzt das Lastmanagement rein anhand der maximalen Phasenströme. ")]),_:1}),(l(!0),m(_,null,v(g.counterConfigs,o=>(l(),y(p,{key:o.id,collapsible:!0,collapsed:!0,subtype:"danger"},{header:s(()=>[a(b,{"fixed-width":"",icon:["fas","gauge-high"]}),i(" "+w(o.name),1)]),default:s(()=>[a(u,{title:"Maximale Leistung",min:1,step:1,unit:"kW","model-value":e.$store.state.mqtt["openWB/counter/"+o.id+"/config/max_total_power"]/1e3,"onUpdate:modelValue":r=>e.updateState("openWB/counter/"+o.id+"/config/max_total_power",r*1e3)},{help:s(()=>[i(" Maximal zulässige Leistung für diesen (Zwischen-)Zähler. ")]),_:2},1032,["model-value","onUpdate:modelValue"]),a(u,{title:"Maximaler Strom L1",min:16,step:1,unit:"A","model-value":e.$store.state.mqtt["openWB/counter/"+o.id+"/config/max_currents"][0],"onUpdate:modelValue":r=>e.updateState("openWB/counter/"+o.id+"/config/max_currents",r,"0")},{help:s(()=>[i(" Maximal zulässiger Strom für die Phase 1 dieses (Zwischen-)Zählers. ")]),_:2},1032,["model-value","onUpdate:modelValue"]),a(u,{title:"Maximaler Strom L2",min:16,step:1,unit:"A","model-value":e.$store.state.mqtt["openWB/counter/"+o.id+"/config/max_currents"][1],"onUpdate:modelValue":r=>e.updateState("openWB/counter/"+o.id+"/config/max_currents",r,"1")},{help:s(()=>[i(" Maximal zulässiger Strom für die Phase 2 dieses (Zwischen-)Zählers. ")]),_:2},1032,["model-value","onUpdate:modelValue"]),a(u,{title:"Maximaler Strom L3",min:16,step:1,unit:"A","model-value":e.$store.state.mqtt["openWB/counter/"+o.id+"/config/max_currents"][2],"onUpdate:modelValue":r=>e.updateState("openWB/counter/"+o.id+"/config/max_currents",r,"2")},{help:s(()=>[i(" Maximal zulässiger Strom für die Phase 3 dieses (Zwischen-)Zählers. ")]),_:2},1032,["model-value","onUpdate:modelValue"])]),_:2},1024))),128)),a(f,null,{default:s(()=>[i(" Vorhandene Wechselrichtermodule ")]),_:1}),(l(!0),m(_,null,v(g.inverterConfigs,o=>(l(),y(p,{key:o.id,collapsible:!0,collapsed:!0,subtype:"success"},{header:s(()=>[a(b,{"fixed-width":"",icon:["fas","solar-panel"]}),i(" "+w(o.name),1)]),default:s(()=>[a(u,{title:"Maximale Ausgangsleistung des Wechselrichters",min:0,step:.1,unit:"kW","model-value":e.$store.state.mqtt["openWB/pv/"+o.id+"/config/max_ac_out"]/1e3,"onUpdate:modelValue":r=>e.updateState("openWB/pv/"+o.id+"/config/max_ac_out",r*1e3)},{help:s(()=>[i(" Relevant bei Hybrid-Systemen mit DC-Speicher. ")]),_:2},1032,["step","model-value","onUpdate:modelValue"])]),_:2},1024))),128))]))]),_:1}),a(p,{title:"Struktur",collapsible:!0,collapsed:!0},{default:s(()=>[e.$store.state.mqtt["openWB/general/extern"]===!0?(l(),m("div",A,[a(h,{subtype:"info"},{default:s(()=>[i(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Modus "Nur Ladepunkt" befindet. ')]),_:1})])):(l(),m("div",D,[L(" ToDo: Fix: nested lists bypass store commits! "),a(W,{title:"Anordnung der Komponenten","model-value":e.$store.state.mqtt["openWB/counter/get/hierarchy"],"onUpdate:modelValue":t[0]||(t[0]=o=>e.updateState("openWB/counter/get/hierarchy",o)),labels:g.hierarchyLabels},{help:s(()=>[i(" Durch die Anordnung der Komponenten werden Abhängigkeiten abgebildet."),E,i(" An erster Stelle muss eine Zählerkomponente stehen, die den Netzanschlusspunkt erfasst. Dafür kann auch ein virtueller Zähler genutzt werden."),P,i(" Die weiteren Komponenten müssen hierarchisch so angeordnet werden, wie sie auch physisch im Stromnetz angeschlossen werden."),T,i(" Bei DC-gekoppelten Speichern sind diese hinter dem zugehörigen Wechselrichter zu platzieren, damit die Abhängigkeit in der Regelung berücksichtigt werden kann. ")]),_:1},8,["model-value","labels"])]))]),_:1}),a(B,{formName:"loadManagementConfigForm",onSave:t[1]||(t[1]=o=>e.$emit("save")),onReset:t[2]||(t[2]=o=>e.$emit("reset")),onDefaults:t[3]||(t[3]=o=>e.$emit("defaults"))})])])}const Y=M(q,[["render",F],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/LoadManagementConfig.vue"]]);export{Y as default};