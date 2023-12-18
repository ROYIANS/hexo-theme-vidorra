import{i as he,a6 as me,ce as ne,cf as ye,r as M,cg as ve,ch as be,o as we,ai as le,a9 as x,aK as Fe,aR as se,J as ce,ci as k}from"./entry.ead83f6c.js";function re(e){return ve()?(be(e),!0):!1}function X(){const e=new Set,t=r=>{e.delete(r)};return{on:r=>{e.add(r);const a=()=>t(r);return re(a),{off:a}},off:t,trigger:(...r)=>Promise.all(Array.from(e).map(a=>a(...r)))}}function O(e){return typeof e=="function"?e():he(e)}const fe=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ge=Object.prototype.toString,Se=e=>ge.call(e)==="[object Object]",de=()=>{};function Oe(e,t){function n(...o){return new Promise((r,a)=>{Promise.resolve(e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(r).catch(a)})}return n}const pe=e=>e();function Te(e=pe){const t=M(!0);function n(){t.value=!1}function o(){t.value=!0}const r=(...a)=>{t.value&&e(...a)};return{isActive:ne(t),pause:n,resume:o,eventFilter:r}}function ae(e,t=!1,n="Timeout"){return new Promise((o,r)=>{setTimeout(t?()=>r(n):o,e)})}function Ee(e,...t){return t.some(n=>n in e)}function Ae(e){return e||Fe()}function Y(...e){if(e.length!==1)return me(...e);const t=e[0];return typeof t=="function"?ne(ye(()=>({get:t,set:de}))):M(t)}function Ce(e,t,n={}){const{eventFilter:o=pe,...r}=n;return x(e,Oe(o,t),r)}function Pe(e,t,n={}){const{eventFilter:o,...r}=n,{eventFilter:a,pause:i,resume:w,isActive:d}=Te(o);return{stop:Ce(e,t,{...r,eventFilter:a}),pause:i,resume:w,isActive:d}}function je(e,t=!0,n){const o=Ae(n);o?we(e,o):t?e():le(e)}function te(e,t=!1){function n(u,{flush:s="sync",deep:c=!1,timeout:m,throwOnTimeout:v}={}){let h=null;const S=[new Promise(T=>{h=x(e,E=>{u(E)!==t&&(h==null||h(),T(E))},{flush:s,deep:c,immediate:!0})})];return m!=null&&S.push(ae(m,v).then(()=>O(e)).finally(()=>h==null?void 0:h())),Promise.race(S)}function o(u,s){if(!se(u))return n(E=>E===u,s);const{flush:c="sync",deep:m=!1,timeout:v,throwOnTimeout:h}=s??{};let g=null;const T=[new Promise(E=>{g=x([e,u],([A,j])=>{t!==(A===j)&&(g==null||g(),E(A))},{flush:c,deep:m,immediate:!0})})];return v!=null&&T.push(ae(v,h).then(()=>O(e)).finally(()=>(g==null||g(),O(e)))),Promise.race(T)}function r(u){return n(s=>!!s,u)}function a(u){return o(null,u)}function i(u){return o(void 0,u)}function w(u){return n(Number.isNaN,u)}function d(u,s){return n(c=>{const m=Array.from(c);return m.includes(u)||m.includes(O(u))},s)}function f(u){return p(1,u)}function p(u=1,s){let c=-1;return n(()=>(c+=1,c>=u),s)}return Array.isArray(O(e))?{toMatch:n,toContains:d,changed:f,changedTimes:p,get not(){return te(e,!t)}}:{toMatch:n,toBe:o,toBeTruthy:r,toBeNull:a,toBeNaN:w,toBeUndefined:i,changed:f,changedTimes:p,get not(){return te(e,!t)}}}function De(e){return te(e)}function Ne(e,t,n={}){const{immediate:o=!0}=n,r=M(!1);let a=null;function i(){a&&(clearTimeout(a),a=null)}function w(){r.value=!1,i()}function d(...f){i(),r.value=!0,a=setTimeout(()=>{r.value=!1,a=null,e(...f)},O(t))}return o&&(r.value=!0,fe&&d()),re(w),{isPending:ne(r),start:d,stop:w}}function _e(e){var t;const n=O(e);return(t=n==null?void 0:n.$el)!=null?t:n}const G=fe?window:void 0;function ie(...e){let t,n,o,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,o,r]=e,t=G):[t,n,o,r]=e,!t)return de;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const a=[],i=()=>{a.forEach(p=>p()),a.length=0},w=(p,u,s,c)=>(p.addEventListener(u,s,c),()=>p.removeEventListener(u,s,c)),d=x(()=>[_e(t),O(r)],([p,u])=>{if(i(),!p)return;const s=Se(u)?{...u}:u;a.push(...n.flatMap(c=>o.map(m=>w(p,c,m,s))))},{immediate:!0,flush:"post"}),f=()=>{d(),i()};return re(f),f}const K=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R="__vueuse_ssr_handlers__",Me=We();function We(){return R in K||(K[R]=K[R]||{}),K[R]}function Be(e,t){return Me[e]||t}function Ue(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const Je={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},ue="vueuse-storage";function xe(e,t,n,o={}){var r;const{flush:a="pre",deep:i=!0,listenToStorageChanges:w=!0,writeDefaults:d=!0,mergeDefaults:f=!1,shallow:p,window:u=G,eventFilter:s,onError:c=l=>{console.error(l)},initOnMounted:m}=o,v=(p?k:M)(typeof t=="function"?t():t);if(!n)try{n=Be("getDefaultStorage",()=>{var l;return(l=G)==null?void 0:l.localStorage})()}catch(l){c(l)}if(!n)return v;const h=O(t),g=Ue(h),S=(r=o.serializer)!=null?r:Je[g],{pause:T,resume:E}=Pe(v,()=>A(v.value),{flush:a,deep:i,eventFilter:s});return u&&w&&je(()=>{ie(u,"storage",D),ie(u,ue,z),m&&D()}),m||D(),v;function A(l){try{if(l==null)n.removeItem(e);else{const y=S.write(l),C=n.getItem(e);C!==y&&(n.setItem(e,y),u&&u.dispatchEvent(new CustomEvent(ue,{detail:{key:e,oldValue:C,newValue:y,storageArea:n}})))}}catch(y){c(y)}}function j(l){const y=l?l.newValue:n.getItem(e);if(y==null)return d&&h!=null&&n.setItem(e,S.write(h)),h;if(!l&&f){const C=S.read(y);return typeof f=="function"?f(C,h):g==="object"&&!Array.isArray(C)?{...h,...C}:C}else return typeof y!="string"?y:S.read(y)}function z(l){D(l.detail)}function D(l){if(!(l&&l.storageArea!==n)){if(l&&l.key==null){v.value=h;return}if(!(l&&l.key!==e)){T();try{(l==null?void 0:l.newValue)!==S.write(v.value)&&(v.value=j(l))}catch(y){c(y)}finally{l?le(E):E()}}}}}const ze={json:"application/json",text:"text/plain"};function q(e){return e&&Ee(e,"immediate","refetch","initialData","timeout","beforeFetch","afterFetch","onFetchError","fetch","updateDataOnError")}function He(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function $(e){return typeof Headers<"u"&&e instanceof Headers?Object.fromEntries([...e.entries()]):e}function J(e,...t){return e==="overwrite"?async n=>{const o=t[t.length-1];return o?{...n,...await o(n)}:n}:async n=>{for(const o of t)o&&(n={...n,...await o(n)});return n}}function Ge(e={}){const t=e.combination||"chain",n=e.options||{},o=e.fetchOptions||{};function r(a,...i){const w=ce(()=>{const p=O(e.baseUrl),u=O(a);return p&&!He(u)?Ve(p,u):u});let d=n,f=o;return i.length>0&&(q(i[0])?d={...d,...i[0],beforeFetch:J(t,n.beforeFetch,i[0].beforeFetch),afterFetch:J(t,n.afterFetch,i[0].afterFetch),onFetchError:J(t,n.onFetchError,i[0].onFetchError)}:f={...f,...i[0],headers:{...$(f.headers)||{},...$(i[0].headers)||{}}}),i.length>1&&q(i[1])&&(d={...d,...i[1],beforeFetch:J(t,n.beforeFetch,i[1].beforeFetch),afterFetch:J(t,n.afterFetch,i[1].afterFetch),onFetchError:J(t,n.onFetchError,i[1].onFetchError)}),Le(w,f,d)}return r}function Le(e,...t){var n;const o=typeof AbortController=="function";let r={},a={immediate:!0,refetch:!1,timeout:0,updateDataOnError:!1};const i={method:"GET",type:"text",payload:void 0};t.length>0&&(q(t[0])?a={...a,...t[0]}:r=t[0]),t.length>1&&q(t[1])&&(a={...a,...t[1]});const{fetch:w=(n=G)==null?void 0:n.fetch,initialData:d,timeout:f}=a,p=X(),u=X(),s=X(),c=M(!1),m=M(!1),v=M(!1),h=M(null),g=k(null),S=k(null),T=k(d||null),E=ce(()=>o&&m.value);let A,j;const z=()=>{o&&(A==null||A.abort(),A=new AbortController,A.signal.onabort=()=>v.value=!0,r={...r,signal:A.signal})},D=F=>{m.value=F,c.value=!F};f&&(j=Ne(z,f,{immediate:!1}));let l=0;const y=async(F=!1)=>{var P,N;z(),D(!0),S.value=null,h.value=null,v.value=!1,l+=1;const L=l,B={method:i.method,headers:{}};if(i.payload){const b=$(B.headers),_=O(i.payload);!i.payloadType&&_&&Object.getPrototypeOf(_)===Object.prototype&&!(_ instanceof FormData)&&(i.payloadType="json"),i.payloadType&&(b["Content-Type"]=(P=ze[i.payloadType])!=null?P:i.payloadType),B.body=i.payloadType==="json"?JSON.stringify(_):_}let oe=!1;const V={url:O(e),options:{...B,...r},cancel:()=>{oe=!0}};if(a.beforeFetch&&Object.assign(V,await a.beforeFetch(V)),oe||!w)return D(!1),Promise.resolve(null);let U=null;return j&&j.start(),w(V.url,{...B,...V.options,headers:{...$(B.headers),...$((N=V.options)==null?void 0:N.headers)}}).then(async b=>{if(g.value=b,h.value=b.status,U=await b.clone()[i.type](),!b.ok)throw T.value=d||null,new Error(b.statusText);return a.afterFetch&&({data:U}=await a.afterFetch({data:U,response:b})),T.value=U,p.trigger(b),b}).catch(async b=>{let _=b.message||b.name;if(a.onFetchError&&({error:_,data:U}=await a.onFetchError({data:U,error:b,response:g.value})),S.value=_,a.updateDataOnError&&(T.value=U),u.trigger(b),F)throw b;return null}).finally(()=>{L===l&&D(!1),j&&j.stop(),s.trigger(null)})},C=Y(a.refetch);x([C,Y(e)],([F])=>F&&y(),{deep:!0});const I={isFinished:c,statusCode:h,response:g,error:S,data:T,isFetching:m,canAbort:E,aborted:v,abort:z,execute:y,onFetchResponse:p.on,onFetchError:u.on,onFetchFinally:s.on,get:W("GET"),put:W("PUT"),post:W("POST"),delete:W("DELETE"),patch:W("PATCH"),head:W("HEAD"),options:W("OPTIONS"),json:H("json"),text:H("text"),blob:H("blob"),arrayBuffer:H("arrayBuffer"),formData:H("formData")};function W(F){return(P,N)=>{if(!m.value)return i.method=F,i.payload=P,i.payloadType=N,se(i.payload)&&x([C,Y(i.payload)],([L])=>L&&y(),{deep:!0}),{...I,then(L,B){return Q().then(L,B)}}}}function Q(){return new Promise((F,P)=>{De(c).toBe(!0).then(()=>F(I)).catch(N=>P(N))})}function H(F){return()=>{if(!m.value)return i.type=F,{...I,then(P,N){return Q().then(P,N)}}}}return a.immediate&&Promise.resolve().then(()=>y()),{...I,then(F,P){return Q().then(F,P)}}}function Ve(e,t){return!e.endsWith("/")&&!t.startsWith("/")?`${e}/${t}`:`${e}${t}`}function Z(e,t,n={}){const{window:o=G}=n;return xe(e,t,o==null?void 0:o.localStorage,n)}const ee={token:"",userInfo:{username:"",avatar:""},theme:"default",darkMode:!1};function Ie(){function e(r){return Z(r,ee[r]).value}function t(r,a){Z(r,ee[r]).value=a}function n(r){Z(r,ee[r]).value=null}function o(){localStorage.clear()}return{getCache:e,setCache:t,removeCache:n,clearCache:o}}export{Ge as c,Ie as u};
