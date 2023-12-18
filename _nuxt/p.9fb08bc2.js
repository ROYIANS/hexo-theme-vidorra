import{p as C,a4 as a,q as v,d as y,y as z,v as c,B as l,aa as h,C as $,D as T}from"./entry.e699548d.js";import{t as R}from"./composables.6dcd62ac.js";const B=C("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[a("&:first-child",{marginTop:0}),v("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[v("align-text",{paddingLeft:0},[a("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),a("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),a("&::before",{backgroundColor:"var(--n-bar-color)"})])]),S=Object.assign(Object.assign({},c.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),d=e=>y({name:`H${e}`,props:S,setup(t){const{mergedClsPrefixRef:s,inlineThemeDisabled:o}=z(t),i=c("Typography","-h",B,R,t,s),n=l(()=>{const{type:f}=t,{common:{cubicBezierEaseInOut:g},self:{headerFontWeight:m,headerTextColor:p,[h("headerPrefixWidth",e)]:u,[h("headerFontSize",e)]:b,[h("headerMargin",e)]:x,[h("headerBarWidth",e)]:P,[h("headerBarColor",f)]:w}}=i.value;return{"--n-bezier":g,"--n-font-size":b,"--n-margin":x,"--n-bar-color":w,"--n-bar-width":P,"--n-font-weight":m,"--n-text-color":p,"--n-prefix-width":u}}),r=o?$(`h${e}`,l(()=>t.type[0]),n,t):void 0;return{mergedClsPrefix:s,cssVars:o?void 0:n,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var t;const{prefix:s,alignText:o,mergedClsPrefix:i,cssVars:n,$slots:r}=this;return(t=this.onRender)===null||t===void 0||t.call(this),T(`h${e}`,{class:[`${i}-h`,`${i}-h${e}`,this.themeClass,{[`${i}-h--prefix-bar`]:s,[`${i}-h--align-text`]:o}],style:n},r)}}),W=d("1");d("2");d("3");d("4");d("5");d("6");const H=C("p",`
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`,[a("&:first-child","margin-top: 0;"),a("&:last-child","margin-bottom: 0;")]),O=Object.assign(Object.assign({},c.props),{depth:[String,Number]}),j=y({name:"P",props:O,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:s}=z(e),o=c("Typography","-p",H,R,e,t),i=l(()=>{const{depth:r}=e,f=r||"1",{common:{cubicBezierEaseInOut:g},self:{pFontSize:m,pLineHeight:p,pMargin:u,pTextColor:b,[`pTextColor${f}Depth`]:x}}=o.value;return{"--n-bezier":g,"--n-font-size":m,"--n-line-height":p,"--n-margin":u,"--n-text-color":r===void 0?b:x}}),n=s?$("p",l(()=>`${e.depth||""}`),i,e):void 0;return{mergedClsPrefix:t,cssVars:s?void 0:i,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),T("p",{class:[`${this.mergedClsPrefix}-p`,this.themeClass],style:this.cssVars},this.$slots)}});export{W as N,j as a};