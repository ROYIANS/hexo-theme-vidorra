import{aS as ut,d as R,J as X,aT as It,r as O,o as Te,aU as zt,aV as Lt,a4 as oe,aW as Nt,N as x,aX as Dt,aY as Ft,aZ as kt,a_ as Ht,a$ as Wt,b0 as Xt,b1 as Ut,b2 as Yt,b3 as dt,n as Kt,a1 as ft,$ as W,b4 as ct,b5 as ht,b6 as pt,ah as J,aj as G,au as re,Z as ne,aK as qt,b7 as Gt,ad as he,b8 as ke,as as Vt,a9 as te,a6 as V,aO as vt,b9 as gt,ba as jt,ai as Zt,bb as pe,bc as ve,bd as Jt,be as Qt,bf as Be,bg as Rt,bh as U,bi as mt,bj as Ie,v as en,bk as ee,bl as bt,bm as _e,bn as He,bo as tn,bp as We,bq as Xe,br as ue,bs as nn,bt as Ue,bu as rn,bv as on,bw as an,bx as ln,by as sn,bz as un,bA as dn,E as H,A as D,al as me,B as be,C as de,bB as fn,G as cn,H as ze,a7 as wt,aP as Ye,ae as hn,M as pn,ag as Ke,af as vn,bC as qe,bD as gn,O as mn,R as we,F as bn,bE as wn,bF as Ge,Y as yn,bG as $n,a5 as xn,aL as ae}from"./entry.ead83f6c.js";import{p as Sn}from"./light.0a0ba5bf.js";import{f as ye}from"./format-length.c9d165c6.js";import{c as Mn,o as An,a as ie,u as _n}from"./cssr.9ae3dacf.js";import{u as Cn}from"./use-merged-state.424fd017.js";async function yt(e,t=ut()){const{path:n,matched:r}=t.resolve(e);if(!r.length||(t._routePreloaded||(t._routePreloaded=new Set),t._routePreloaded.has(n)))return;const a=t._preloadPromises=t._preloadPromises||[];if(a.length>4)return Promise.all(a).then(()=>yt(e,t));t._routePreloaded.add(n);const o=r.map(l=>{var i;return(i=l.components)==null?void 0:i.default}).filter(l=>typeof l=="function");for(const l of o){const i=Promise.resolve(l()).catch(()=>{}).finally(()=>a.splice(a.indexOf(i)));a.push(i)}await Promise.all(a)}const On=(...e)=>e.find(t=>t!==void 0),Pn="noopener noreferrer";/*! @__NO_SIDE_EFFECTS__ */function En(e){const t=e.componentName||"NuxtLink",n=(r,a)=>{if(!r||e.trailingSlash!=="append"&&e.trailingSlash!=="remove")return r;const o=e.trailingSlash==="append"?Xt:Ut;if(typeof r=="string")return o(r,!0);const l="path"in r?r.path:a(r).path;return{...r,name:void 0,path:o(l,!0)}};return R({name:t,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(r,{slots:a}){const o=ut(),l=Yt(),i=X(()=>{const d=r.to||r.href||"";return n(d,o.resolve)}),s=X(()=>typeof i.value=="string"&&It(i.value,{acceptRelative:!0})),h=X(()=>r.external||r.target&&r.target!=="_self"?!0:typeof i.value=="object"?!1:i.value===""||s.value),g=O(!1),b=O(null),u=d=>{var v;b.value=r.custom?(v=d==null?void 0:d.$el)==null?void 0:v.nextElementSibling:d==null?void 0:d.$el};if(r.prefetch!==!1&&r.noPrefetch!==!0&&r.target!=="_blank"&&!Bn()){const v=dt();let f,m=null;Te(()=>{const c=Tn();zt(()=>{f=Lt(()=>{var y;(y=b==null?void 0:b.value)!=null&&y.tagName&&(m=c.observe(b.value,async()=>{m==null||m(),m=null;const S=typeof i.value=="string"?i.value:o.resolve(i.value).fullPath;await Promise.all([v.hooks.callHook("link:prefetch",S).catch(()=>{}),!h.value&&yt(i.value,o).catch(()=>{})]),g.value=!0}))})})}),oe(()=>{f&&Nt(f),m==null||m(),m=null})}return()=>{var c,y;if(!h.value){const S={ref:u,to:i.value,activeClass:r.activeClass||e.activeClass,exactActiveClass:r.exactActiveClass||e.exactActiveClass,replace:r.replace,ariaCurrentValue:r.ariaCurrentValue,custom:r.custom};return r.custom||(g.value&&(S.class=r.prefetchedClass||e.prefetchedClass),S.rel=r.rel),x(Dt("RouterLink"),S,a.default)}const d=typeof i.value=="object"?((c=o.resolve(i.value))==null?void 0:c.href)??null:i.value&&!r.external&&!s.value?n(Ft(l.app.baseURL,i.value),o.resolve):i.value||null,v=r.target||null,f=r.noRel?null:On(r.rel,e.externalRelAttribute,d?Pn:"")||null,m=()=>Kt(d,{replace:r.replace});return r.custom?a.default?a.default({href:d,navigate:m,get route(){if(!d)return;const S=kt(d);return{path:S.pathname,fullPath:S.pathname,get query(){return Ht(S.search)},hash:S.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:d}},rel:f,target:v,isExternal:h.value,isActive:!1,isExactActive:!1}):null:x("a",{ref:b,href:d,rel:f,target:v},(y=a.default)==null?void 0:y.call(a))}}})}const Uo=En(Wt);function Tn(){const e=dt();if(e._observer)return e._observer;let t=null;const n=new Map,r=(o,l)=>(t||(t=new IntersectionObserver(i=>{for(const s of i){const h=n.get(s.target);(s.isIntersecting||s.intersectionRatio>0)&&h&&h()}})),n.set(o,l),t.observe(o),()=>{n.delete(o),t.unobserve(o),n.size===0&&(t.disconnect(),t=null)});return e._observer={observe:r}}function Bn(){const e=navigator.connection;return!!(e&&(e.saveData||/2g/.test(e.effectiveType)))}let fe=[];const $t=new WeakMap;function In(){fe.forEach(e=>e(...$t.get(e))),fe=[]}function zn(e,...t){$t.set(e,t),!fe.includes(e)&&fe.push(e)===1&&requestAnimationFrame(In)}let $e;function Ln(){return $e===void 0&&($e=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),$e}const Yo=ft("n-internal-select-menu"),Nn=ft("n-internal-select-menu-body"),xt="__disabled__";function Q(e){const t=W(ct,null),n=W(ht,null),r=W(pt,null),a=W(Nn,null),o=O();if(typeof document<"u"){o.value=document.fullscreenElement;const l=()=>{o.value=document.fullscreenElement};Te(()=>{J("fullscreenchange",document,l)}),oe(()=>{G("fullscreenchange",document,l)})}return re(()=>{var l;const{to:i}=e;return i!==void 0?i===!1?xt:i===!0?o.value||"body":i:t!=null&&t.value?(l=t.value.$el)!==null&&l!==void 0?l:t.value:n!=null&&n.value?n.value:r!=null&&r.value?r.value:a!=null&&a.value?a.value:i??(o.value||"body")})}Q.tdkey=xt;Q.propTo={type:[String,Object,Boolean],default:void 0};let k=null;function St(){if(k===null&&(k=document.getElementById("v-binder-view-measurer"),k===null)){k=document.createElement("div"),k.id="v-binder-view-measurer";const{style:e}=k;e.position="fixed",e.left="0",e.right="0",e.top="0",e.bottom="0",e.pointerEvents="none",e.visibility="hidden",document.body.appendChild(k)}return k.getBoundingClientRect()}function Dn(e,t){const n=St();return{top:t,left:e,height:0,width:0,right:n.width-e,bottom:n.height-t}}function xe(e){const t=e.getBoundingClientRect(),n=St();return{left:t.left-n.left,top:t.top-n.top,bottom:n.height+n.top-t.bottom,right:n.width+n.left-t.right,width:t.width,height:t.height}}function Fn(e){return e.nodeType===9?null:e.parentNode}function Mt(e){if(e===null)return null;const t=Fn(e);if(t===null)return null;if(t.nodeType===9)return document;if(t.nodeType===1){const{overflow:n,overflowX:r,overflowY:a}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(n+a+r))return t}return Mt(t)}const kn=R({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){var t;ne("VBinder",(t=qt())===null||t===void 0?void 0:t.proxy);const n=W("VBinder",null),r=O(null),a=c=>{r.value=c,n&&e.syncTargetWithParent&&n.setTargetRef(c)};let o=[];const l=()=>{let c=r.value;for(;c=Mt(c),c!==null;)o.push(c);for(const y of o)J("scroll",y,b,!0)},i=()=>{for(const c of o)G("scroll",c,b,!0);o=[]},s=new Set,h=c=>{s.size===0&&l(),s.has(c)||s.add(c)},g=c=>{s.has(c)&&s.delete(c),s.size===0&&i()},b=()=>{zn(u)},u=()=>{s.forEach(c=>c())},d=new Set,v=c=>{d.size===0&&J("resize",window,m),d.has(c)||d.add(c)},f=c=>{d.has(c)&&d.delete(c),d.size===0&&G("resize",window,m)},m=()=>{d.forEach(c=>c())};return oe(()=>{G("resize",window,m),i()}),{targetRef:r,setTargetRef:a,addScrollListener:h,removeScrollListener:g,addResizeListener:v,removeResizeListener:f}},render(){return Gt("binder",this.$slots)}}),Hn=kn,Wn=R({name:"Target",setup(){const{setTargetRef:e,syncTarget:t}=W("VBinder");return{syncTarget:t,setTargetDirective:{mounted:e,updated:e}}},render(){const{syncTarget:e,setTargetDirective:t}=this;return e?he(ke("follower",this.$slots),[[t]]):ke("follower",this.$slots)}}),Z="@@mmoContext",Xn={mounted(e,{value:t}){e[Z]={handler:void 0},typeof t=="function"&&(e[Z].handler=t,J("mousemoveoutside",e,t))},updated(e,{value:t}){const n=e[Z];typeof t=="function"?n.handler?n.handler!==t&&(G("mousemoveoutside",e,n.handler),n.handler=t,J("mousemoveoutside",e,t)):(e[Z].handler=t,J("mousemoveoutside",e,t)):n.handler&&(G("mousemoveoutside",e,n.handler),n.handler=void 0)},unmounted(e){const{handler:t}=e[Z];t&&G("mousemoveoutside",e,t),e[Z].handler=void 0}},Un=Xn,le={top:"bottom",bottom:"top",left:"right",right:"left"},Ve={start:"end",center:"center",end:"start"},Se={top:"height",bottom:"height",left:"width",right:"width"},Yn={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},Kn={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},qn={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},je={top:!0,bottom:!1,left:!0,right:!1},Ze={top:"end",bottom:"start",left:"end",right:"start"};function Gn(e,t,n,r,a,o){if(!a||o)return{placement:e,top:0,left:0};const[l,i]=e.split("-");let s=i??"center",h={top:0,left:0};const g=(d,v,f)=>{let m=0,c=0;const y=n[d]-t[v]-t[d];return y>0&&r&&(f?c=je[v]?y:-y:m=je[v]?y:-y),{left:m,top:c}},b=l==="left"||l==="right";if(s!=="center"){const d=qn[e],v=le[d],f=Se[d];if(n[f]>t[f]){if(t[d]+t[f]<n[f]){const m=(n[f]-t[f])/2;t[d]<m||t[v]<m?t[d]<t[v]?(s=Ve[i],h=g(f,v,b)):h=g(f,d,b):s="center"}}else n[f]<t[f]&&t[v]<0&&t[d]>t[v]&&(s=Ve[i])}else{const d=l==="bottom"||l==="top"?"left":"top",v=le[d],f=Se[d],m=(n[f]-t[f])/2;(t[d]<m||t[v]<m)&&(t[d]>t[v]?(s=Ze[d],h=g(f,d,b)):(s=Ze[v],h=g(f,v,b)))}let u=l;return t[l]<n[Se[l]]&&t[l]<t[le[l]]&&(u=le[l]),{placement:s!=="center"?`${u}-${s}`:u,left:h.left,top:h.top}}function Vn(e,t){return t?Kn[e]:Yn[e]}function jn(e,t,n,r,a,o){if(o)switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"top-end":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"left-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+a)}px`,transform:""};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width+a)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+a)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width+a)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width+a)}px`,transform:""};case"right-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width+a)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+a)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+a)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width/2+a)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2+r)}px`,left:`${Math.round(n.left-t.left+n.width+a)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2+r)}px`,left:`${Math.round(n.left-t.left+a)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width/2+a)}px`,transform:"translateX(-50%)"}}}const Zn=ie([ie(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),ie(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[ie("> *",{pointerEvents:"all"})])]),Jn=R({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){const t=W("VBinder"),n=re(()=>e.enabled!==void 0?e.enabled:e.show),r=O(null),a=O(null),o=()=>{const{syncTrigger:u}=e;u.includes("scroll")&&t.addScrollListener(s),u.includes("resize")&&t.addResizeListener(s)},l=()=>{t.removeScrollListener(s),t.removeResizeListener(s)};Te(()=>{n.value&&(s(),o())});const i=Vt();Zn.mount({id:"vueuc/binder",head:!0,anchorMetaName:Mn,ssr:i}),oe(()=>{l()}),An(()=>{n.value&&s()});const s=()=>{if(!n.value)return;const u=r.value;if(u===null)return;const d=t.targetRef,{x:v,y:f,overlap:m}=e,c=v!==void 0&&f!==void 0?Dn(v,f):xe(d);u.style.setProperty("--v-target-width",`${Math.round(c.width)}px`),u.style.setProperty("--v-target-height",`${Math.round(c.height)}px`);const{width:y,minWidth:S,placement:P,internalShift:E,flip:Y}=e;u.setAttribute("v-placement",P),m?u.setAttribute("v-overlap",""):u.removeAttribute("v-overlap");const{style:w}=u;y==="target"?w.width=`${c.width}px`:y!==void 0?w.width=y:w.width="",S==="target"?w.minWidth=`${c.width}px`:S!==void 0?w.minWidth=S:w.minWidth="";const _=xe(u),C=xe(a.value),{left:$,top:F,placement:L}=Gn(P,c,_,E,Y,m),z=Vn(L,m),{left:K,top:p,transform:M}=jn(L,C,c,F,$,m);u.setAttribute("v-placement",L),u.style.setProperty("--v-offset-left",`${Math.round($)}px`),u.style.setProperty("--v-offset-top",`${Math.round(F)}px`),u.style.transform=`translateX(${K}) translateY(${p}) ${M}`,u.style.setProperty("--v-transform-origin",z),u.style.transformOrigin=z};te(n,u=>{u?(o(),h()):l()});const h=()=>{Zt().then(s).catch(u=>console.error(u))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(u=>{te(V(e,u),s)}),["teleportDisabled"].forEach(u=>{te(V(e,u),h)}),te(V(e,"syncTrigger"),u=>{u.includes("resize")?t.addResizeListener(s):t.removeResizeListener(s),u.includes("scroll")?t.addScrollListener(s):t.removeScrollListener(s)});const g=vt(),b=re(()=>{const{to:u}=e;if(u!==void 0)return u;g.value});return{VBinder:t,mergedEnabled:n,offsetContainerRef:a,followerRef:r,mergedTo:b,syncPosition:s}},render(){return x(jt,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e,t;const n=x("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[x("div",{class:"v-binder-follower-content",ref:"followerRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))]);return this.zindexable?he(n,[[gt,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):n}})}});var Qn=pe(ve,"WeakMap");const Ce=Qn;var Rn=Jt(Object.keys,Object);const er=Rn;var tr=Object.prototype,nr=tr.hasOwnProperty;function rr(e){if(!Qt(e))return er(e);var t=[];for(var n in Object(e))nr.call(e,n)&&n!="constructor"&&t.push(n);return t}function Le(e){return Be(e)?Rt(e):rr(e)}var or=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ar=/^\w*$/;function Ne(e,t){if(U(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||mt(e)?!0:ar.test(e)||!or.test(e)||t!=null&&e in Object(t)}var ir="Expected a function";function De(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(ir);var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],o=n.cache;if(o.has(a))return o.get(a);var l=e.apply(this,r);return n.cache=o.set(a,l)||o,l};return n.cache=new(De.Cache||Ie),n}De.Cache=Ie;var lr=500;function sr(e){var t=De(e,function(r){return n.size===lr&&n.clear(),r}),n=t.cache;return t}var ur=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,dr=/\\(\\)?/g,fr=sr(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(ur,function(n,r,a,o){t.push(a?o.replace(dr,"$1"):r||n)}),t});const cr=fr;function At(e,t){return U(e)?e:Ne(e,t)?[e]:cr(en(e))}var hr=1/0;function ge(e){if(typeof e=="string"||mt(e))return e;var t=e+"";return t=="0"&&1/e==-hr?"-0":t}function _t(e,t){t=At(t,e);for(var n=0,r=t.length;e!=null&&n<r;)e=e[ge(t[n++])];return n&&n==r?e:void 0}function pr(e,t,n){var r=e==null?void 0:_t(e,t);return r===void 0?n:r}function vr(e,t){for(var n=-1,r=t.length,a=e.length;++n<r;)e[a+n]=t[n];return e}function gr(e,t){for(var n=-1,r=e==null?0:e.length,a=0,o=[];++n<r;){var l=e[n];t(l,n,e)&&(o[a++]=l)}return o}function mr(){return[]}var br=Object.prototype,wr=br.propertyIsEnumerable,Je=Object.getOwnPropertySymbols,yr=Je?function(e){return e==null?[]:(e=Object(e),gr(Je(e),function(t){return wr.call(e,t)}))}:mr;const $r=yr;function xr(e,t,n){var r=t(e);return U(e)?r:vr(r,n(e))}function Qe(e){return xr(e,Le,$r)}var Sr=pe(ve,"DataView");const Oe=Sr;var Mr=pe(ve,"Promise");const Pe=Mr;var Ar=pe(ve,"Set");const Ee=Ar;var Re="[object Map]",_r="[object Object]",et="[object Promise]",tt="[object Set]",nt="[object WeakMap]",rt="[object DataView]",Cr=ee(Oe),Or=ee(_e),Pr=ee(Pe),Er=ee(Ee),Tr=ee(Ce),q=bt;(Oe&&q(new Oe(new ArrayBuffer(1)))!=rt||_e&&q(new _e)!=Re||Pe&&q(Pe.resolve())!=et||Ee&&q(new Ee)!=tt||Ce&&q(new Ce)!=nt)&&(q=function(e){var t=bt(e),n=t==_r?e.constructor:void 0,r=n?ee(n):"";if(r)switch(r){case Cr:return rt;case Or:return Re;case Pr:return et;case Er:return tt;case Tr:return nt}return t});const ot=q;var Br="__lodash_hash_undefined__";function Ir(e){return this.__data__.set(e,Br),this}function zr(e){return this.__data__.has(e)}function ce(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new Ie;++t<n;)this.add(e[t])}ce.prototype.add=ce.prototype.push=Ir;ce.prototype.has=zr;function Lr(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}function Nr(e,t){return e.has(t)}var Dr=1,Fr=2;function Ct(e,t,n,r,a,o){var l=n&Dr,i=e.length,s=t.length;if(i!=s&&!(l&&s>i))return!1;var h=o.get(e),g=o.get(t);if(h&&g)return h==t&&g==e;var b=-1,u=!0,d=n&Fr?new ce:void 0;for(o.set(e,t),o.set(t,e);++b<i;){var v=e[b],f=t[b];if(r)var m=l?r(f,v,b,t,e,o):r(v,f,b,e,t,o);if(m!==void 0){if(m)continue;u=!1;break}if(d){if(!Lr(t,function(c,y){if(!Nr(d,y)&&(v===c||a(v,c,n,r,o)))return d.push(y)})){u=!1;break}}else if(!(v===f||a(v,f,n,r,o))){u=!1;break}}return o.delete(e),o.delete(t),u}function kr(e){var t=-1,n=Array(e.size);return e.forEach(function(r,a){n[++t]=[a,r]}),n}function Hr(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}var Wr=1,Xr=2,Ur="[object Boolean]",Yr="[object Date]",Kr="[object Error]",qr="[object Map]",Gr="[object Number]",Vr="[object RegExp]",jr="[object Set]",Zr="[object String]",Jr="[object Symbol]",Qr="[object ArrayBuffer]",Rr="[object DataView]",at=He?He.prototype:void 0,Me=at?at.valueOf:void 0;function eo(e,t,n,r,a,o,l){switch(n){case Rr:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Qr:return!(e.byteLength!=t.byteLength||!o(new We(e),new We(t)));case Ur:case Yr:case Gr:return tn(+e,+t);case Kr:return e.name==t.name&&e.message==t.message;case Vr:case Zr:return e==t+"";case qr:var i=kr;case jr:var s=r&Wr;if(i||(i=Hr),e.size!=t.size&&!s)return!1;var h=l.get(e);if(h)return h==t;r|=Xr,l.set(e,t);var g=Ct(i(e),i(t),r,a,o,l);return l.delete(e),g;case Jr:if(Me)return Me.call(e)==Me.call(t)}return!1}var to=1,no=Object.prototype,ro=no.hasOwnProperty;function oo(e,t,n,r,a,o){var l=n&to,i=Qe(e),s=i.length,h=Qe(t),g=h.length;if(s!=g&&!l)return!1;for(var b=s;b--;){var u=i[b];if(!(l?u in t:ro.call(t,u)))return!1}var d=o.get(e),v=o.get(t);if(d&&v)return d==t&&v==e;var f=!0;o.set(e,t),o.set(t,e);for(var m=l;++b<s;){u=i[b];var c=e[u],y=t[u];if(r)var S=l?r(y,c,u,t,e,o):r(c,y,u,e,t,o);if(!(S===void 0?c===y||a(c,y,n,r,o):S)){f=!1;break}m||(m=u=="constructor")}if(f&&!m){var P=e.constructor,E=t.constructor;P!=E&&"constructor"in e&&"constructor"in t&&!(typeof P=="function"&&P instanceof P&&typeof E=="function"&&E instanceof E)&&(f=!1)}return o.delete(e),o.delete(t),f}var ao=1,it="[object Arguments]",lt="[object Array]",se="[object Object]",io=Object.prototype,st=io.hasOwnProperty;function lo(e,t,n,r,a,o){var l=U(e),i=U(t),s=l?lt:ot(e),h=i?lt:ot(t);s=s==it?se:s,h=h==it?se:h;var g=s==se,b=h==se,u=s==h;if(u&&Xe(e)){if(!Xe(t))return!1;l=!0,g=!1}if(u&&!g)return o||(o=new ue),l||nn(e)?Ct(e,t,n,r,a,o):eo(e,t,s,n,r,a,o);if(!(n&ao)){var d=g&&st.call(e,"__wrapped__"),v=b&&st.call(t,"__wrapped__");if(d||v){var f=d?e.value():e,m=v?t.value():t;return o||(o=new ue),a(f,m,n,r,o)}}return u?(o||(o=new ue),oo(e,t,n,r,a,o)):!1}function Fe(e,t,n,r,a){return e===t?!0:e==null||t==null||!Ue(e)&&!Ue(t)?e!==e&&t!==t:lo(e,t,n,r,Fe,a)}var so=1,uo=2;function fo(e,t,n,r){var a=n.length,o=a,l=!r;if(e==null)return!o;for(e=Object(e);a--;){var i=n[a];if(l&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1}for(;++a<o;){i=n[a];var s=i[0],h=e[s],g=i[1];if(l&&i[2]){if(h===void 0&&!(s in e))return!1}else{var b=new ue;if(r)var u=r(h,g,s,e,t,b);if(!(u===void 0?Fe(g,h,so|uo,r,b):u))return!1}}return!0}function Ot(e){return e===e&&!rn(e)}function co(e){for(var t=Le(e),n=t.length;n--;){var r=t[n],a=e[r];t[n]=[r,a,Ot(a)]}return t}function Pt(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}function ho(e){var t=co(e);return t.length==1&&t[0][2]?Pt(t[0][0],t[0][1]):function(n){return n===e||fo(n,e,t)}}function po(e,t){return e!=null&&t in Object(e)}function vo(e,t,n){t=At(t,e);for(var r=-1,a=t.length,o=!1;++r<a;){var l=ge(t[r]);if(!(o=e!=null&&n(e,l)))break;e=e[l]}return o||++r!=a?o:(a=e==null?0:e.length,!!a&&on(a)&&an(l,a)&&(U(e)||ln(e)))}function go(e,t){return e!=null&&vo(e,t,po)}var mo=1,bo=2;function wo(e,t){return Ne(e)&&Ot(t)?Pt(ge(e),t):function(n){var r=pr(n,e);return r===void 0&&r===t?go(n,e):Fe(t,r,mo|bo)}}function yo(e){return function(t){return t==null?void 0:t[e]}}function $o(e){return function(t){return _t(t,e)}}function xo(e){return Ne(e)?yo(ge(e)):$o(e)}function So(e){return typeof e=="function"?e:e==null?sn:typeof e=="object"?U(e)?wo(e[0],e[1]):ho(e):xo(e)}function Mo(e,t){return e&&un(e,t,Le)}function Ao(e,t){return function(n,r){if(n==null)return n;if(!Be(n))return e(n,r);for(var a=n.length,o=t?a:-1,l=Object(n);(t?o--:++o<a)&&r(l[o],o,l)!==!1;);return n}}var _o=Ao(Mo);const Co=_o;function Oo(e,t){var n=-1,r=Be(e)?Array(e.length):[];return Co(e,function(a,o,l){r[++n]=t(a,o,l)}),r}function Po(e,t){var n=U(e)?dn:Oo;return n(e,So(t))}const Ae={top:"bottom",bottom:"top",left:"right",right:"left"},A="var(--n-arrow-height) * 1.414",Eo=H([D("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[H(">",[D("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),me("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[me("scrollable",[me("show-header-or-footer","padding: var(--n-padding);")])]),be("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),be("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),de("scrollable, show-header-or-footer",[be("content",`
 padding: var(--n-padding);
 `)])]),D("popover-shared",`
 transform-origin: inherit;
 `,[D("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[D("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${A});
 height: calc(${A});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),H("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),H("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),H("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),H("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),I("top-start",`
 top: calc(${A} / -2);
 left: calc(${N("top-start")} - var(--v-offset-left));
 `),I("top",`
 top: calc(${A} / -2);
 transform: translateX(calc(${A} / -2)) rotate(45deg);
 left: 50%;
 `),I("top-end",`
 top: calc(${A} / -2);
 right: calc(${N("top-end")} + var(--v-offset-left));
 `),I("bottom-start",`
 bottom: calc(${A} / -2);
 left: calc(${N("bottom-start")} - var(--v-offset-left));
 `),I("bottom",`
 bottom: calc(${A} / -2);
 transform: translateX(calc(${A} / -2)) rotate(45deg);
 left: 50%;
 `),I("bottom-end",`
 bottom: calc(${A} / -2);
 right: calc(${N("bottom-end")} + var(--v-offset-left));
 `),I("left-start",`
 left: calc(${A} / -2);
 top: calc(${N("left-start")} - var(--v-offset-top));
 `),I("left",`
 left: calc(${A} / -2);
 transform: translateY(calc(${A} / -2)) rotate(45deg);
 top: 50%;
 `),I("left-end",`
 left: calc(${A} / -2);
 bottom: calc(${N("left-end")} + var(--v-offset-top));
 `),I("right-start",`
 right: calc(${A} / -2);
 top: calc(${N("right-start")} - var(--v-offset-top));
 `),I("right",`
 right: calc(${A} / -2);
 transform: translateY(calc(${A} / -2)) rotate(45deg);
 top: 50%;
 `),I("right-end",`
 right: calc(${A} / -2);
 bottom: calc(${N("right-end")} + var(--v-offset-top));
 `),...Po({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,t)=>{const n=["right","left"].includes(t),r=n?"width":"height";return e.map(a=>{const o=a.split("-")[1]==="end",i=`calc((${`var(--v-target-${r}, 0px)`} - ${A}) / 2)`,s=N(a);return H(`[v-placement="${a}"] >`,[D("popover-shared",[de("center-arrow",[D("popover-arrow",`${t}: calc(max(${i}, ${s}) ${o?"+":"-"} var(--v-offset-${n?"left":"top"}));`)])])])})})]);function N(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function I(e,t){const n=e.split("-")[0],r=["top","bottom"].includes(n)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return H(`[v-placement="${e}"] >`,[D("popover-shared",`
 margin-${Ae[n]}: var(--n-space);
 `,[de("show-arrow",`
 margin-${Ae[n]}: var(--n-space-arrow);
 `),de("overlap",`
 margin: 0;
 `),fn("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${Ae[n]}: auto;
 ${r}
 `,[D("popover-arrow",t)])])])}const Et=Object.assign(Object.assign({},ze.props),{to:Q.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number}),To=({arrowStyle:e,clsPrefix:t})=>x("div",{key:"__popover-arrow__",class:`${t}-popover-arrow-wrapper`},x("div",{class:`${t}-popover-arrow`,style:e})),Bo=R({name:"PopoverBody",inheritAttrs:!1,props:Et,setup(e,{slots:t,attrs:n}){const{namespaceRef:r,mergedClsPrefixRef:a,inlineThemeDisabled:o}=cn(e),l=ze("Popover","-popover",Eo,Sn,e,a),i=O(null),s=W("NPopover"),h=O(null),g=O(e.show),b=O(!1);wt(()=>{const{show:w}=e;w&&!Ln()&&!e.internalDeactivateImmediately&&(b.value=!0)});const u=X(()=>{const{trigger:w,onClickoutside:_}=e,C=[],{positionManuallyRef:{value:$}}=s;return $||(w==="click"&&!_&&C.push([Ye,P,void 0,{capture:!0}]),w==="hover"&&C.push([Un,S])),_&&C.push([Ye,P,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&b.value)&&C.push([hn,e.show]),C}),d=X(()=>{const w=e.width==="trigger"?void 0:ye(e.width),_=[];w&&_.push({width:w});const{maxWidth:C,minWidth:$}=e;return C&&_.push({maxWidth:ye(C)}),$&&_.push({maxWidth:ye($)}),o||_.push(v.value),_}),v=X(()=>{const{common:{cubicBezierEaseInOut:w,cubicBezierEaseIn:_,cubicBezierEaseOut:C},self:{space:$,spaceArrow:F,padding:L,fontSize:z,textColor:K,dividerColor:p,color:M,boxShadow:T,borderRadius:j,arrowHeight:B,arrowOffset:Tt,arrowOffsetVertical:Bt}}=l.value;return{"--n-box-shadow":T,"--n-bezier":w,"--n-bezier-ease-in":_,"--n-bezier-ease-out":C,"--n-font-size":z,"--n-text-color":K,"--n-color":M,"--n-divider-color":p,"--n-border-radius":j,"--n-arrow-height":B,"--n-arrow-offset":Tt,"--n-arrow-offset-vertical":Bt,"--n-padding":L,"--n-space":$,"--n-space-arrow":F}}),f=o?pn("popover",void 0,v,e):void 0;s.setBodyInstance({syncPosition:m}),oe(()=>{s.setBodyInstance(null)}),te(V(e,"show"),w=>{e.animated||(w?g.value=!0:g.value=!1)});function m(){var w;(w=i.value)===null||w===void 0||w.syncPosition()}function c(w){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&s.handleMouseEnter(w)}function y(w){e.trigger==="hover"&&e.keepAliveOnHover&&s.handleMouseLeave(w)}function S(w){e.trigger==="hover"&&!E().contains(Ke(w))&&s.handleMouseMoveOutside(w)}function P(w){(e.trigger==="click"&&!E().contains(Ke(w))||e.onClickoutside)&&s.handleClickOutside(w)}function E(){return s.getTriggerElement()}ne(pt,h),ne(ht,null),ne(ct,null);function Y(){if(f==null||f.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&b.value))return null;let _;const C=s.internalRenderBodyRef.value,{value:$}=a;if(C)_=C([`${$}-popover-shared`,f==null?void 0:f.themeClass.value,e.overlap&&`${$}-popover-shared--overlap`,e.showArrow&&`${$}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${$}-popover-shared--center-arrow`],h,d.value,c,y);else{const{value:F}=s.extraClassRef,{internalTrapFocus:L}=e,z=!qe(t.header)||!qe(t.footer),K=()=>{var p;const M=z?x(bn,null,we(t.header,B=>B?x("div",{class:`${$}-popover__header`,style:e.headerStyle},B):null),we(t.default,B=>B?x("div",{class:`${$}-popover__content`,style:e.contentStyle},t):null),we(t.footer,B=>B?x("div",{class:`${$}-popover__footer`,style:e.footerStyle},B):null)):e.scrollable?(p=t.default)===null||p===void 0?void 0:p.call(t):x("div",{class:`${$}-popover__content`,style:e.contentStyle},t),T=e.scrollable?x(wn,{contentClass:z?void 0:`${$}-popover__content`,contentStyle:z?void 0:e.contentStyle},{default:()=>M}):M,j=e.showArrow?To({arrowStyle:e.arrowStyle,clsPrefix:$}):null;return[T,j]};_=x("div",mn({class:[`${$}-popover`,`${$}-popover-shared`,f==null?void 0:f.themeClass.value,F.map(p=>`${$}-${p}`),{[`${$}-popover--scrollable`]:e.scrollable,[`${$}-popover--show-header-or-footer`]:z,[`${$}-popover--raw`]:e.raw,[`${$}-popover-shared--overlap`]:e.overlap,[`${$}-popover-shared--show-arrow`]:e.showArrow,[`${$}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:h,style:d.value,onKeydown:s.handleKeydown,onMouseenter:c,onMouseleave:y},n),L?x(gn,{active:e.show,autoFocus:!0},{default:K}):K())}return he(_,u.value)}return{displayed:b,namespace:r,isMounted:s.isMountedRef,zIndex:s.zIndexRef,followerRef:i,adjustedTo:Q(e),followerEnabled:g,renderContentNode:Y}},render(){return x(Jn,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===Q.tdkey},{default:()=>this.animated?x(vn,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),Io=Object.keys(Et),zo={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function Lo(e,t,n){zo[t].forEach(r=>{e.props?e.props=Object.assign({},e.props):e.props={};const a=e.props[r],o=n[r];a?e.props[r]=(...l)=>{a(...l),o(...l)}:e.props[r]=o})}const No={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:Q.propTo,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},Do=Object.assign(Object.assign(Object.assign({},ze.props),No),{internalOnAfterLeave:Function,internalRenderBody:Function}),Ko=R({name:"Popover",inheritAttrs:!1,props:Do,__popover__:!0,setup(e){const t=vt(),n=O(null),r=X(()=>e.show),a=O(e.defaultShow),o=Cn(r,a),l=re(()=>e.disabled?!1:o.value),i=()=>{if(e.disabled)return!0;const{getDisabled:p}=e;return!!(p!=null&&p())},s=()=>i()?!1:o.value,h=_n(e,["arrow","showArrow"]),g=X(()=>e.overlap?!1:h.value);let b=null;const u=O(null),d=O(null),v=re(()=>e.x!==void 0&&e.y!==void 0);function f(p){const{"onUpdate:show":M,onUpdateShow:T,onShow:j,onHide:B}=e;a.value=p,M&&ae(M,p),T&&ae(T,p),p&&j&&ae(j,!0),p&&B&&ae(B,!1)}function m(){b&&b.syncPosition()}function c(){const{value:p}=u;p&&(window.clearTimeout(p),u.value=null)}function y(){const{value:p}=d;p&&(window.clearTimeout(p),d.value=null)}function S(){const p=i();if(e.trigger==="focus"&&!p){if(s())return;f(!0)}}function P(){const p=i();if(e.trigger==="focus"&&!p){if(!s())return;f(!1)}}function E(){const p=i();if(e.trigger==="hover"&&!p){if(y(),u.value!==null||s())return;const M=()=>{f(!0),u.value=null},{delay:T}=e;T===0?M():u.value=window.setTimeout(M,T)}}function Y(){const p=i();if(e.trigger==="hover"&&!p){if(c(),d.value!==null||!s())return;const M=()=>{f(!1),d.value=null},{duration:T}=e;T===0?M():d.value=window.setTimeout(M,T)}}function w(){Y()}function _(p){var M;s()&&(e.trigger==="click"&&(c(),y(),f(!1)),(M=e.onClickoutside)===null||M===void 0||M.call(e,p))}function C(){if(e.trigger==="click"&&!i()){c(),y();const p=!s();f(p)}}function $(p){e.internalTrapFocus&&p.key==="Escape"&&(c(),y(),f(!1))}function F(p){a.value=p}function L(){var p;return(p=n.value)===null||p===void 0?void 0:p.targetRef}function z(p){b=p}return ne("NPopover",{getTriggerElement:L,handleKeydown:$,handleMouseEnter:E,handleMouseLeave:Y,handleClickOutside:_,handleMouseMoveOutside:w,setBodyInstance:z,positionManuallyRef:v,isMountedRef:t,zIndexRef:V(e,"zIndex"),extraClassRef:V(e,"internalExtraClass"),internalRenderBodyRef:V(e,"internalRenderBody")}),wt(()=>{o.value&&i()&&f(!1)}),{binderInstRef:n,positionManually:v,mergedShowConsideringDisabledProp:l,uncontrolledShow:a,mergedShowArrow:g,getMergedShow:s,setShow:F,handleClick:C,handleMouseEnter:E,handleMouseLeave:Y,handleFocus:S,handleBlur:P,syncPosition:m}},render(){var e;const{positionManually:t,$slots:n}=this;let r,a=!1;if(!t&&(n.activator?r=Ge(n,"activator"):r=Ge(n,"trigger"),r)){r=yn(r),r=r.type===$n?x("span",[r]):r;const o={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=r.type)===null||e===void 0)&&e.__popover__)a=!0,r.props||(r.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),r.props.internalSyncTargetWithParent=!0,r.props.internalInheritedEventHandlers?r.props.internalInheritedEventHandlers=[o,...r.props.internalInheritedEventHandlers]:r.props.internalInheritedEventHandlers=[o];else{const{internalInheritedEventHandlers:l}=this,i=[o,...l],s={onBlur:h=>{i.forEach(g=>{g.onBlur(h)})},onFocus:h=>{i.forEach(g=>{g.onFocus(h)})},onClick:h=>{i.forEach(g=>{g.onClick(h)})},onMouseenter:h=>{i.forEach(g=>{g.onMouseenter(h)})},onMouseleave:h=>{i.forEach(g=>{g.onMouseleave(h)})}};Lo(r,l?"nested":t?"manual":this.trigger,s)}}return x(Hn,{ref:"binderInstRef",syncTarget:!a,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const o=this.getMergedShow();return[this.internalTrapFocus&&o?he(x("div",{style:{position:"fixed",inset:0}}),[[gt,{enabled:o,zIndex:this.zIndex}]]):null,t?null:x(Wn,null,{default:()=>r}),x(Bo,xn(this.$props,Io,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:o})),{default:()=>{var l,i;return(i=(l=this.$slots).default)===null||i===void 0?void 0:i.call(l)},header:()=>{var l,i;return(i=(l=this.$slots).header)===null||i===void 0?void 0:i.call(l)},footer:()=>{var l,i;return(i=(l=this.$slots).footer)===null||i===void 0?void 0:i.call(l)}})]}})}});export{Ko as N,Hn as V,Uo as _,Nn as a,zn as b,Wn as c,Jn as d,Yo as i,No as p,Q as u};