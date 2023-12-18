import{_ as T}from"./default.vue.b15eccc7.js";import{d as q,w as A,u as E,r as H,a as s,e as L,h as G,f as e,i as o,c as a,j as I,k as J,t as n,l as F,m as K,F as N,p as M}from"./entry.ead83f6c.js";import{u as O}from"./useChineseColor.29f55d72.js";import"./Header.vue.689e9ca1.js";import"./Tag.8b5bf260.js";import"./Footer.vue.0a9bbc9b.js";import"./useLocalCache.c2865fdc.js";import"./light.fb766011.js";import"./light.826b1ed8.js";import"./light.0a0ba5bf.js";import"./light.39437a9d.js";import"./light.5de8afbc.js";import"./use-merged-state.424fd017.js";import"./format-length.c9d165c6.js";const P={class:"main-content text-gray-700 dark:text-white"},Q={class:"bg-white dark:bg-zinc-900 dark:bg-opacity-80 rounded-sm relative dark:border-zinc-800 bg-opacity-80 pb-24"},U={class:"w-full aspect-[4/1] min-h-20 overflow-hidden relative group"},W=["alt","src"],X={class:"md:pt-4 pt-6"},Y={class:"heti--serif text-4xl font-extrabold leading-snug md:mb-4 mb-6 mt-2"},Z={class:"text-sm"},ee={class:"px-24 md:px-4 pt-24"},te={class:"text-2xl font-bold heti--serif"},se={class:"text-xs"},oe={class:"grid grid-cols-4 lg:grid-cols-2 md:grid-cols-1 gap-4 pt-12 select-none"},re={class:"w-full aspect-video px-2 py-4 flex flex-col justify-between heti--serif heti--vertical relative"},ae={class:"font-bold self-end z-1"},ne=["href","data-cursor-text"],ie={class:"px-8 z-1"},le={key:0,class:"px-2 z-1"},ce=["href","data-cursor-text"],de=e("i",{class:"ri-rss-fill"},null,-1),ue=e("span",null,"RSS",-1),he=[de,ue],me={key:1},_e=["alt","src"],pe=["alt","src"],Re=q({__name:"friends",async setup(fe){let i,h;const m=([i,h]=A(()=>E()),i=await i,h(),i),R=O(),r=m.getThemeConfig(),V=m.getFriends(),d=H({}),_=l=>{if(d.value[l]!==void 0)return d.value[l];{const u=R.getRandomChineseColor();return d.value[l]=u,u}};return(l,u)=>{var p,f;return s(),L(T,{"page-title":((f=(p=o(r))==null?void 0:p.friends)==null?void 0:f.name)||"友情链接"},{default:G(()=>{var g,v,b,x,y,C,w,k,z,j,B,S;return[e("div",P,[e("div",Q,[e("div",U,[(v=(g=o(r))==null?void 0:g.friends)!=null&&v.background?(s(),a("img",{key:0,alt:((x=(b=o(r))==null?void 0:b.friends)==null?void 0:x.name)||"友情链接",class:"w-full h-full object-cover group-hover:filter-none group-hover:scale-105 brightness-[0.6] transition-all duration-1000",src:(C=(y=o(r))==null?void 0:y.friends)==null?void 0:C.background},null,8,W)):I("",!0),e("header",{class:J(["overflow-hidden px-24 md:px-4 pb-8 absolute bottom-0 inset-x-0 z-1 h-full flex items-end backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-1000",(k=(w=o(r))==null?void 0:w.friends)!=null&&k.background?"text-white group-hover:opacity-50":""])},[e("div",X,[e("h1",Y,[e("span",null,n(((j=(z=o(r))==null?void 0:z.friends)==null?void 0:j.name)||"友情链接"),1)]),e("div",Z,n((S=(B=o(r))==null?void 0:B.friends)==null?void 0:S.description),1)])],2)]),e("section",ee,[(s(!0),a(N,null,F(o(V),(c,$)=>(s(),a("div",{key:$},[e("h2",te,[K(n(c.group),1),e("sub",null,"("+n(c.links.length||0)+")",1)]),e("div",se,n(c.desc),1),e("div",oe,[(s(!0),a(N,null,F(c.links||[],(t,D)=>(s(),a("div",{key:D,class:"group",style:M({backgroundColor:_(t.name).hex,color:_(t.name).fontColor||"#ffffff"})},[e("div",re,[e("h3",ae,[e("a",{href:t.link,target:"_blank",class:"cursor-hover-item hover:underline","data-cursor-text":`访问${t.name}→`},[e("span",null,n(t.name),1)],8,ne)]),e("div",ie,n(t.desc),1),t.rss?(s(),a("div",le,[e("a",{href:t.rss,target:"_blank",class:"cursor-hover-item","data-cursor-text":`订阅${t.name}`},he,8,ce)])):(s(),a("div",me)),e("img",{class:"absolute left-2 bottom-2 object-cover aspect-square rounded-full w-8 z-1",alt:t.name,src:t.avatar},null,8,_e),e("img",{class:"absolute left-0 top-0 w-full h-full object-cover opacity-0 brightness-50 blur-sm group-hover:opacity-100 duration-500 transition-opacity",alt:t.name,src:t.background||t.avatar},null,8,pe)])],4))),128))])]))),128))])])])]}),_:1},8,["page-title"])}}});export{Re as default};
