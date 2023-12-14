var W=Object.defineProperty;var H=(t,e,r)=>e in t?W(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var k=(t,e,r)=>(H(t,typeof e!="symbol"?e+"":e,r),r);import{u as N}from"./dayjs.9f8e5665.js";import M from"./QWeather.05d4675f.js";import A from"./MoodCard.7589af8d.js";import{d as G,c as U,u as q}from"./useLocalCache.20d1d8ca.js";import{bj as J,v as B,a6 as $,a7 as h,x as u,d as S,z as O,y,k as g,C as V,D as m,F as K,p as Q,ah as v,H as z,l as P,M as X,o as R,g as j,e as p,J as b,b as Y,i as T,t as w,f as x,h as Z}from"./entry.e03be7bb.js";import{f as ee}from"./format-length.c9d165c6.js";let E=!1;function te(){if(J&&window.CSS&&!E&&(E=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const re=B("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[$("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[$("no-title",`
 display: flex;
 align-items: center;
 `)]),h("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),u("title-position-left",[h("line",[u("left",{width:"28px"})])]),u("title-position-right",[h("line",[u("right",{width:"28px"})])]),u("dashed",[h("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),u("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),h("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),$("dashed",[h("line",{backgroundColor:"var(--n-color)"})]),u("dashed",[h("line",{borderColor:"var(--n-color)"})]),u("vertical",{backgroundColor:"var(--n-color)"})]),oe=Object.assign(Object.assign({},y.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),ne=S({name:"Divider",props:oe,setup(t){const{mergedClsPrefixRef:e,inlineThemeDisabled:r}=O(t),o=y("Divider","-divider",re,G,t,e),s=g(()=>{const{common:{cubicBezierEaseInOut:n},self:{color:d,textColor:l,fontWeight:i}}=o.value;return{"--n-bezier":n,"--n-color":d,"--n-text-color":l,"--n-font-weight":i}}),a=r?V("divider",void 0,s,t):void 0;return{mergedClsPrefix:e,cssVars:r?void 0:s,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var t;const{$slots:e,titlePlacement:r,vertical:o,dashed:s,cssVars:a,mergedClsPrefix:n}=this;return(t=this.onRender)===null||t===void 0||t.call(this),m("div",{role:"separator",class:[`${n}-divider`,this.themeClass,{[`${n}-divider--vertical`]:o,[`${n}-divider--no-title`]:!e.default,[`${n}-divider--dashed`]:s,[`${n}-divider--title-position-${r}`]:e.default&&r}],style:a},o?null:m("div",{class:`${n}-divider__line ${n}-divider__line--left`}),!o&&e.default?m(K,null,m("div",{class:`${n}-divider__title`},this.$slots),m("div",{class:`${n}-divider__line ${n}-divider__line--right`})):null)}}),ie=t=>{const{primaryColor:e,successColor:r,warningColor:o,errorColor:s,infoColor:a,fontWeightStrong:n}=t;return{fontWeight:n,rotate:"252deg",colorStartPrimary:v(e,{alpha:.6}),colorEndPrimary:e,colorStartInfo:v(a,{alpha:.6}),colorEndInfo:a,colorStartWarning:v(o,{alpha:.6}),colorEndWarning:o,colorStartError:v(s,{alpha:.6}),colorEndError:s,colorStartSuccess:v(r,{alpha:.6}),colorEndSuccess:r}},se={name:"GradientText",common:Q,self:ie},ae=se,le=B("gradient-text",`
 display: inline-block;
 font-weight: var(--n-font-weight);
 -webkit-background-clip: text;
 background-clip: text;
 color: #0000;
 white-space: nowrap;
 background-image: linear-gradient(var(--n-rotate), var(--n-color-start) 0%, var(--n-color-end) 100%);
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier);
`),ce=Object.assign(Object.assign({},y.props),{size:[String,Number],fontSize:[String,Number],type:{type:String,default:"primary"},color:[Object,String],gradient:[Object,String]}),de=S({name:"GradientText",props:ce,setup(t){te();const{mergedClsPrefixRef:e,inlineThemeDisabled:r}=O(t),o=g(()=>{const{type:i}=t;return i==="danger"?"error":i}),s=g(()=>{let i=t.size||t.fontSize;return i&&(i=ee(i)),i||void 0}),a=g(()=>{const i=t.color||t.gradient;if(typeof i=="string")return i;if(i){const f=i.deg||0,_=i.from,C=i.to;return`linear-gradient(${f}deg, ${_} 0%, ${C} 100%)`}}),n=y("GradientText","-gradient-text",le,ae,t,e),d=g(()=>{const{value:i}=o,{common:{cubicBezierEaseInOut:f},self:{rotate:_,[z("colorStart",i)]:C,[z("colorEnd",i)]:D,fontWeight:L}}=n.value;return{"--n-bezier":f,"--n-rotate":_,"--n-color-start":C,"--n-color-end":D,"--n-font-weight":L}}),l=r?V("gradient-text",g(()=>o.value[0]),d,t):void 0;return{mergedClsPrefix:e,compatibleType:o,styleFontSize:s,styleBgImage:a,cssVars:r?void 0:d,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){const{mergedClsPrefix:t,onRender:e}=this;return e==null||e(),m("span",{class:[`${t}-gradient-text`,`${t}-gradient-text--${this.compatibleType}-type`,this.themeClass],style:[{fontSize:this.styleFontSize,backgroundImage:this.styleBgImage},this.cssVars]},this.$slots)}}),c=t=>{let e="";if(Object.keys(t).length>0){for(const r in t)e+=`${r}=${t[r]}&`;e=e.slice(0,e.length-1)}return e};class ue{constructor(e){k(this,"instances");const{baseUrl:r,combination:o="chain",fetchOptions:s={mode:"cors"},options:a}=e;this.instances=U({baseUrl:r,combination:o,options:a,fetchOptions:s})}get({url:e,params:r={}},o={}){return this.instances(`${e}${c(r)?`?${c(r)}`:""}`,o).json()}post({url:e,data:r,params:o={}},s={}){return this.instances(`${e}${c(o)?`?${c(o)}`:""}`,s).post(r).json()}put({url:e,data:r,params:o={}},s={}){return this.instances(`${e}${c(o)?`?${c(o)}`:""}`,s).put(r).json()}patch({url:e,data:r,params:o={}},s={}){return this.instances(`${e}${c(o)?`?${c(o)}`:""}`,s).patch(r).json()}delete({url:e,params:r={}},o={}){return this.instances(`${e}${c(r)?`?${c(r)}`:""}`,o).delete().json()}}const{getCache:he,clearCache:ge}=q(),fe=["/admin"],me={baseUrl:"",options:{beforeFetch({options:t,cancel:e,url:r}){const o=he("token");return fe.find(s=>r.includes(s))&&!o&&e(),t.headers={...t.headers,Authorization:o},{options:t}},afterFetch(t){const{code:e,message:r}=t.data;return e===102?(console.log("登录过期，请重新登录"),ge(),location.reload()):e!==void 0&&e!==0&&console.log(r||"请求失败，请稍后再试"),t},onFetchError(t){return console.log("错误的请求，请稍后再试"),t},timeout:1e4}},F=(t={})=>new ue({...me,...t}),I=F();F({fetchOptions:{mode:"no-cors"}});const pe=()=>I.get({url:"https://v1.hitokoto.cn/",params:{}}),ve=()=>I.get({url:"https://api.songzixian.com/api/ip?dataSource=GLOBAL_IP",params:{}}),be={class:"bg-white dark:bg-zinc-900 dark:bg-opacity-80 rounded-sm border xl:relative xl:top-0 dark:border-zinc-800 bg-opacity-80 pb-5 sticky top-8 h-max"},xe=p("div",{class:"h-14 absolute top-0 inset-x-0 z-1 pointer-events-none bg-gradient-to-t from-white dark:from-zinc-900 w-full z-99"},null,-1),ye=p("div",{class:"h-14 absolute top-0 inset-x-0 z-0 pointer-events-none bg-gradient-to-r from-default-theme-primary-200 via-60% via-yellow-100 to-blue-100 dark:from-default-theme-primary-dark-600 dark:to-transparent"},null,-1),_e={class:"relative inset-0 z-2"},Ce={class:"text-sm font-bold px-4 pt-4 pb-1"},$e={key:0},we={class:"text-xs px-4"},Se={class:"px-4 grid xl:grid-cols-2 md:grid-cols-1"},Be=S({__name:"HomeSidebarMoodWeatherCard",setup(t){const e=N(),r=g(()=>{const n=e().hour();return 4<=n&&n<=10?"早上好":11<=n&&n<=13?"中午好":14<=n&&n<=18?"下午好":19<=n&&n<=24||n>=0&&n<=3?"晚上好":"A"}),o=P(""),s=P(""),a=async()=>{var l,i,f;const{data:n}=await pe();o.value=((l=n==null?void 0:n.value)==null?void 0:l.hitokoto)||"";const{data:d}=await ve();s.value=((i=d.value)==null?void 0:i.data.district)||((f=d.value)==null?void 0:f.data.city)||"北京"};return X(()=>{a()}),(n,d)=>{const l=de,i=ne;return R(),j("div",be,[xe,ye,p("div",_e,[p("div",Ce,[b(l,{type:"success"},{default:Y(()=>[T(" 嗨，"+w(x(r))+"，",1),x(s)?(R(),j("span",$e,"来自"+w(x(s))+"的",1)):Z("",!0),T("朋友！ ")]),_:1})]),p("div",we,w(x(o)),1),b(i,{class:"!my-2"}),p("div",Se,[b(A,{class:"dark:border-zinc-800 border-b md:border-b md:border-r-0 xl:border-r xl:border-b-0"}),b(M)])])])}}});export{Be as _};
