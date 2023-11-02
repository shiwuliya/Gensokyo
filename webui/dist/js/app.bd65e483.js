(()=>{"use strict";var e={67993:(e,t,n)=>{var i=n(61957),s=n(71947),o=n(60499),c=n(59835);function r(e,t,n,i,s,o){const r=(0,c.up)("router-view");return(0,c.wg)(),(0,c.j4)(r)}const a=(0,c.aZ)({name:"App"});var u=n(11639);const p=(0,u.Z)(a,[["render",r]]),d=p;var h=n(23340),l=n(28339);const g=e=>t=>Object.entries(t.params).map((([t,n])=>({[t]:e[t]?new e[t](n):n}))).reduce(((e,t)=>Object.assign(Object.assign({},e),t)),{}),f=[{path:"/",component:()=>n.e(526).then(n.bind(n,10526)),children:[{path:"",name:"login",component:()=>n.e(248).then(n.bind(n,67248))},{path:"/index",component:()=>Promise.all([n.e(301),n.e(348)]).then(n.bind(n,26348))},{path:"/accounts/add",component:()=>n.e(819).then(n.bind(n,53819))},{path:"/accounts/:uin(\\d+)",component:()=>n.e(394).then(n.bind(n,63394)),props:g({uin:Number})},{path:"/accounts/:uin(\\d+)/config",component:()=>Promise.all([n.e(404),n.e(11),n.e(653),n.e(768),n.e(633),n.e(267),n.e(911),n.e(946),n.e(549),n.e(930),n.e(991)]).then(n.bind(n,96991)),props:g({uin:Number})},{path:"/accounts/:uin(\\d+)/device",component:()=>Promise.all([n.e(286),n.e(964),n.e(935),n.e(498),n.e(887),n.e(480),n.e(185),n.e(200),n.e(276),n.e(68),n.e(669),n.e(899),n.e(565),n.e(340),n.e(41),n.e(101),n.e(613),n.e(0),n.e(707),n.e(833)]).then(n.bind(n,19940)),props:g({uin:Number})}]},{path:"/:catchAll(.*)*",component:()=>n.e(79).then(n.bind(n,23079))}],b=f;var v=n(34136),A=function(e,t,n,i){function s(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function c(e){try{a(i.next(e))}catch(t){o(t)}}function r(e){try{a(i["throw"](e))}catch(t){o(t)}}function a(e){e.done?n(e.value):s(e.value).then(c,r)}a((i=i.apply(e,t||[])).next())}))};const O=(0,h.BC)((function(){const e=l.r5,t=(0,l.p7)({scrollBehavior:()=>({left:0,top:0}),routes:b,history:e("")}),n=()=>A(this,void 0,void 0,(function*(){try{const e=yield v.api.checkLoginStatus();return e.data.isLoggedIn}catch(e){return console.error("Error checking login status:",e),!1}}));return t.beforeEach(((e,t,i)=>A(this,void 0,void 0,(function*(){const t=yield n();t?"login"===e.name?i({path:"/index"}):i():"login"!==e.name?i({name:"login"}):i()})))),t}));async function U(e,t){const n=e(d);n.use(s.Z,t);const i=(0,o.Xl)("function"===typeof O?await O({}):O);return{app:n,router:i}}var j=n(88880),m=n(26950),P=n(46618),S=n(6827),y=n(47740),D=n(9114);const C={config:{},lang:j.Z,plugins:{Loading:m.Z,LoadingBar:P.Z,Notify:S.Z,Dialog:y.Z,Dark:D.Z}};n(49766);let L="function"===typeof d.preFetch?d.preFetch:void 0!==d.__c&&"function"===typeof d.__c.preFetch&&d.__c.preFetch;function w(e,t){const n=e?e.matched?e:t.resolve(e).route:t.currentRoute.value;if(!n)return[];const i=n.matched.filter((e=>void 0!==e.components));return 0===i.length?[]:Array.prototype.concat.apply([],i.map((e=>Object.keys(e.components).map((t=>{const n=e.components[t];return{path:e.path,c:n}})))))}function R({router:e,publicPath:t}){e.beforeResolve(((n,i,s)=>{const o=window.location.href.replace(window.location.origin,""),c=w(n,e),r=w(i,e);let a=!1;const u=c.filter(((e,t)=>a||(a=!r[t]||r[t].c!==e.c||e.path.indexOf("/:")>-1))).filter((e=>void 0!==e.c&&("function"===typeof e.c.preFetch||void 0!==e.c.__c&&"function"===typeof e.c.__c.preFetch))).map((e=>void 0!==e.c.__c?e.c.__c.preFetch:e.c.preFetch));if(!1!==L&&(u.unshift(L),L=!1),0===u.length)return s();let p=!1;const d=e=>{p=!0,s(e)},h=()=>{P.Z.stop(),!1===p&&s()};P.Z.start(),u.reduce(((e,s)=>e.then((()=>!1===p&&s({currentRoute:n,previousRoute:i,redirect:d,urlPath:o,publicPath:t})))),Promise.resolve()).then(h).catch((e=>{console.error(e),h()}))}))}const G="";async function E({app:e,router:t},n){let i=!1;const s=e=>{try{return t.resolve(e).href}catch(n){}return Object(e)===e?null:e},o=e=>{if(i=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=s(e);null!==t&&(window.location.href=t,window.location.reload())},c=window.location.href.replace(window.location.origin,"");for(let a=0;!1===i&&a<n.length;a++)try{await n[a]({app:e,router:t,ssrContext:null,redirect:o,urlPath:c,publicPath:G})}catch(r){return r&&r.url?void o(r.url):void console.error("[Quasar] boot error:",r)}!0!==i&&(e.use(t),R({router:t}),e.mount("#q-app"))}U(i.ri,C).then((e=>{const[t,i]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(n.bind(n,34136))]).then((t=>{const n=i(t).filter((e=>"function"===typeof e));E(e,n)}))}))},22003:(e,t,n)=>{n.d(t,{Zn:()=>A,dJ:()=>f});var i=n(37524);const s="http://127.0.0.1:3000/go-cqhttp".replace(/\/+$/,"");class o{constructor(e,t=s,n=i.Z){this.basePath=t,this.axios=n,e&&(this.configuration=e,this.basePath=e.basePath||this.basePath)}}class c extends Error{constructor(e,t){super(t),this.field=e,this.name="RequiredError"}}const r="https://example.com",a=function(e,t,n){if(null===n||void 0===n)throw new c(t,`Required parameter ${t} was null or undefined when calling ${e}.`)};function u(e,t,n=""){null!=t&&("object"===typeof t?Array.isArray(t)?t.forEach((t=>u(e,t,n))):Object.keys(t).forEach((i=>u(e,t[i],`${n}${""!==n?".":""}${i}`))):e.has(n)?e.append(n,t):e.set(n,t))}const p=function(e,...t){const n=new URLSearchParams(e.search);u(n,t),e.search=n.toString()},d=function(e,t,n){const i="string"!==typeof e,s=i&&n&&n.isJsonMime?n.isJsonMime(t.headers["Content-Type"]):i;return s?JSON.stringify(void 0!==e?e:{}):e||""},h=function(e){return e.pathname+e.search+e.hash},l=function(e,t,n,i){return(s=t,o=n)=>{const c=Object.assign(Object.assign({},e.options),{url:((null===i||void 0===i?void 0:i.basePath)||o)+e.url});return s.request(c)}};var g=function(e,t,n,i){function s(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function c(e){try{a(i.next(e))}catch(t){o(t)}}function r(e){try{a(i["throw"](e))}catch(t){o(t)}}function a(e){e.done?n(e.value):s(e.value).then(c,r)}a((i=i.apply(e,t||[])).next())}))};const f={Stdout:"STDOUT",Debug:"DEBUG",Info:"INFO",Warning:"WARNING",Error:"ERROR",Fatal:"FATAL"},b=function(e){return{accountApiApiUinApiPost:(t,n,i,s={})=>g(this,void 0,void 0,(function*(){a("accountApiApiUinApiPost","uin",t),a("accountApiApiUinApiPost","name",n),a("accountApiApiUinApiPost","body",i);const o="/api/{uin}/api".replace("{uin}",encodeURIComponent(String(t))),c=new URL(o,r);let u;e&&(u=e.baseOptions);const l=Object.assign(Object.assign({method:"POST"},u),s),g={},f={};void 0!==n&&(f["name"]=n),g["Content-Type"]="application/json",p(c,f);let b=u&&u.headers?u.headers:{};return l.headers=Object.assign(Object.assign(Object.assign({},g),b),s.headers),l.data=d(i,l,e),{url:h(c),options:l}})),accountConfigDeleteApiUinConfigDelete:(t,n={})=>g(this,void 0,void 0,(function*(){a("accountConfigDeleteApiUinConfigDelete","uin",t);const i="/api/{uin}/config".replace("{uin}",encodeURIComponent(String(t))),s=new URL(i,r);let o;e&&(o=e.baseOptions);const c=Object.assign(Object.assign({method:"DELETE"},o),n),u={},d={};p(s,d);let l=o&&o.headers?o.headers:{};return c.headers=Object.assign(Object.assign(Object.assign({},u),l),n.headers),{url:h(s),options:c}})),accountConfigReadApiUinConfigGet:(t,n={})=>g(this,void 0,void 0,(function*(){a("accountConfigReadApiUinConfigGet","uin",t);const i="/api/{uin}/config".replace("{uin}",encodeURIComponent(String(t))),s=new URL(i,r);let o;e&&(o=e.baseOptions);const c=Object.assign(Object.assign({method:"GET"},o),n),u={},d={};p(s,d);let l=o&&o.headers?o.headers:{};return c.headers=Object.assign(Object.assign(Object.assign({},u),l),n.headers),{url:h(s),options:c}})),accountConfigWriteApiUinConfigPatch:(t,n,i={})=>g(this,void 0,void 0,(function*(){a("accountConfigWriteApiUinConfigPatch","uin",t),a("accountConfigWriteApiUinConfigPatch","accountConfigFile",n);const s="/api/{uin}/config".replace("{uin}",encodeURIComponent(String(t))),o=new URL(s,r);let c;e&&(c=e.baseOptions);const u=Object.assign(Object.assign({method:"PATCH"},c),i),l={},g={};l["Content-Type"]="application/json",p(o,g);let f=c&&c.headers?c.headers:{};return u.headers=Object.assign(Object.assign(Object.assign({},l),f),i.headers),u.data=d(n,u,e),{url:h(o),options:u}})),accountDeviceDeleteApiUinDeviceDelete:(t,n={})=>g(this,void 0,void 0,(function*(){a("accountDeviceDeleteApiUinDeviceDelete","uin",t);const i="/api/{uin}/device".replace("{uin}",encodeURIComponent(String(t))),s=new URL(i,r);let o;e&&(o=e.baseOptions);const c=Object.assign(Object.assign({method:"DELETE"},o),n),u={},d={};p(s,d);let l=o&&o.headers?o.headers:{};return c.headers=Object.assign(Object.assign(Object.assign({},u),l),n.headers),{url:h(s),options:c}})),accountDeviceReadApiUinDeviceGet:(t,n={})=>g(this,void 0,void 0,(function*(){a("accountDeviceReadApiUinDeviceGet","uin",t);const i="/api/{uin}/device".replace("{uin}",encodeURIComponent(String(t))),s=new URL(i,r);let o;e&&(o=e.baseOptions);const c=Object.assign(Object.assign({method:"GET"},o),n),u={},d={};p(s,d);let l=o&&o.headers?o.headers:{};return c.headers=Object.assign(Object.assign(Object.assign({},u),l),n.headers),{url:h(s),options:c}})),accountDeviceWriteApiUinDevicePatch:(t,n,i={})=>g(this,void 0,void 0,(function*(){a("accountDeviceWriteApiUinDevicePatch","uin",t),a("accountDeviceWriteApiUinDevicePatch","deviceInfo",n);const s="/api/{uin}/device".replace("{uin}",encodeURIComponent(String(t))),o=new URL(s,r);let c;e&&(c=e.baseOptions);const u=Object.assign(Object.assign({method:"PATCH"},c),i),l={},g={};l["Content-Type"]="application/json",p(o,g);let f=c&&c.headers?c.headers:{};return u.headers=Object.assign(Object.assign(Object.assign({},l),f),i.headers),u.data=d(n,u,e),{url:h(o),options:u}})),accountSessionDeleteApiUinSessionDelete:(t,n={})=>g(this,void 0,void 0,(function*(){a("accountSessionDeleteApiUinSessionDelete","uin",t);const i="/api/{uin}/session".replace("{uin}",encodeURIComponent(String(t))),s=new URL(i,r);let o;e&&(o=e.baseOptions);const c=Object.assign(Object.assign({method:"DELETE"},o),n),u={},d={};p(s,d);let l=o&&o.headers?o.headers:{};return c.headers=Object.assign(Object.assign(Object.assign({},u),l),n.headers),{url:h(s),options:c}})),accountSessionReadApiUinSessionGet:(t,n={})=>g(this,void 0,void 0,(function*(){a("accountSessionReadApiUinSessionGet","uin",t);const i="/api/{uin}/session".replace("{uin}",encodeURIComponent(String(t))),s=new URL(i,r);let o;e&&(o=e.baseOptions);const c=Object.assign(Object.assign({method:"GET"},o),n),u={},d={};p(s,d);let l=o&&o.headers?o.headers:{};return c.headers=Object.assign(Object.assign(Object.assign({},u),l),n.headers),{url:h(s),options:c}})),accountSessionWriteApiUinSessionPatch:(t,n,i={})=>g(this,void 0,void 0,(function*(){a("accountSessionWriteApiUinSessionPatch","uin",t),a("accountSessionWriteApiUinSessionPatch","sessionTokenFile",n);const s="/api/{uin}/session".replace("{uin}",encodeURIComponent(String(t))),o=new URL(s,r);let c;e&&(c=e.baseOptions);const u=Object.assign(Object.assign({method:"PATCH"},c),i),l={},g={};l["Content-Type"]="application/json",p(o,g);let f=c&&c.headers?c.headers:{};return u.headers=Object.assign(Object.assign(Object.assign({},l),f),i.headers),u.data=d(n,u,e),{url:h(o),options:u}})),allAccountsApiAccountsGet:(t,n={})=>g(this,void 0,void 0,(function*(){const i="/api/accounts",s=new URL(i,r);let o;e&&(o=e.baseOptions);const c=Object.assign(Object.assign({method:"GET"},o),n),a={},u={};void 0!==t&&(u["nickname_cache"]=t),p(s,u);let d=o&&o.headers?o.headers:{};return c.headers=Object.assign(Object.assign(Object.assign({},a),d),n.headers),{url:h(s),options:c}})),createAccountApiUinPut:(t,n,i={})=>g(this,void 0,void 0,(function*(){a("createAccountApiUinPut","uin",t);const s="/api/{uin}".replace("{uin}",encodeURIComponent(String(t))),o=new URL(s,r);let c;e&&(c=e.baseOptions);const u=Object.assign(Object.assign({method:"PUT"},c),i),l={},g={};l["Content-Type"]="application/json",p(o,g);let f=c&&c.headers?c.headers:{};return u.headers=Object.assign(Object.assign(Object.assign({},l),f),i.headers),u.data=d(n,u,e),{url:h(o),options:u}})),deleteAccountApiUinDelete:(t,n,i={})=>g(this,void 0,void 0,(function*(){a("deleteAccountApiUinDelete","uin",t);const s="/api/{uin}".replace("{uin}",encodeURIComponent(String(t))),o=new URL(s,r);let c;e&&(c=e.baseOptions);const u=Object.assign(Object.assign({method:"DELETE"},c),i),d={},l={};void 0!==n&&(l["with_file"]=n),p(o,l);let g=c&&c.headers?c.headers:{};return u.headers=Object.assign(Object.assign(Object.assign({},d),g),i.headers),{url:h(o),options:u}})),processInputLineApiUinProcessLogsPost:(t,n,i={})=>g(this,void 0,void 0,(function*(){a("processInputLineApiUinProcessLogsPost","uin",t),a("processInputLineApiUinProcessLogsPost","stdinInputContent",n);const s="/api/{uin}/process/logs".replace("{uin}",encodeURIComponent(String(t))),o=new URL(s,r);let c;e&&(c=e.baseOptions);const u=Object.assign(Object.assign({method:"POST"},c),i),l={},g={};l["Content-Type"]="application/json",p(o,g);let f=c&&c.headers?c.headers:{};return u.headers=Object.assign(Object.assign(Object.assign({},l),f),i.headers),u.data=d(n,u,e),{url:h(o),options:u}})),processLogsHistoryApiUinProcessLogsGet:(t,n,i={})=>g(this,void 0,void 0,(function*(){a("processLogsHistoryApiUinProcessLogsGet","uin",t);const s="/api/{uin}/process/logs".replace("{uin}",encodeURIComponent(String(t))),o=new URL(s,r);let c;e&&(c=e.baseOptions);const u=Object.assign(Object.assign({method:"GET"},c),i),d={},l={};void 0!==n&&(l["reverse"]=n),p(o,l);let g=c&&c.headers?c.headers:{};return u.headers=Object.assign(Object.assign(Object.assign({},d),g),i.headers),{url:h(o),options:u}})),processStartApiUinProcessPut:(t,n={})=>g(this,void 0,void 0,(function*(){a("processStartApiUinProcessPut","uin",t);const i="/api/{uin}/process".replace("{uin}",encodeURIComponent(String(t))),s=new URL(i,r);let o;e&&(o=e.baseOptions);const c=Object.assign(Object.assign({method:"PUT"},o),n),u={},d={};p(s,d);let l=o&&o.headers?o.headers:{};return c.headers=Object.assign(Object.assign(Object.assign({},u),l),n.headers),{url:h(s),options:c}})),processStatusApiUinProcessStatusGet:(t,n={})=>g(this,void 0,void 0,(function*(){a("processStatusApiUinProcessStatusGet","uin",t);const i="/api/{uin}/process/status".replace("{uin}",encodeURIComponent(String(t))),s=new URL(i,r);let o;e&&(o=e.baseOptions);const c=Object.assign(Object.assign({method:"GET"},o),n),u={},d={};p(s,d);let l=o&&o.headers?o.headers:{};return c.headers=Object.assign(Object.assign(Object.assign({},u),l),n.headers),{url:h(s),options:c}})),processStopApiUinProcessDelete:(t,n={})=>g(this,void 0,void 0,(function*(){a("processStopApiUinProcessDelete","uin",t);const i="/api/{uin}/process".replace("{uin}",encodeURIComponent(String(t))),s=new URL(i,r);let o;e&&(o=e.baseOptions);const c=Object.assign(Object.assign({method:"DELETE"},o),n),u={},d={};p(s,d);let l=o&&o.headers?o.headers:{};return c.headers=Object.assign(Object.assign(Object.assign({},u),l),n.headers),{url:h(s),options:c}})),systemLogsHistoryApiLogsGet:(t,n={})=>g(this,void 0,void 0,(function*(){const i="/api/logs",s=new URL(i,r);let o;e&&(o=e.baseOptions);const c=Object.assign(Object.assign({method:"GET"},o),n),a={},u={};void 0!==t&&(u["reverse"]=t),p(s,u);let d=o&&o.headers?o.headers:{};return c.headers=Object.assign(Object.assign(Object.assign({},a),d),n.headers),{url:h(s),options:c}})),systemStatusApiStatusGet:(t={})=>g(this,void 0,void 0,(function*(){const n="/api/status",i=new URL(n,r);let s;e&&(s=e.baseOptions);const o=Object.assign(Object.assign({method:"GET"},s),t),c={},a={};p(i,a);let u=s&&s.headers?s.headers:{};return o.headers=Object.assign(Object.assign(Object.assign({},c),u),t.headers),{url:h(i),options:o}})),loginApi:(t,n,i={})=>g(this,void 0,void 0,(function*(){a("loginApi","username",t),a("loginApi","password",n);const s="/api/login",o=new URL(s,r);let c;e&&(c=e.baseOptions);const u={username:t,password:n},d=Object.assign(Object.assign(Object.assign({method:"POST"},c),i),{data:u}),l={},g={};p(o,g);const f=c&&c.headers?c.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},l),f),i.headers),{url:h(o),options:d}})),checkLoginStatus:(t={})=>g(this,void 0,void 0,(function*(){const n="/api/check-login-status",i=new URL(n,r);let s;e&&(s=e.baseOptions);const o={withCredentials:!0},c=Object.assign(Object.assign(Object.assign({method:"GET"},s),o),t),a={},u={};p(i,u);const d=s&&s.headers?s.headers:{};return c.headers=Object.assign(Object.assign(Object.assign({},a),d),t.headers),{url:h(i),options:c}}))}},v=function(e){const t=b(e);return{accountApiApiUinApiPost(n,o,c,r){return g(this,void 0,void 0,(function*(){const a=yield t.accountApiApiUinApiPost(n,o,c,r);return l(a,i.Z,s,e)}))},accountConfigDeleteApiUinConfigDelete(n,o){return g(this,void 0,void 0,(function*(){const c=yield t.accountConfigDeleteApiUinConfigDelete(n,o);return l(c,i.Z,s,e)}))},accountConfigReadApiUinConfigGet(n,o){return g(this,void 0,void 0,(function*(){const c=yield t.accountConfigReadApiUinConfigGet(n,o);return l(c,i.Z,s,e)}))},accountConfigWriteApiUinConfigPatch(n,o,c){return g(this,void 0,void 0,(function*(){const r=yield t.accountConfigWriteApiUinConfigPatch(n,o,c);return l(r,i.Z,s,e)}))},accountDeviceDeleteApiUinDeviceDelete(n,o){return g(this,void 0,void 0,(function*(){const c=yield t.accountDeviceDeleteApiUinDeviceDelete(n,o);return l(c,i.Z,s,e)}))},accountDeviceReadApiUinDeviceGet(n,o){return g(this,void 0,void 0,(function*(){const c=yield t.accountDeviceReadApiUinDeviceGet(n,o);return l(c,i.Z,s,e)}))},accountDeviceWriteApiUinDevicePatch(n,o,c){return g(this,void 0,void 0,(function*(){const r=yield t.accountDeviceWriteApiUinDevicePatch(n,o,c);return l(r,i.Z,s,e)}))},accountSessionDeleteApiUinSessionDelete(n,o){return g(this,void 0,void 0,(function*(){const c=yield t.accountSessionDeleteApiUinSessionDelete(n,o);return l(c,i.Z,s,e)}))},accountSessionReadApiUinSessionGet(n,o){return g(this,void 0,void 0,(function*(){const c=yield t.accountSessionReadApiUinSessionGet(n,o);return l(c,i.Z,s,e)}))},accountSessionWriteApiUinSessionPatch(n,o,c){return g(this,void 0,void 0,(function*(){const r=yield t.accountSessionWriteApiUinSessionPatch(n,o,c);return l(r,i.Z,s,e)}))},allAccountsApiAccountsGet(n,o){return g(this,void 0,void 0,(function*(){const c=yield t.allAccountsApiAccountsGet(n,o);return l(c,i.Z,s,e)}))},createAccountApiUinPut(n,o,c){return g(this,void 0,void 0,(function*(){const r=yield t.createAccountApiUinPut(n,o,c);return l(r,i.Z,s,e)}))},deleteAccountApiUinDelete(n,o,c){return g(this,void 0,void 0,(function*(){const r=yield t.deleteAccountApiUinDelete(n,o,c);return l(r,i.Z,s,e)}))},processInputLineApiUinProcessLogsPost(n,o,c){return g(this,void 0,void 0,(function*(){const r=yield t.processInputLineApiUinProcessLogsPost(n,o,c);return l(r,i.Z,s,e)}))},processLogsHistoryApiUinProcessLogsGet(n,o,c){return g(this,void 0,void 0,(function*(){const r=yield t.processLogsHistoryApiUinProcessLogsGet(n,o,c);return l(r,i.Z,s,e)}))},processStartApiUinProcessPut(n,o){return g(this,void 0,void 0,(function*(){const c=yield t.processStartApiUinProcessPut(n,o);return l(c,i.Z,s,e)}))},processStatusApiUinProcessStatusGet(n,o){return g(this,void 0,void 0,(function*(){const c=yield t.processStatusApiUinProcessStatusGet(n,o);return l(c,i.Z,s,e)}))},processStopApiUinProcessDelete(n,o){return g(this,void 0,void 0,(function*(){const c=yield t.processStopApiUinProcessDelete(n,o);return l(c,i.Z,s,e)}))},systemLogsHistoryApiLogsGet(n,o){return g(this,void 0,void 0,(function*(){const c=yield t.systemLogsHistoryApiLogsGet(n,o);return l(c,i.Z,s,e)}))},systemStatusApiStatusGet(n){return g(this,void 0,void 0,(function*(){const o=yield t.systemStatusApiStatusGet(n);return l(o,i.Z,s,e)}))},loginApi(n,o,c){return g(this,void 0,void 0,(function*(){const r=yield t.loginApi(n,o,c);return l(r,i.Z,s,e)}))},checkLoginStatus(n){return g(this,void 0,void 0,(function*(){const o=yield t.checkLoginStatus(n);return l(o,i.Z,s,e)}))}}};class A extends o{accountApiApiUinApiPost(e,t,n,i){return v(this.configuration).accountApiApiUinApiPost(e,t,n,i).then((e=>e(this.axios,this.basePath)))}accountConfigDeleteApiUinConfigDelete(e,t){return v(this.configuration).accountConfigDeleteApiUinConfigDelete(e,t).then((e=>e(this.axios,this.basePath)))}accountConfigReadApiUinConfigGet(e,t){return v(this.configuration).accountConfigReadApiUinConfigGet(e,t).then((e=>e(this.axios,this.basePath)))}accountConfigWriteApiUinConfigPatch(e,t,n){return v(this.configuration).accountConfigWriteApiUinConfigPatch(e,t,n).then((e=>e(this.axios,this.basePath)))}accountDeviceDeleteApiUinDeviceDelete(e,t){return v(this.configuration).accountDeviceDeleteApiUinDeviceDelete(e,t).then((e=>e(this.axios,this.basePath)))}accountDeviceReadApiUinDeviceGet(e,t){return v(this.configuration).accountDeviceReadApiUinDeviceGet(e,t).then((e=>e(this.axios,this.basePath)))}accountDeviceWriteApiUinDevicePatch(e,t,n){return v(this.configuration).accountDeviceWriteApiUinDevicePatch(e,t,n).then((e=>e(this.axios,this.basePath)))}accountSessionDeleteApiUinSessionDelete(e,t){return v(this.configuration).accountSessionDeleteApiUinSessionDelete(e,t).then((e=>e(this.axios,this.basePath)))}accountSessionReadApiUinSessionGet(e,t){return v(this.configuration).accountSessionReadApiUinSessionGet(e,t).then((e=>e(this.axios,this.basePath)))}accountSessionWriteApiUinSessionPatch(e,t,n){return v(this.configuration).accountSessionWriteApiUinSessionPatch(e,t,n).then((e=>e(this.axios,this.basePath)))}allAccountsApiAccountsGet(e,t){return v(this.configuration).allAccountsApiAccountsGet(e,t).then((e=>e(this.axios,this.basePath)))}createAccountApiUinPut(e,t,n){return v(this.configuration).createAccountApiUinPut(e,t,n).then((e=>e(this.axios,this.basePath)))}deleteAccountApiUinDelete(e,t,n){return v(this.configuration).deleteAccountApiUinDelete(e,t,n).then((e=>e(this.axios,this.basePath)))}processInputLineApiUinProcessLogsPost(e,t,n){return v(this.configuration).processInputLineApiUinProcessLogsPost(e,t,n).then((e=>e(this.axios,this.basePath)))}processLogsHistoryApiUinProcessLogsGet(e,t,n){return v(this.configuration).processLogsHistoryApiUinProcessLogsGet(e,t,n).then((e=>e(this.axios,this.basePath)))}processStartApiUinProcessPut(e,t){return v(this.configuration).processStartApiUinProcessPut(e,t).then((e=>e(this.axios,this.basePath)))}processStatusApiUinProcessStatusGet(e,t){return v(this.configuration).processStatusApiUinProcessStatusGet(e,t).then((e=>e(this.axios,this.basePath)))}processStopApiUinProcessDelete(e,t){return v(this.configuration).processStopApiUinProcessDelete(e,t).then((e=>e(this.axios,this.basePath)))}systemLogsHistoryApiLogsGet(e,t){return v(this.configuration).systemLogsHistoryApiLogsGet(e,t).then((e=>e(this.axios,this.basePath)))}systemStatusApiStatusGet(e){return v(this.configuration).systemStatusApiStatusGet(e).then((e=>e(this.axios,this.basePath)))}loginApi(e,t,n){return v(this.configuration).loginApi(e,t,n).then((e=>e(this.axios,this.basePath)))}checkLoginStatus(e){return v(this.configuration).checkLoginStatus(e).then((e=>e(this.axios,this.basePath)))}}},34136:(e,t,n)=>{n.r(t),n.d(t,{api:()=>c,default:()=>r});var i=n(23340),s=n(37524),o=n(22003);const c=new o.Zn(void 0,"."),r=(0,i.xr)((({app:e})=>{e.config.globalProperties.$axios=s.Z,e.config.globalProperties.$api=c}))}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,n),o.exports}n.m=e,(()=>{n.amdO={}})(),(()=>{var e=[];n.O=(t,i,s,o)=>{if(!i){var c=1/0;for(p=0;p<e.length;p++){for(var[i,s,o]=e[p],r=!0,a=0;a<i.length;a++)(!1&o||c>=o)&&Object.keys(n.O).every((e=>n.O[e](i[a])))?i.splice(a--,1):(r=!1,o<c&&(c=o));if(r){e.splice(p--,1);var u=s();void 0!==u&&(t=u)}}return t}o=o||0;for(var p=e.length;p>0&&e[p-1][2]>o;p--)e[p]=e[p-1];e[p]=[i,s,o]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}})(),(()=>{n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,i)=>(n.f[i](e,t),t)),[]))})(),(()=>{n.u=e=>"js/"+e+"."+{0:"550fd0b7",11:"6bec98b7",41:"d383db6f",68:"c311e96a",79:"ccad89c8",101:"9dae6a1f",185:"98e01d09",200:"700b4a3e",248:"1dda8807",267:"ea6708fe",276:"533b6178",286:"c9a218ff",301:"6513918c",340:"f0b2e7b1",348:"78d4b473",394:"fb939bbe",404:"7afa5720",411:"3d66c707",480:"cddcb899",498:"80fb14a3",526:"f2df3424",549:"4c1ff9e0",565:"0fa370c2",613:"2f77d1af",633:"ed3b10f9",653:"c3867ca0",669:"80e4558c",707:"ee7c47e7",768:"ab532da8",819:"1b09728b",833:"08d3306c",853:"c5fe3f1f",887:"bd39baa1",899:"9935c058",911:"7062743b",930:"c9386f63",935:"59d7d3e7",946:"31907baf",964:"341ec7d3",991:"5a3c7883"}[e]+".js"})(),(()=>{n.miniCssF=e=>"css/"+e+"."+{248:"31d6cfe0",348:"b7f28e0f",394:"fc947aa7",833:"f88b1e81"}[e]+".css"})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="frontend:";n.l=(i,s,o,c)=>{if(e[i])e[i].push(s);else{var r,a;if(void 0!==o)for(var u=document.getElementsByTagName("script"),p=0;p<u.length;p++){var d=u[p];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==t+o){r=d;break}}r||(a=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",t+o),r.src=i),e[i]=[s];var h=(t,n)=>{r.onerror=r.onload=null,clearTimeout(l);var s=e[i];if(delete e[i],r.parentNode&&r.parentNode.removeChild(r),s&&s.forEach((e=>e(n))),t)return t(n)},l=setTimeout(h.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=h.bind(null,r.onerror),r.onload=h.bind(null,r.onload),a&&document.head.appendChild(r)}}})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.p=""})(),(()=>{if("undefined"!==typeof document){var e=(e,t,n,i,s)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var c=n=>{if(o.onerror=o.onload=null,"load"===n.type)i();else{var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.href||t,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=c,a.request=r,o.parentNode.removeChild(o),s(a)}};return o.onerror=o.onload=c,o.href=t,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},t=(e,t)=>{for(var n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var s=n[i],o=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(o===e||o===t))return s}var c=document.getElementsByTagName("style");for(i=0;i<c.length;i++){s=c[i],o=s.getAttribute("data-href");if(o===e||o===t)return s}},i=i=>new Promise(((s,o)=>{var c=n.miniCssF(i),r=n.p+c;if(t(c,r))return s();e(i,r,null,s,o)})),s={143:0};n.f.miniCss=(e,t)=>{var n={248:1,348:1,394:1,833:1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=i(e).then((()=>{s[e]=0}),(t=>{throw delete s[e],t})))}}})(),(()=>{var e={143:0};n.f.j=(t,i)=>{var s=n.o(e,t)?e[t]:void 0;if(0!==s)if(s)i.push(s[2]);else{var o=new Promise(((n,i)=>s=e[t]=[n,i]));i.push(s[2]=o);var c=n.p+n.u(t),r=new Error,a=i=>{if(n.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var o=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.src;r.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",r.name="ChunkLoadError",r.type=o,r.request=c,s[1](r)}};n.l(c,a,"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,i)=>{var s,o,[c,r,a]=i,u=0;if(c.some((t=>0!==e[t]))){for(s in r)n.o(r,s)&&(n.m[s]=r[s]);if(a)var p=a(n)}for(t&&t(i);u<c.length;u++)o=c[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(p)},i=globalThis["webpackChunkfrontend"]=globalThis["webpackChunkfrontend"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var i=n.O(void 0,[291,361,957],(()=>n(67993)));i=n.O(i)})();