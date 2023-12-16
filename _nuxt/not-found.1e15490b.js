import{_ as D}from"./default.vue.6c59e9be.js";import{t as H,u as W}from"./composables.95ec8c2e.js";import{j as K,k as q,s as A,l as M,m as I,n as w,d as L,p as C,q as j,v as O,x as G,y as X,z as g,A as E,B as $,N as Y,C as J,D as y,E as T,o as P,c as Q,b as z,G as B,e as v,f as p,H as R,i as F,I as U,g as N,r as V,F as k}from"./entry.42fd27ef.js";import{_ as Z}from"./_plugin-vue_export-helper.c27b6911.js";import"./remixicon.0ebdb807.js";import"./Header.vue.f81fbb98.js";import"./Icon.c8d5dad4.js";import"./light.3cbde18d.js";import"./format-length.c9d165c6.js";import"./cssr.1e44c8fe.js";import"./use-merged-state.cfd3c67b.js";import"./light.091d78f4.js";import"./Footer.vue.c75b9fef.js";const ee=r=>{const{baseColor:e,textColor2:n,bodyColor:s,cardColor:l,dividerColor:o,actionColor:t,scrollbarColor:a,scrollbarColorHover:c,invertedColor:i}=r;return{textColor:n,textColorInverted:"#FFF",color:s,colorEmbedded:t,headerColor:l,headerColorInverted:i,footerColor:t,footerColorInverted:i,headerBorderColor:o,headerBorderColorInverted:i,footerBorderColor:o,footerBorderColorInverted:i,siderBorderColor:o,siderBorderColorInverted:i,siderColor:l,siderColorInverted:i,siderToggleButtonBorder:`1px solid ${o}`,siderToggleButtonColor:e,siderToggleButtonIconColor:n,siderToggleButtonIconColorInverted:n,siderToggleBarColor:M(s,a),siderToggleBarColorHover:M(s,c),__invertScrollbar:"true"}},oe=K({name:"Layout",common:q,peers:{Scrollbar:A},self:ee}),te=oe,re={type:String,default:"static"},ne=I("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[I("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),w("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),se={embedded:Boolean,position:re,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},le=J("n-layout");function ae(r){return L({name:r?"LayoutContent":"Layout",props:Object.assign(Object.assign({},C.props),se),setup(e){const n=j(null),s=j(null),{mergedClsPrefixRef:l,inlineThemeDisabled:o}=O(e),t=C("Layout","-layout",ne,te,e,l);function a(d,u){if(e.nativeScrollbar){const{value:h}=n;h&&(u===void 0?h.scrollTo(d):h.scrollTo(d,u))}else{const{value:h}=s;h&&h.scrollTo(d,u)}}G(le,e);let c=0,i=0;const m=d=>{var u;const h=d.target;c=h.scrollLeft,i=h.scrollTop,(u=e.onScroll)===null||u===void 0||u.call(e,d)};X(()=>{if(e.nativeScrollbar){const d=n.value;d&&(d.scrollTop=i,d.scrollLeft=c)}});const S={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},_={scrollTo:a},b=g(()=>{const{common:{cubicBezierEaseInOut:d},self:u}=t.value;return{"--n-bezier":d,"--n-color":e.embedded?u.colorEmbedded:u.color,"--n-text-color":u.textColor}}),f=o?E("layout",g(()=>e.embedded?"e":""),b,e):void 0;return Object.assign({mergedClsPrefix:l,scrollableElRef:n,scrollbarInstRef:s,hasSiderStyle:S,mergedTheme:t,handleNativeElScroll:m,cssVars:o?void 0:b,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender},_)},render(){var e;const{mergedClsPrefix:n,hasSider:s}=this;(e=this.onRender)===null||e===void 0||e.call(this);const l=s?this.hasSiderStyle:void 0,o=[this.themeClass,r&&`${n}-layout-content`,`${n}-layout`,`${n}-layout--${this.position}-positioned`];return $("div",{class:o,style:this.cssVars},this.nativeScrollbar?$("div",{ref:"scrollableElRef",class:`${n}-layout-scroll-container`,style:[this.contentStyle,l],onScroll:this.handleNativeElScroll},this.$slots):$(Y,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,l]}),this.$slots))}})}const ie=ae(!1),de=I("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[y("&:first-child",{marginTop:0}),w("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[w("align-text",{paddingLeft:0},[y("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),y("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),y("&::before",{backgroundColor:"var(--n-bar-color)"})])]),ce=Object.assign(Object.assign({},C.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),x=r=>L({name:`H${r}`,props:ce,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:s}=O(e),l=C("Typography","-h",de,H,e,n),o=g(()=>{const{type:a}=e,{common:{cubicBezierEaseInOut:c},self:{headerFontWeight:i,headerTextColor:m,[T("headerPrefixWidth",r)]:S,[T("headerFontSize",r)]:_,[T("headerMargin",r)]:b,[T("headerBarWidth",r)]:f,[T("headerBarColor",a)]:d}}=l.value;return{"--n-bezier":c,"--n-font-size":_,"--n-margin":b,"--n-bar-color":d,"--n-bar-width":f,"--n-font-weight":i,"--n-text-color":m,"--n-prefix-width":S}}),t=s?E(`h${r}`,g(()=>e.type[0]),o,e):void 0;return{mergedClsPrefix:n,cssVars:s?void 0:o,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;const{prefix:n,alignText:s,mergedClsPrefix:l,cssVars:o,$slots:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),$(`h${r}`,{class:[`${l}-h`,`${l}-h${r}`,this.themeClass,{[`${l}-h--prefix-bar`]:n,[`${l}-h--align-text`]:s}],style:o},t)}}),ue=x("1");x("2");x("3");x("4");x("5");x("6");const he=I("p",`
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`,[y("&:first-child","margin-top: 0;"),y("&:last-child","margin-bottom: 0;")]),fe=Object.assign(Object.assign({},C.props),{depth:[String,Number]}),me=L({name:"P",props:fe,setup(r){const{mergedClsPrefixRef:e,inlineThemeDisabled:n}=O(r),s=C("Typography","-p",he,H,r,e),l=g(()=>{const{depth:t}=r,a=t||"1",{common:{cubicBezierEaseInOut:c},self:{pFontSize:i,pLineHeight:m,pMargin:S,pTextColor:_,[`pTextColor${a}Depth`]:b}}=s.value;return{"--n-bezier":c,"--n-font-size":i,"--n-line-height":m,"--n-margin":S,"--n-text-color":t===void 0?_:b}}),o=n?E("p",g(()=>`${r.depth||""}`),l,r):void 0;return{mergedClsPrefix:e,cssVars:n?void 0:l,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var r;return(r=this.onRender)===null||r===void 0||r.call(this),$("p",{class:[`${this.mergedClsPrefix}-p`,this.themeClass],style:this.cssVars},this.$slots)}}),pe={class:"banner",style:{overflow:"hidden"}},ge={class:"banner-text"},be=L({__name:"not-found",setup(r){const e=W(),n=g(()=>e.value?"margin-top: 0; font-size: 64px !important":"margin-top: 0; font-size: 80px !important"),s=(o,t)=>{const a=t-o,c=Math.random();return o+Math.round(a*c)},l=o=>{const t=s(1,20)+10,a=.02*o,c=s(1,20)+20,i=["float","floatReverse","float2","floatReverse2"],m=i[s(0,i.length)];return{top:`${s(1,100)/(100+t/8)*100}%`,left:`${s(1,100)/(100+t/10)*100}%`,fontSize:`${t}px`,filter:`blur(${a}px)`,animation:`${c}s ${m} infinite`}};return(o,t)=>(P(),Q(D,null,{default:z(()=>[B(p(ie),{"native-scrollbar":!1,position:p(e)?"static":"absolute",style:R(p(e)?void 0:"top: var(--header-height);")},{default:z(()=>[v("div",pe,[v("div",ge,[B(p(ue),{style:R(p(n)),class:"naive-title"},{default:z(()=>[v("span",{onMouseenter:t[0]||(t[0]=(...a)=>o.handleTitleMouseEnter&&o.handleTitleMouseEnter(...a)),onMouseleave:t[1]||(t[1]=(...a)=>o.handleTitleMouseLeave&&o.handleTitleMouseLeave(...a))},"404",32)]),_:1},8,["style"]),B(p(me),{style:{"font-size":"16px","margin-top":"0","margin-bottom":"0"}},{default:z(()=>[F(" notFound ")]),_:1}),v("div",null,[B(p(U),{ghost:!1,size:"large",type:"primary",text:"",tag:"a",href:"/"},{default:z(()=>[F(" t('home') ")]),_:1})])]),(P(),N(k,null,V(40,a=>v("span",{key:`4-${a}`,class:"particle",style:R(l(a))},"4",4)),64)),(P(),N(k,null,V(40,a=>v("span",{key:`0-${a}`,class:"particle",style:R(l(40+a))},"0",4)),64))])]),_:1},8,["position","style"])]),_:1}))}});const Pe=Z(be,[["__scopeId","data-v-112a9d12"]]);export{Pe as default};
