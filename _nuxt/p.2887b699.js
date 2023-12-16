import{aC as O,ab as j,bT as E,ac as P,R as z,W as $,d as R,a0 as m,q as w,$ as B,I as H,bU as V,j as v,a2 as I,D as T,aF as F,E as N,U as g,a4 as S}from"./entry.00c261f4.js";import{t as L}from"./composables.852e9cb4.js";const D=o=>{const{baseColor:e,textColor2:t,bodyColor:l,cardColor:n,dividerColor:r,actionColor:s,scrollbarColor:u,scrollbarColorHover:h,invertedColor:i}=o;return{textColor:t,textColorInverted:"#FFF",color:l,colorEmbedded:s,headerColor:n,headerColorInverted:i,footerColor:s,footerColorInverted:i,headerBorderColor:r,headerBorderColorInverted:i,footerBorderColor:r,footerBorderColorInverted:i,siderBorderColor:r,siderBorderColorInverted:i,siderColor:n,siderColorInverted:i,siderToggleButtonBorder:`1px solid ${r}`,siderToggleButtonColor:e,siderToggleButtonIconColor:t,siderToggleButtonIconColorInverted:t,siderToggleBarColor:P(l,u),siderToggleBarColorHover:P(l,h),__invertScrollbar:"true"}},W=O({name:"Layout",common:j,peers:{Scrollbar:E},self:D}),_=W,k={type:String,default:"static"},M=z("layout",`
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
`,[z("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),$("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),K={embedded:Boolean,position:k,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},U=N("n-layout");function q(o){return R({name:o?"LayoutContent":"Layout",props:Object.assign(Object.assign({},m.props),K),setup(e){const t=w(null),l=w(null),{mergedClsPrefixRef:n,inlineThemeDisabled:r}=B(e),s=m("Layout","-layout",M,_,e,n);function u(a,d){if(e.nativeScrollbar){const{value:c}=t;c&&(d===void 0?c.scrollTo(a):c.scrollTo(a,d))}else{const{value:c}=l;c&&c.scrollTo(a,d)}}H(U,e);let h=0,i=0;const p=a=>{var d;const c=a.target;h=c.scrollLeft,i=c.scrollTop,(d=e.onScroll)===null||d===void 0||d.call(e,a)};V(()=>{if(e.nativeScrollbar){const a=t.value;a&&(a.scrollTop=i,a.scrollLeft=h)}});const x={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},y={scrollTo:u},b=v(()=>{const{common:{cubicBezierEaseInOut:a},self:d}=s.value;return{"--n-bezier":a,"--n-color":e.embedded?d.colorEmbedded:d.color,"--n-text-color":d.textColor}}),f=r?I("layout",v(()=>e.embedded?"e":""),b,e):void 0;return Object.assign({mergedClsPrefix:n,scrollableElRef:t,scrollbarInstRef:l,hasSiderStyle:x,mergedTheme:s,handleNativeElScroll:p,cssVars:r?void 0:b,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender},y)},render(){var e;const{mergedClsPrefix:t,hasSider:l}=this;(e=this.onRender)===null||e===void 0||e.call(this);const n=l?this.hasSiderStyle:void 0,r=[this.themeClass,o&&`${t}-layout-content`,`${t}-layout`,`${t}-layout--${this.position}-positioned`];return T("div",{class:r,style:this.cssVars},this.nativeScrollbar?T("div",{ref:"scrollableElRef",class:`${t}-layout-scroll-container`,style:[this.contentStyle,n],onScroll:this.handleNativeElScroll},this.$slots):T(F,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,n]}),this.$slots))}})}const Z=q(!1),X=z("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[g("&:first-child",{marginTop:0}),$("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[$("align-text",{paddingLeft:0},[g("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),g("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),g("&::before",{backgroundColor:"var(--n-bar-color)"})])]),Y=Object.assign(Object.assign({},m.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),C=o=>R({name:`H${o}`,props:Y,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:l}=B(e),n=m("Typography","-h",X,L,e,t),r=v(()=>{const{type:u}=e,{common:{cubicBezierEaseInOut:h},self:{headerFontWeight:i,headerTextColor:p,[S("headerPrefixWidth",o)]:x,[S("headerFontSize",o)]:y,[S("headerMargin",o)]:b,[S("headerBarWidth",o)]:f,[S("headerBarColor",u)]:a}}=n.value;return{"--n-bezier":h,"--n-font-size":y,"--n-margin":b,"--n-bar-color":a,"--n-bar-width":f,"--n-font-weight":i,"--n-text-color":p,"--n-prefix-width":x}}),s=l?I(`h${o}`,v(()=>e.type[0]),r,e):void 0;return{mergedClsPrefix:t,cssVars:l?void 0:r,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e;const{prefix:t,alignText:l,mergedClsPrefix:n,cssVars:r,$slots:s}=this;return(e=this.onRender)===null||e===void 0||e.call(this),T(`h${o}`,{class:[`${n}-h`,`${n}-h${o}`,this.themeClass,{[`${n}-h--prefix-bar`]:t,[`${n}-h--align-text`]:l}],style:r},s)}}),ee=C("1");C("2");C("3");C("4");C("5");C("6");const A=z("p",`
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`,[g("&:first-child","margin-top: 0;"),g("&:last-child","margin-bottom: 0;")]),G=Object.assign(Object.assign({},m.props),{depth:[String,Number]}),oe=R({name:"P",props:G,setup(o){const{mergedClsPrefixRef:e,inlineThemeDisabled:t}=B(o),l=m("Typography","-p",A,L,o,e),n=v(()=>{const{depth:s}=o,u=s||"1",{common:{cubicBezierEaseInOut:h},self:{pFontSize:i,pLineHeight:p,pMargin:x,pTextColor:y,[`pTextColor${u}Depth`]:b}}=l.value;return{"--n-bezier":h,"--n-font-size":i,"--n-line-height":p,"--n-margin":x,"--n-text-color":s===void 0?y:b}}),r=t?I("p",v(()=>`${o.depth||""}`),n,o):void 0;return{mergedClsPrefix:e,cssVars:t?void 0:n,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var o;return(o=this.onRender)===null||o===void 0||o.call(this),T("p",{class:[`${this.mergedClsPrefix}-p`,this.themeClass],style:this.cssVars},this.$slots)}});export{ee as N,oe as a,Z as b};
