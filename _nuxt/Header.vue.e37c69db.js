import{q as K,M as fe,O as Te,P as Be,Q as De,R as $e,S as X,T as Ae,U as Z,d as z,B as d,C as he,V as $,W as ge,z as g,x as q,X as Y,Y as Le,Z as xe,$ as ee,a0 as je,F as ke,a1 as Fe,a2 as Me,a3 as Ee,m as P,a4 as He,D as U,a5 as me,n as I,a6 as D,a7 as C,v as Ue,p as Se,a8 as se,A as qe,a9 as Ve,E as j,aa as We,ab as Ge,ac as Qe,J as Xe,o as de,g as be,e as h,t as J,r as Ze,c as Je,ad as Ye,b as F,L as eo,i as le,f as G,I as ce,G as ue}from"./entry.5f25831e.js";import{V as oo,a as no,b as to,r as ro,N as io,p as Ne}from"./Popover.40086119.js";import{N as ao}from"./Icon.bc10437f.js";import{h as we,c as so,a as lo}from"./create.f805babe.js";import{u as co}from"./use-merged-state.e8c51dcf.js";import{d as uo}from"./light.82c1606f.js";function po(e,r,i){if(!r)return e;const n=K(e.value);let t=null;return fe(e,o=>{t!==null&&window.clearTimeout(t),o===!0?i&&!i.value?n.value=!0:t=window.setTimeout(()=>{n.value=!0},r):n.value=!1}),n}function fo(e={},r){const i=Te({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:n,keyup:t}=e,o=a=>{switch(a.key){case"Control":i.ctrl=!0;break;case"Meta":i.command=!0,i.win=!0;break;case"Shift":i.shift=!0;break;case"Tab":i.tab=!0;break}n!==void 0&&Object.keys(n).forEach(y=>{if(y!==a.key)return;const m=n[y];if(typeof m=="function")m(a);else{const{stop:x=!1,prevent:S=!1}=m;x&&a.stopPropagation(),S&&a.preventDefault(),m.handler(a)}})},c=a=>{switch(a.key){case"Control":i.ctrl=!1;break;case"Meta":i.command=!1,i.win=!1;break;case"Shift":i.shift=!1;break;case"Tab":i.tab=!1;break}t!==void 0&&Object.keys(t).forEach(y=>{if(y!==a.key)return;const m=t[y];if(typeof m=="function")m(a);else{const{stop:x=!1,prevent:S=!1}=m;x&&a.stopPropagation(),S&&a.preventDefault(),m.handler(a)}})},u=()=>{(r===void 0||r.value)&&(Z("keydown",document,o),Z("keyup",document,c)),r!==void 0&&fe(r,a=>{a?(Z("keydown",document,o),Z("keyup",document,c)):(X("keydown",document,o),X("keyup",document,c))})};return Be()?(De(u),$e(()=>{(r===void 0||r.value)&&(X("keydown",document,o),X("keyup",document,c))})):u(),Ae(i)}const ho=z({name:"ChevronRight",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),Pe=z({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return d("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),ve=he("n-dropdown-menu"),oe=he("n-dropdown"),ye=he("n-dropdown-option");function pe(e,r){return e.type==="submenu"||e.type===void 0&&e[r]!==void 0}function vo(e){return e.type==="group"}function Re(e){return e.type==="divider"}function mo(e){return e.type==="render"}const _e=z({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const r=$(oe),{hoverKeyRef:i,keyboardKeyRef:n,lastToggledSubmenuKeyRef:t,pendingKeyPathRef:o,activeKeyPathRef:c,animatedRef:u,mergedShowRef:a,renderLabelRef:y,renderIconRef:m,labelFieldRef:x,childrenFieldRef:S,renderOptionRef:R,nodePropsRef:O,menuPropsRef:M}=r,k=$(ye,null),T=$(ve),V=$(ge),ne=g(()=>e.tmNode.rawNode),W=g(()=>{const{value:l}=S;return pe(e.tmNode.rawNode,l)}),te=g(()=>{const{disabled:l}=e.tmNode;return l}),re=g(()=>{if(!W.value)return!1;const{key:l,disabled:w}=e.tmNode;if(w)return!1;const{value:_}=i,{value:A}=n,{value:ae}=t,{value:L}=o;return _!==null?L.includes(l):A!==null?L.includes(l)&&L[L.length-1]!==l:ae!==null?L.includes(l):!1}),ie=g(()=>n.value===null&&!u.value),Q=po(re,300,ie),E=g(()=>!!(k!=null&&k.enteringSubmenuRef.value)),H=K(!1);q(ye,{enteringSubmenuRef:H});function B(){H.value=!0}function s(){H.value=!1}function b(){const{parentKey:l,tmNode:w}=e;w.disabled||a.value&&(t.value=l,n.value=null,i.value=w.key)}function f(){const{tmNode:l}=e;l.disabled||a.value&&i.value!==l.key&&b()}function p(l){if(e.tmNode.disabled||!a.value)return;const{relatedTarget:w}=l;w&&!we({target:w},"dropdownOption")&&!we({target:w},"scrollbarRail")&&(i.value=null)}function N(){const{value:l}=W,{tmNode:w}=e;a.value&&!l&&!w.disabled&&(r.doSelect(w.key,w.rawNode),r.doUpdateShow(!1))}return{labelField:x,renderLabel:y,renderIcon:m,siblingHasIcon:T.showIconRef,siblingHasSubmenu:T.hasSubmenuRef,menuProps:M,popoverBody:V,animated:u,mergedShowSubmenu:g(()=>Q.value&&!E.value),rawNode:ne,hasSubmenu:W,pending:Y(()=>{const{value:l}=o,{key:w}=e.tmNode;return l.includes(w)}),childActive:Y(()=>{const{value:l}=c,{key:w}=e.tmNode,_=l.findIndex(A=>w===A);return _===-1?!1:_<l.length-1}),active:Y(()=>{const{value:l}=c,{key:w}=e.tmNode,_=l.findIndex(A=>w===A);return _===-1?!1:_===l.length-1}),mergedDisabled:te,renderOption:R,nodeProps:O,handleClick:N,handleMouseMove:f,handleMouseEnter:b,handleMouseLeave:p,handleSubmenuBeforeEnter:B,handleSubmenuAfterEnter:s}},render(){var e,r;const{animated:i,rawNode:n,mergedShowSubmenu:t,clsPrefix:o,siblingHasIcon:c,siblingHasSubmenu:u,renderLabel:a,renderIcon:y,renderOption:m,nodeProps:x,props:S,scrollable:R}=this;let O=null;if(t){const V=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,n,n.children);O=d(Ie,Object.assign({},V,{clsPrefix:o,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const M={class:[`${o}-dropdown-option-body`,this.pending&&`${o}-dropdown-option-body--pending`,this.active&&`${o}-dropdown-option-body--active`,this.childActive&&`${o}-dropdown-option-body--child-active`,this.mergedDisabled&&`${o}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},k=x==null?void 0:x(n),T=d("div",Object.assign({class:[`${o}-dropdown-option`,k==null?void 0:k.class],"data-dropdown-option":!0},k),d("div",xe(M,S),[d("div",{class:[`${o}-dropdown-option-body__prefix`,c&&`${o}-dropdown-option-body__prefix--show-icon`]},[y?y(n):ee(n.icon)]),d("div",{"data-dropdown-option":!0,class:`${o}-dropdown-option-body__label`},a?a(n):ee((r=n[this.labelField])!==null&&r!==void 0?r:n.title)),d("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__suffix`,u&&`${o}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?d(ao,null,{default:()=>d(ho,null)}):null)]),this.hasSubmenu?d(oo,null,{default:()=>[d(no,null,{default:()=>d("div",{class:`${o}-dropdown-offset-container`},d(to,{show:this.mergedShowSubmenu,placement:this.placement,to:R&&this.popoverBody||void 0,teleportDisabled:!R},{default:()=>d("div",{class:`${o}-dropdown-menu-wrapper`},i?d(Le,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>O}):O)}))})]}):null);return m?m({node:T,option:n}):T}}),bo=z({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:r}=$(ve),{renderLabelRef:i,labelFieldRef:n,nodePropsRef:t,renderOptionRef:o}=$(oe);return{labelField:n,showIcon:e,hasSubmenu:r,renderLabel:i,nodeProps:t,renderOption:o}},render(){var e;const{clsPrefix:r,hasSubmenu:i,showIcon:n,nodeProps:t,renderLabel:o,renderOption:c}=this,{rawNode:u}=this.tmNode,a=d("div",Object.assign({class:`${r}-dropdown-option`},t==null?void 0:t(u)),d("div",{class:`${r}-dropdown-option-body ${r}-dropdown-option-body--group`},d("div",{"data-dropdown-option":!0,class:[`${r}-dropdown-option-body__prefix`,n&&`${r}-dropdown-option-body__prefix--show-icon`]},ee(u.icon)),d("div",{class:`${r}-dropdown-option-body__label`,"data-dropdown-option":!0},o?o(u):ee((e=u.title)!==null&&e!==void 0?e:u[this.labelField])),d("div",{class:[`${r}-dropdown-option-body__suffix`,i&&`${r}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return c?c({node:a,option:u}):a}}),wo=z({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:r,clsPrefix:i}=this,{children:n}=e;return d(ke,null,d(bo,{clsPrefix:i,tmNode:e,key:e.key}),n==null?void 0:n.map(t=>{const{rawNode:o}=t;return o.show===!1?null:Re(o)?d(Pe,{clsPrefix:i,key:t.key}):t.isGroup?(je("dropdown","`group` node is not allowed to be put in `group` node."),null):d(_e,{clsPrefix:i,tmNode:t,parentKey:r,key:t.key})}))}}),yo=z({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:r}}=this.tmNode;return d("div",r,[e==null?void 0:e()])}}),Ie=z({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:r,childrenFieldRef:i}=$(oe);q(ve,{showIconRef:g(()=>{const t=r.value;return e.tmNodes.some(o=>{var c;if(o.isGroup)return(c=o.children)===null||c===void 0?void 0:c.some(({rawNode:a})=>t?t(a):a.icon);const{rawNode:u}=o;return t?t(u):u.icon})}),hasSubmenuRef:g(()=>{const{value:t}=i;return e.tmNodes.some(o=>{var c;if(o.isGroup)return(c=o.children)===null||c===void 0?void 0:c.some(({rawNode:a})=>pe(a,t));const{rawNode:u}=o;return pe(u,t)})})});const n=K(null);return q(Fe,null),q(Me,null),q(ge,n),{bodyRef:n}},render(){const{parentKey:e,clsPrefix:r,scrollable:i}=this,n=this.tmNodes.map(t=>{const{rawNode:o}=t;return o.show===!1?null:mo(o)?d(yo,{tmNode:t,key:t.key}):Re(o)?d(Pe,{clsPrefix:r,key:t.key}):vo(o)?d(wo,{clsPrefix:r,tmNode:t,parentKey:e,key:t.key}):d(_e,{clsPrefix:r,tmNode:t,parentKey:e,key:t.key,props:o.props,scrollable:i})});return d("div",{class:[`${r}-dropdown-menu`,i&&`${r}-dropdown-menu--scrollable`],ref:"bodyRef"},i?d(Ee,{contentClass:`${r}-dropdown-menu__content`},{default:()=>n}):n,this.showArrow?ro({clsPrefix:r,arrowStyle:this.arrowStyle}):null)}}),go=P("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[He(),P("dropdown-option",`
 position: relative;
 `,[U("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[U("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),P("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[U("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),me("disabled",[I("pending",`
 color: var(--n-option-text-color-hover);
 `,[D("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),U("&::before","background-color: var(--n-option-color-hover);")]),I("active",`
 color: var(--n-option-text-color-active);
 `,[D("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),U("&::before","background-color: var(--n-option-color-active);")]),I("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[D("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),I("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),I("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[D("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[I("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),D("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[I("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),P("icon",`
 font-size: var(--n-option-icon-size);
 `)]),D("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),D("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[I("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),P("icon",`
 font-size: var(--n-option-icon-size);
 `)]),P("dropdown-menu","pointer-events: all;")]),P("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),P("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),P("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),U(">",[P("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),me("scrollable",`
 padding: var(--n-padding);
 `),I("scrollable",[D("content",`
 padding: var(--n-padding);
 `)])]),xo={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},ko=Object.keys(Ne),So=Object.assign(Object.assign(Object.assign({},Ne),xo),Se.props),No=z({name:"Dropdown",inheritAttrs:!1,props:So,setup(e){const r=K(!1),i=co(C(e,"show"),r),n=g(()=>{const{keyField:s,childrenField:b}=e;return so(e.options,{getKey(f){return f[s]},getDisabled(f){return f.disabled===!0},getIgnored(f){return f.type==="divider"||f.type==="render"},getChildren(f){return f[b]}})}),t=g(()=>n.value.treeNodes),o=K(null),c=K(null),u=K(null),a=g(()=>{var s,b,f;return(f=(b=(s=o.value)!==null&&s!==void 0?s:c.value)!==null&&b!==void 0?b:u.value)!==null&&f!==void 0?f:null}),y=g(()=>n.value.getPath(a.value).keyPath),m=g(()=>n.value.getPath(e.value).keyPath),x=Y(()=>e.keyboard&&i.value);fo({keydown:{ArrowUp:{prevent:!0,handler:te},ArrowRight:{prevent:!0,handler:W},ArrowDown:{prevent:!0,handler:re},ArrowLeft:{prevent:!0,handler:ne},Enter:{prevent:!0,handler:ie},Escape:V}},x);const{mergedClsPrefixRef:S,inlineThemeDisabled:R}=Ue(e),O=Se("Dropdown","-dropdown",go,uo,e,S);q(oe,{labelFieldRef:C(e,"labelField"),childrenFieldRef:C(e,"childrenField"),renderLabelRef:C(e,"renderLabel"),renderIconRef:C(e,"renderIcon"),hoverKeyRef:o,keyboardKeyRef:c,lastToggledSubmenuKeyRef:u,pendingKeyPathRef:y,activeKeyPathRef:m,animatedRef:C(e,"animated"),mergedShowRef:i,nodePropsRef:C(e,"nodeProps"),renderOptionRef:C(e,"renderOption"),menuPropsRef:C(e,"menuProps"),doSelect:M,doUpdateShow:k}),fe(i,s=>{!e.animated&&!s&&T()});function M(s,b){const{onSelect:f}=e;f&&se(f,s,b)}function k(s){const{"onUpdate:show":b,onUpdateShow:f}=e;b&&se(b,s),f&&se(f,s),r.value=s}function T(){o.value=null,c.value=null,u.value=null}function V(){k(!1)}function ne(){E("left")}function W(){E("right")}function te(){E("up")}function re(){E("down")}function ie(){const s=Q();s!=null&&s.isLeaf&&i.value&&(M(s.key,s.rawNode),k(!1))}function Q(){var s;const{value:b}=n,{value:f}=a;return!b||f===null?null:(s=b.getNode(f))!==null&&s!==void 0?s:null}function E(s){const{value:b}=a,{value:{getFirstAvailableNode:f}}=n;let p=null;if(b===null){const N=f();N!==null&&(p=N.key)}else{const N=Q();if(N){let l;switch(s){case"down":l=N.getNext();break;case"up":l=N.getPrev();break;case"right":l=N.getChild();break;case"left":l=N.getParent();break}l&&(p=l.key)}}p!==null&&(o.value=null,c.value=p)}const H=g(()=>{const{size:s,inverted:b}=e,{common:{cubicBezierEaseInOut:f},self:p}=O.value,{padding:N,dividerColor:l,borderRadius:w,optionOpacityDisabled:_,[j("optionIconSuffixWidth",s)]:A,[j("optionSuffixWidth",s)]:ae,[j("optionIconPrefixWidth",s)]:L,[j("optionPrefixWidth",s)]:Ce,[j("fontSize",s)]:Ke,[j("optionHeight",s)]:ze,[j("optionIconSize",s)]:Oe}=p,v={"--n-bezier":f,"--n-font-size":Ke,"--n-padding":N,"--n-border-radius":w,"--n-option-height":ze,"--n-option-prefix-width":Ce,"--n-option-icon-prefix-width":L,"--n-option-suffix-width":ae,"--n-option-icon-suffix-width":A,"--n-option-icon-size":Oe,"--n-divider-color":l,"--n-option-opacity-disabled":_};return b?(v["--n-color"]=p.colorInverted,v["--n-option-color-hover"]=p.optionColorHoverInverted,v["--n-option-color-active"]=p.optionColorActiveInverted,v["--n-option-text-color"]=p.optionTextColorInverted,v["--n-option-text-color-hover"]=p.optionTextColorHoverInverted,v["--n-option-text-color-active"]=p.optionTextColorActiveInverted,v["--n-option-text-color-child-active"]=p.optionTextColorChildActiveInverted,v["--n-prefix-color"]=p.prefixColorInverted,v["--n-suffix-color"]=p.suffixColorInverted,v["--n-group-header-text-color"]=p.groupHeaderTextColorInverted):(v["--n-color"]=p.color,v["--n-option-color-hover"]=p.optionColorHover,v["--n-option-color-active"]=p.optionColorActive,v["--n-option-text-color"]=p.optionTextColor,v["--n-option-text-color-hover"]=p.optionTextColorHover,v["--n-option-text-color-active"]=p.optionTextColorActive,v["--n-option-text-color-child-active"]=p.optionTextColorChildActive,v["--n-prefix-color"]=p.prefixColor,v["--n-suffix-color"]=p.suffixColor,v["--n-group-header-text-color"]=p.groupHeaderTextColor),v}),B=R?qe("dropdown",g(()=>`${e.size[0]}${e.inverted?"i":""}`),H,e):void 0;return{mergedClsPrefix:S,mergedTheme:O,tmNodes:t,mergedShow:i,handleAfterLeave:()=>{e.animated&&T()},doUpdateShow:k,cssVars:R?void 0:H,themeClass:B==null?void 0:B.themeClass,onRender:B==null?void 0:B.onRender}},render(){const e=(n,t,o,c,u)=>{var a;const{mergedClsPrefix:y,menuProps:m}=this;(a=this.onRender)===null||a===void 0||a.call(this);const x=(m==null?void 0:m(void 0,this.tmNodes.map(R=>R.rawNode)))||{},S={ref:lo(t),class:[n,`${y}-dropdown`,this.themeClass],clsPrefix:y,tmNodes:this.tmNodes,style:[o,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:c,onMouseleave:u};return d(Ie,xe(this.$attrs,S,x))},{mergedTheme:r}=this,i={show:this.mergedShow,theme:r.peers.Popover,themeOverrides:r.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return d(io,Object.assign({},Ve(this.$props,ko),i),{trigger:()=>{var n,t;return(t=(n=this.$slots).default)===null||t===void 0?void 0:t.call(n)}})}});function Po(){const e=$(We,null);return e===null&&Ge("use-message","No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."),e}const Ro=[{label:"简体中文",key:"zh-CN"},{label:"繁體中文",key:"zh-TW"},{label:"English(US)",key:"en-US"}],_o={class:"max-auto"},Io={class:"flex items-center text-base min-h-[2rem]"},Co={class:"font-black heti--serif tracking-tighterp text-l p-2 flex items-center whitespace-nowrap w-max",style:{"inline-size":"max-content"}},Ko={id:"header-title",class:"opacity-0 md:ml-2 md:mt-[0.1rem] text-xs font-medium whitespace-nowrap overflow-hidden overflow-ellipsis"},zo=h("div",{class:"flex-1"},null,-1),Oo={class:"flex items-center gap-3"},To=h("i",{class:"ri-search-2-fill"},null,-1),Bo=h("span",{class:"hidden leading-none sm:block text-gray-400 px-1.5 border border-gray-300 rounded-md"},[h("span",{class:"sr-only text-xs"},"Press "),h("kbd",{class:"font-sans"},[h("abbr",{title:"Control",class:"no-underline text-xs"},"Ctrl ")]),h("span",{class:"sr-only text-xs"}," and "),h("kbd",{class:"font-sans text-xs"},"K"),h("span",{class:"sr-only text-xs"}," to search")],-1),Do=h("i",{class:"ri-earth-line"},null,-1),$o=h("div",{class:"flex items-center justify-center gap-3 ml-3 md:hidden rounded bg-opacity-50 hover:bg-gray-200 dark:hover:bg-zinc-700 px-1.5"},[h("span",{"aria-hidden":"true",role:"img",id:"open-menu"},[h("i",{class:"ri-menu-4-fill"})]),h("span",{class:"hidden","aria-hidden":"true",role:"img",id:"close-menu"},[h("i",{class:"ri-close-fill"})])],-1),Ho=z({__name:"Header",props:{siteTitle:{type:String,default:""},pageTitle:{type:String,default:""},navItems:{type:Object,default:()=>[]}},setup(e){const{locale:r}=Qe();Po();const i=c=>{r.value=c},n=K(null),t=K(null),o=()=>{new IntersectionObserver(([u])=>{u.intersectionRatio<1?(n.value.style.borderBottom="1px solid rgb(0 0 0 / 0.05)",n.value.classList.add("backdrop-saturate-150","backdrop-blur-xl"),t.value.classList.remove("hidden")):(n.value.style.borderBottom="none",n.value.classList.remove("backdrop-saturate-150","backdrop-blur-xl"),t.value.classList.add("hidden"))},{threshold:[1]}).observe(n.value)};return Xe(()=>{o()}),(c,u)=>(de(),be("header",{ref_key:"headerRef",ref:n,class:"sticky -top-px left-0 w-full px-5 py-3 backdrop-blur-xl backdrop-saturate-150 z-100",style:{background:"var(--grain-square-white-opacity-blend)"}},[h("div",_o,[h("nav",Io,[h("a",{ref_key:"siteTitleLRef",ref:t,href:"#",class:"group"},[h("h2",Co,J(e.siteTitle),1)],512),h("div",Ko,J(e.pageTitle),1),zo,h("div",Oo,[(de(!0),be(ke,null,Ze(e.navItems,(a,y)=>(de(),Je(G(ce),{key:y,quaternary:"",size:"small"},Ye({default:F(()=>[le(" "+J(a.title),1)]),_:2},[a.icon?{name:"icon",fn:F(()=>[h("i",{class:eo(a.icon)},null,2)]),key:"0"}:void 0]),1024))),128)),ue(G(ce),{quaternary:"",size:"small"},{icon:F(()=>[To]),default:F(()=>[le(" "+J(c.$t("search.title"))+" ",1),Bo]),_:1})]),ue(G(No),{trigger:"hover",options:G(Ro),onSelect:i},{default:F(()=>[ue(G(ce),{quaternary:"",size:"small"},{icon:F(()=>[Do]),default:F(()=>[le(" Language ")]),_:1})]),_:1},8,["options"]),$o])])],512))}});export{Ho as _};
