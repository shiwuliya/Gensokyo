(globalThis["webpackChunkfrontend"]=globalThis["webpackChunkfrontend"]||[]).push([[248],{69984:e=>{e.exports=function(e,o,t){const n=void 0!==e.__vccOpts?e.__vccOpts:e,a=n[o];if(void 0===a)n[o]=t;else for(const r in t)void 0===a[r]&&(a[r]=t[r])}},8326:(e,o,t)=>{"use strict";t.d(o,{Z:()=>d});t(72879);var n=t(59835),a=t(60499),r=t(65987),c=t(91384),s=t(17026),i=t(22026),u=t(95439),l=t(52046);const d=(0,r.L)({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(e,{slots:o,emit:t}){const r=(0,n.FN)(),d=(0,a.iH)(null);let f=0;const p=[];function m(o){const n="boolean"===typeof o?o:!0!==e.noErrorFocus,a=++f,r=(e,o)=>{t("validation"+(!0===e?"Success":"Error"),o)},c=e=>{const o=e.validate();return"function"===typeof o.then?o.then((o=>({valid:o,comp:e})),(o=>({valid:!1,comp:e,err:o}))):Promise.resolve({valid:o,comp:e})},s=!0===e.greedy?Promise.all(p.map(c)).then((e=>e.filter((e=>!0!==e.valid)))):p.reduce(((e,o)=>e.then((()=>c(o).then((e=>{if(!1===e.valid)return Promise.reject(e)}))))),Promise.resolve()).catch((e=>[e]));return s.then((e=>{if(void 0===e||0===e.length)return a===f&&r(!0),!0;if(a===f){const{comp:o,err:t}=e[0];if(void 0!==t&&console.error(t),r(!1,o),!0===n){const o=e.find((({comp:e})=>"function"===typeof e.focus&&!1===(0,l.$D)(e.$)));void 0!==o&&o.comp.focus()}}return!1}))}function v(){f++,p.forEach((e=>{"function"===typeof e.resetValidation&&e.resetValidation()}))}function h(o){void 0!==o&&(0,c.NS)(o);const n=f+1;m().then((a=>{n===f&&!0===a&&(void 0!==e.onSubmit?t("submit",o):void 0!==o&&void 0!==o.target&&"function"===typeof o.target.submit&&o.target.submit())}))}function g(o){void 0!==o&&(0,c.NS)(o),t("reset"),(0,n.Y3)((()=>{v(),!0===e.autofocus&&!0!==e.noResetFocus&&y()}))}function y(){(0,s.jd)((()=>{if(null===d.value)return;const e=d.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||d.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||d.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(d.value.querySelectorAll("[tabindex]"),(e=>e.tabIndex>-1));null!==e&&void 0!==e&&e.focus({preventScroll:!0})}))}(0,n.JJ)(u.vh,{bindComponent(e){p.push(e)},unbindComponent(e){const o=p.indexOf(e);o>-1&&p.splice(o,1)}});let b=!1;return(0,n.se)((()=>{b=!0})),(0,n.dl)((()=>{!0===b&&!0===e.autofocus&&y()})),(0,n.bv)((()=>{!0===e.autofocus&&y()})),Object.assign(r.proxy,{validate:m,resetValidation:v,submit:h,reset:g,focus:y,getValidationComponents:()=>p}),()=>(0,n.h)("form",{class:"q-form",ref:d,onSubmit:h,onReset:g},(0,i.KR)(o.default))}})},69885:(e,o,t)=>{"use strict";t.d(o,{Z:()=>s});var n=t(59835),a=t(65987),r=t(22026),c=t(95439);const s=(0,a.L)({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:o}){const{proxy:{$q:t}}=(0,n.FN)(),a=(0,n.f3)(c.YE,c.qO);if(a===c.qO)return console.error("QPage needs to be a deep child of QLayout"),c.qO;const s=(0,n.f3)(c.Mw,c.qO);if(s===c.qO)return console.error("QPage needs to be child of QPageContainer"),c.qO;const i=(0,n.Fl)((()=>{const o=(!0===a.header.space?a.header.size:0)+(!0===a.footer.space?a.footer.size:0);if("function"===typeof e.styleFn){const n=!0===a.isContainer.value?a.containerHeight.value:t.screen.height;return e.styleFn(o,n)}return{minHeight:!0===a.isContainer.value?a.containerHeight.value-o+"px":0===t.screen.height?0!==o?`calc(100vh - ${o}px)`:"100vh":t.screen.height-o+"px"}})),u=(0,n.Fl)((()=>"q-page"+(!0===e.padding?" q-layout-padding":"")));return()=>(0,n.h)("main",{class:u.value,style:i.value},(0,r.KR)(o.default))}})},67248:(e,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>_});var n=t(59835),a=t(34136),r=t(60499),c=t(28339),s=function(e,o,t,n){function a(e){return e instanceof t?e:new t((function(o){o(e)}))}return new(t||(t=Promise))((function(t,r){function c(e){try{i(n.next(e))}catch(o){r(o)}}function s(e){try{i(n["throw"](e))}catch(o){r(o)}}function i(e){e.done?t(e.value):a(e.value).then(c,s)}i((n=n.apply(e,o||[])).next())}))};const i={class:"text-h5"},u=(0,n.aZ)({__name:"LoginView",setup(e){const o=(0,c.tv)(),t=(0,r.iH)(!1);function u(){return s(this,void 0,void 0,(function*(){try{const{data:e}=yield a.api.checkLoginStatus();t.value=e.isLoggedIn,t.value&&o.push("/index")}catch(e){console.error("Error checking login status:",e),t.value=!1}}))}function l(e,n){return s(this,void 0,void 0,(function*(){if(e&&n)try{const{data:r}=yield a.api.loginApi(e,n);r.success&&(t.value=!0,o.push("/index"))}catch(r){}}))}return(0,n.bv)((()=>{u().catch((e=>{console.error("Failed to check login status:",e)}))})),(e,o)=>{const t=(0,n.up)("q-icon"),a=(0,n.up)("q-card-section"),r=(0,n.up)("q-separator"),c=(0,n.up)("q-input"),s=(0,n.up)("q-btn"),u=(0,n.up)("q-card-actions"),d=(0,n.up)("q-form"),f=(0,n.up)("q-card"),p=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(p,{class:"row justify-center"},{default:(0,n.w5)((()=>[(0,n.Wm)(f,{class:"col-12 col-xs-8 col-sm-6 col-md-4 shadow q-pa-md self-center"},{default:(0,n.w5)((()=>[(0,n.Wm)(a,null,{default:(0,n.w5)((()=>[(0,n._)("div",i,[(0,n.Wm)(t,{name:"login",color:"accent"}),(0,n.Uk)(" 登录 ")])])),_:1}),(0,n.Wm)(r),(0,n.Wm)(d,{autocorrect:"off",autocapitalize:"off",autocomplete:"off",spellcheck:"false",onSubmit:l,onReset:e.clearForm},{default:(0,n.w5)((()=>[(0,n.Wm)(a,{class:"q-gutter-md"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{modelValue:e.username,"onUpdate:modelValue":o[0]||(o[0]=o=>e.username=o),filled:"",clearable:"",label:"用户名",required:""},{prepend:(0,n.w5)((()=>[(0,n.Wm)(t,{name:"person"})])),_:1},8,["modelValue"]),(0,n.Wm)(c,{modelValue:e.password,"onUpdate:modelValue":o[1]||(o[1]=o=>e.password=o),type:"password",filled:"",clearable:"",label:"密码",required:""},{prepend:(0,n.w5)((()=>[(0,n.Wm)(t,{name:"lock"})])),_:1},8,["modelValue"])])),_:1}),(0,n.Wm)(r),(0,n.Wm)(u,{class:"justify-center"},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{flat:"",color:"positive",type:"submit",icon:"check"},{default:(0,n.w5)((()=>[(0,n.Uk)("登录")])),_:1}),(0,n.Wm)(s,{flat:"",color:"negative",type:"reset",icon:"clear"},{default:(0,n.w5)((()=>[(0,n.Uk)("清除")])),_:1})])),_:1})])),_:1},8,["onReset"])])),_:1})])),_:1})}}});var l=t(11639),d=t(69885),f=t(44458),p=t(63190),m=t(22857),v=t(50926),h=t(8326),g=t(66611),y=t(11821),b=t(68879),q=t(69984),w=t.n(q);const x=(0,l.Z)(u,[["__scopeId","data-v-36f5909d"]]),_=x;w()(u,"components",{QPage:d.Z,QCard:f.Z,QCardSection:p.Z,QIcon:m.Z,QSeparator:v.Z,QForm:h.Z,QInput:g.Z,QCardActions:y.Z,QBtn:b.Z})}}]);