"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9460],{7423:(ne,I,v)=>{v.d(I,{Uw:()=>y,fo:()=>S});var d=v(5861);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var w=(()=>{return(o=w||(w={})).Unimplemented="UNIMPLEMENTED",o.Unavailable="UNAVAILABLE",w;var o})();class n extends Error{constructor(e,t,i){super(e),this.message=e,this.code=t,this.data=i}}const K=o=>{var e,t,i,s,r;const c=o.CapacitorCustomPlatform||null,a=o.Capacitor||{},m=a.Plugins=a.Plugins||{},u=o.CapacitorPlatforms,T=(null===(e=null==u?void 0:u.currentPlatform)||void 0===e?void 0:e.getPlatform)||(()=>null!==c?c.name:(o=>{var e,t;return null!=o&&o.androidBridge?"android":null!==(t=null===(e=null==o?void 0:o.webkit)||void 0===e?void 0:e.messageHandlers)&&void 0!==t&&t.bridge?"ios":"web"})(o)),le=(null===(t=null==u?void 0:u.currentPlatform)||void 0===t?void 0:t.isNativePlatform)||(()=>"web"!==T()),de=(null===(i=null==u?void 0:u.currentPlatform)||void 0===i?void 0:i.isPluginAvailable)||(f=>{const p=F.get(f);return!!(null!=p&&p.platforms.has(T())||X(f))}),X=(null===(s=null==u?void 0:u.currentPlatform)||void 0===s?void 0:s.getPluginHeader)||(f=>{var p;return null===(p=a.PluginHeaders)||void 0===p?void 0:p.find(U=>U.name===f)}),F=new Map,me=(null===(r=null==u?void 0:u.currentPlatform)||void 0===r?void 0:r.registerPlugin)||((f,p={})=>{const U=F.get(f);if(U)return console.warn(`Capacitor plugin "${f}" already registered. Cannot register plugins twice.`),U.proxy;const L=T(),j=X(f);let x;const he=function(){var h=(0,d.Z)(function*(){return!x&&L in p?x=x="function"==typeof p[L]?yield p[L]():p[L]:null!==c&&!x&&"web"in p&&(x=x="function"==typeof p.web?yield p.web():p.web),x});return function(){return h.apply(this,arguments)}}(),N=h=>{let P;const _=(...O)=>{const M=he().then(C=>{const A=((h,P)=>{var _,O;if(!j){if(h)return null===(O=h[P])||void 0===O?void 0:O.bind(h);throw new n(`"${f}" plugin is not implemented on ${L}`,w.Unimplemented)}{const M=null==j?void 0:j.methods.find(C=>P===C.name);if(M)return"promise"===M.rtype?C=>a.nativePromise(f,P.toString(),C):(C,A)=>a.nativeCallback(f,P.toString(),C,A);if(h)return null===(_=h[P])||void 0===_?void 0:_.bind(h)}})(C,h);if(A){const J=A(...O);return P=null==J?void 0:J.remove,J}throw new n(`"${f}.${h}()" is not implemented on ${L}`,w.Unimplemented)});return"addListener"===h&&(M.remove=(0,d.Z)(function*(){return P()})),M};return _.toString=()=>`${h.toString()}() { [capacitor code] }`,Object.defineProperty(_,"name",{value:h,writable:!1,configurable:!1}),_},ee=N("addListener"),te=N("removeListener"),Pe=(h,P)=>{const _=ee({eventName:h},P),O=function(){var C=(0,d.Z)(function*(){const A=yield _;te({eventName:h,callbackId:A},P)});return function(){return C.apply(this,arguments)}}(),M=new Promise(C=>_.then(()=>C({remove:O})));return M.remove=(0,d.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield O()}),M},V=new Proxy({},{get(h,P){switch(P){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return j?Pe:ee;case"removeListener":return te;default:return N(P)}}});return m[f]=V,F.set(f,{name:f,proxy:V,platforms:new Set([...Object.keys(p),...j?[L]:[]])}),V});return a.convertFileSrc||(a.convertFileSrc=f=>f),a.getPlatform=T,a.handleError=f=>o.console.error(f),a.isNativePlatform=le,a.isPluginAvailable=de,a.pluginMethodNoop=(f,p,U)=>Promise.reject(`${U} does not have an implementation of "${p}".`),a.registerPlugin=me,a.Exception=n,a.DEBUG=!!a.DEBUG,a.isLoggingEnabled=!!a.isLoggingEnabled,a.platform=a.getPlatform(),a.isNative=a.isNativePlatform(),a},k=(o=>o.Capacitor=K(o))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),S=k.registerPlugin;class y{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){var i=this;this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t);const r=this.windowListeners[e];r&&!r.registered&&this.addWindowListener(r);const c=function(){var m=(0,d.Z)(function*(){return i.removeListener(e,t)});return function(){return m.apply(this,arguments)}}(),a=Promise.resolve({remove:c});return Object.defineProperty(a,"remove",{value:(m=(0,d.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield c()}),function(){return m.apply(this,arguments)})}),a;var m}removeAllListeners(){var e=this;return(0,d.Z)(function*(){e.listeners={};for(const t in e.windowListeners)e.removeWindowListener(e.windowListeners[t]);e.windowListeners={}})()}notifyListeners(e,t){const i=this.listeners[e];i&&i.forEach(s=>s(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:i=>{this.notifyListeners(t,i)}}}unimplemented(e="not implemented"){return new k.Exception(e,w.Unimplemented)}unavailable(e="not available"){return new k.Exception(e,w.Unavailable)}removeListener(e,t){var i=this;return(0,d.Z)(function*(){const s=i.listeners[e];if(!s)return;const r=s.indexOf(t);i.listeners[e].splice(r,1),i.listeners[e].length||i.removeWindowListener(i.windowListeners[e])})()}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){!e||(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}const b=o=>encodeURIComponent(o).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Z=o=>o.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class W extends y{getCookies(){return(0,d.Z)(function*(){const e=document.cookie,t={};return e.split(";").forEach(i=>{if(i.length<=0)return;let[s,r]=i.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");s=Z(s).trim(),r=Z(r).trim(),t[s]=r}),t})()}setCookie(e){return(0,d.Z)(function*(){try{const t=b(e.key),i=b(e.value),s=`; expires=${(e.expires||"").replace("expires=","")}`,r=(e.path||"/").replace("path=",""),c=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${i||""}${s}; path=${r}; ${c};`}catch(t){return Promise.reject(t)}})()}deleteCookie(e){return(0,d.Z)(function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}})()}clearCookies(){return(0,d.Z)(function*(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})()}clearAllCookies(){var e=this;return(0,d.Z)(function*(){try{yield e.clearCookies()}catch(t){return Promise.reject(t)}})()}}S("CapacitorCookies",{web:()=>new W});const oe=function(){var o=(0,d.Z)(function*(e){return new Promise((t,i)=>{const s=new FileReader;s.onload=()=>{const r=s.result;t(r.indexOf(",")>=0?r.split(",")[1]:r)},s.onerror=r=>i(r),s.readAsDataURL(e)})});return function(t){return o.apply(this,arguments)}}();class se extends y{request(e){return(0,d.Z)(function*(){const t=((o,e={})=>{const t=Object.assign({method:o.method||"GET",headers:o.headers},e),s=((o={})=>{const e=Object.keys(o);return Object.keys(o).map(s=>s.toLocaleLowerCase()).reduce((s,r,c)=>(s[r]=o[e[c]],s),{})})(o.headers)["content-type"]||"";if("string"==typeof o.data)t.body=o.data;else if(s.includes("application/x-www-form-urlencoded")){const r=new URLSearchParams;for(const[c,a]of Object.entries(o.data||{}))r.set(c,a);t.body=r.toString()}else if(s.includes("multipart/form-data")){const r=new FormData;if(o.data instanceof FormData)o.data.forEach((a,m)=>{r.append(m,a)});else for(const a of Object.keys(o.data))r.append(a,o.data[a]);t.body=r;const c=new Headers(t.headers);c.delete("content-type"),t.headers=c}else(s.includes("application/json")||"object"==typeof o.data)&&(t.body=JSON.stringify(o.data));return t})(e,e.webFetchExtra),i=((o,e=!0)=>o?Object.entries(o).reduce((i,s)=>{const[r,c]=s;let a,m;return Array.isArray(c)?(m="",c.forEach(u=>{a=e?encodeURIComponent(u):u,m+=`${r}=${a}&`}),m.slice(0,-1)):(a=e?encodeURIComponent(c):c,m=`${r}=${a}`),`${i}&${m}`},"").substr(1):null)(e.params,e.shouldEncodeUrlParams),s=i?`${e.url}?${i}`:e.url,r=yield fetch(s,t),c=r.headers.get("content-type")||"";let m,u,{responseType:a="text"}=r.ok?e:{};switch(c.includes("application/json")&&(a="json"),a){case"arraybuffer":case"blob":u=yield r.blob(),m=yield oe(u);break;case"json":m=yield r.json();break;default:m=yield r.text()}const D={};return r.headers.forEach((T,z)=>{D[z]=T}),{data:m,headers:D,status:r.status,url:r.url}})()}get(e){var t=this;return(0,d.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"GET"}))})()}post(e){var t=this;return(0,d.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"POST"}))})()}put(e){var t=this;return(0,d.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PUT"}))})()}patch(e){var t=this;return(0,d.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})()}delete(e){var t=this;return(0,d.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})()}}S("CapacitorHttp",{web:()=>new se})},9460:(ne,I,v)=>{v.r(I),v.d(I,{HomePageModule:()=>Y,options:()=>S});var d=v(6895),E=v(5035),H=v(433),$=v(1094),B=v(2598),R=v(655);const w=(0,v(7423).fo)("Storage",{web:()=>v.e(8913).then(v.bind(v,8913)).then(l=>new l.StorageWeb)});var n=v(8256);function q(l,y){if(1&l&&(n.TgZ(0,"span",24),n._uU(1),n.qZA()),2&l){const g=n.oxw();n.xp6(1),n.Oqu(g.valid)}}const Q=[{path:"",component:(()=>{class l{constructor(){this.data={number:"",message:"",save:!1},this.valid=""}ionViewWillEnter(){this.checkMessage()}send(){this.valid="",this.data.number?this.data.number.length<12?this.valid="N\xfamero inv\xe1lido!":this.openWpp(this.data.message,this.data.number):this.valid="N\xfamero \xe9 obrigat\xf3rio!"}openWpp(g,b){this.checkToSave(),window.open("https://api.whatsapp.com/send/?phone="+b+"&text="+encodeURI(g))}save(g){return(0,R.mG)(this,void 0,void 0,function*(){yield w.set({key:"message",value:g})})}checkMessage(){return(0,R.mG)(this,void 0,void 0,function*(){const{value:g}=yield w.get({key:"message"});g&&(this.data.message=g,this.data.save=!0)})}checkToSave(){return(0,R.mG)(this,void 0,void 0,function*(){const{value:g}=yield w.get({key:"message"});this.data.save?this.save(this.data.message):g&&(yield w.remove({key:"message"}))})}changeSave(){this.data.save=!this.data.save}redrectDev(){window.open("https://www.linkedin.com/in/jonas-bastani/","_blank")}}return l.\u0275fac=function(g){return new(g||l)},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-home"]],decls:36,vars:4,consts:[[1,"ion-no-padding"],[1,"header"],[1,"title"],["name","logo-whatsapp"],[1,"body"],[1,"container"],[1,"col-lg-6","col-12"],[1,"top_body"],[1,"center_body"],[1,"mb-3","mt-4"],["for","exampleInputEmail1",1,"form-label"],["mask","+00 (00) 00000-0000","placeholder","+00 (00) 00000-0000","type","text",1,"form-control",3,"ngModel","ngModelChange"],["class","sp-erro",4,"ngIf"],[1,"mb-3"],["placeholder","Descreva a mensagem que deseja enviar","type","text",1,"form-control","area_message",3,"ngModel","ngModelChange"],[1,"check-save","mb-3"],[1,"label-check"],[1,"toggler-wrapper","style-1"],["type","checkbox",3,"checked","change"],[1,"toggler-slider"],[1,"toggler-knob"],[1,"btn-send",3,"click"],[1,"sp_credit"],[3,"click"],[1,"sp-erro"]],template:function(g,b){1&g&&(n.TgZ(0,"ion-header",0)(1,"div",1)(2,"div",2)(3,"h4"),n._uU(4,"Whatsapp Chat Init"),n.qZA()(),n._UZ(5,"ion-icon",3),n.qZA()(),n.TgZ(6,"ion-content")(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7),n._UZ(11,"ion-icon",3),n.qZA(),n.TgZ(12,"div",8)(13,"div",9)(14,"label",10),n._uU(15,"N\xdaMERO"),n.qZA(),n.TgZ(16,"input",11),n.NdJ("ngModelChange",function(W){return b.data.number=W}),n.qZA(),n.YNc(17,q,2,1,"span",12),n.qZA(),n.TgZ(18,"div",13)(19,"label",10),n._uU(20,"SUA MENSAGEM"),n.qZA(),n.TgZ(21,"textarea",14),n.NdJ("ngModelChange",function(W){return b.data.message=W}),n.qZA()(),n.TgZ(22,"div",15)(23,"label",16),n._uU(24,"Salvar mensagem para envios futuros"),n.qZA(),n.TgZ(25,"label",17)(26,"input",18),n.NdJ("change",function(){return b.changeSave()}),n.qZA(),n.TgZ(27,"div",19),n._UZ(28,"div",20),n.qZA()()(),n.TgZ(29,"button",21),n.NdJ("click",function(){return b.send()}),n._uU(30,"ENVIAR"),n.qZA()()()(),n.TgZ(31,"div",22)(32,"span",23),n.NdJ("click",function(){return b.redrectDev()}),n._uU(33,"DESENVOLVIDO POR "),n.TgZ(34,"b"),n._uU(35,"JONAS BASTANI"),n.qZA()()()()()),2&g&&(n.xp6(16),n.Q6J("ngModel",b.data.number),n.xp6(1),n.Q6J("ngIf",b.valid),n.xp6(4),n.Q6J("ngModel",b.data.message),n.xp6(5),n.Q6J("checked",b.data.save))},dependencies:[d.O5,H.Fj,H.JJ,H.On,E.W2,E.Gu,E.gu,$.hx],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}ion-header[_ngcontent-%COMP%]{--padding-top: 0px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.header[_ngcontent-%COMP%]{background-color:#005c4b!important;height:50px;width:100%;padding-left:10px;padding-right:10px;display:flex;justify-content:flex-start;align-items:center}.header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{flex:1;color:#fff;text-transform:uppercase;padding-bottom:5px}.header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#fff;font-size:30px}.top_body[_ngcontent-%COMP%]{width:100%;text-align:center}.top_body[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:100px;color:#005c4b}label[_ngcontent-%COMP%]{color:#005c4b;font-weight:700}.center_body[_ngcontent-%COMP%]{width:100%;text-align:center}.container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column}.body[_ngcontent-%COMP%]{padding-top:20px;padding-bottom:20px;height:100%;width:100%;background:url(wpp_paper.0caa41890be95a05.jpg)!important}ion-content[_ngcontent-%COMP%]{--background: url(wpp_paper.0caa41890be95a05.jpg) !important}.area_message[_ngcontent-%COMP%]{min-height:150px}.check-save[_ngcontent-%COMP%]{display:flex;align-items:center;text-align:start}.check-save[_ngcontent-%COMP%]   .label-check[_ngcontent-%COMP%]{flex:1}.btn-send[_ngcontent-%COMP%]{width:100%;padding:10px;background-color:#005c4b;border-radius:5px}.sp_credit[_ngcontent-%COMP%]{color:#005c4b;text-align:center;position:absolute;bottom:20px;width:100%;cursor:pointer}"]}),l})()}];let k=(()=>{class l{}return l.\u0275fac=function(g){return new(g||l)},l.\u0275mod=n.oAB({type:l}),l.\u0275inj=n.cJS({imports:[B.Bz.forChild(Q),B.Bz]}),l})();const S=null;let Y=(()=>{class l{}return l.\u0275fac=function(g){return new(g||l)},l.\u0275mod=n.oAB({type:l}),l.\u0275inj=n.cJS({imports:[d.ez,H.u5,E.Pc,k,$.yI.forRoot()]}),l})()}}]);