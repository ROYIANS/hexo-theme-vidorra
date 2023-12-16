import{R as g,W as l,U as d,a0 as h,d as v,$ as b,j as a,a2 as y,M as C,D as m,K as $}from"./entry.00c261f4.js";import{i as _}from"./light.afb97516.js";import{f as z}from"./format-length.c9d165c6.js";const R=g("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[l("color-transition",{transition:"color .3s var(--n-bezier)"}),l("depth",{color:"var(--n-color)"},[d("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),d("svg",{height:"1em",width:"1em"})]),S=Object.assign(Object.assign({},h.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),w=v({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:S,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=b(e),s=h("Icon","-icon",R,_,e,o),r=a(()=>{const{depth:i}=e,{common:{cubicBezierEaseInOut:c},self:u}=s.value;if(i!==void 0){const{color:f,[`opacity${i}Depth`]:p}=u;return{"--n-bezier":c,"--n-color":f,"--n-opacity":p}}return{"--n-bezier":c,"--n-color":"","--n-opacity":""}}),n=t?y("icon",a(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:o,mergedStyle:a(()=>{const{size:i,color:c}=e;return{fontSize:z(i),color:c}}),cssVars:t?void 0:r,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{$parent:o,depth:t,mergedClsPrefix:s,component:r,onRender:n,themeClass:i}=this;return!((e=o==null?void 0:o.$options)===null||e===void 0)&&e._n_icon__&&C("icon","don't wrap `n-icon` inside `n-icon`"),n==null||n(),m("i",$(this.$attrs,{role:"img",class:[`${s}-icon`,i,{[`${s}-icon--depth`]:t,[`${s}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?m(r):this.$slots)}});export{w as N};
