import{d as m,w as f,u as p,o as i,g as a,e as s,f as t,t as o,F as h,r as v,P as g,h as x}from"./entry.e03be7bb.js";const b={class:"xl:hidden bg-zinc-900 rounded overflow-hidden relative dark:border-zinc-800 mb-3 aspect-square"},w={class:"absolute inset-0 bg-zinc-900 group text-white"},k=["src"],y={class:"absolute bottom-0 left-0 w-full bg-gradient-to-t from-zinc-900 grid"},z={class:"p-4"},C={class:"font-black text-4xl"},j=s("div",{class:"w-1/6 border-2 my-2 border-default-theme-primary"},null,-1),B={class:"heti--serif text-xs"},q=s("i",{class:"ri-cake-2-fill mr-1"},null,-1),A=s("span",null,"，",-1),D=s("i",{class:"ri-map-pin-fill mr-1"},null,-1),F={class:"text-xs"},H={class:"text-sm bg-default-theme-primary w-full h-0 group-hover:h-10 transition-[height] duration-500"},N={key:0,class:"flex items-center gap-3 h-10 w-full justify-center"},V=["title","href"],Y={class:"hidden xl:flex relative overflow-hidden border dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded mb-3"},$={class:"w-1/3 aspect-square shrink-0"},E=["src"],L={class:"p-4 grid grid-cols-1 w-full"},P={class:"font-black text-4xl pb-2"},S={class:"heti--serif text-xs"},T=s("i",{class:"ri-cake-2-fill mr-1"},null,-1),G=s("span",null,"，",-1),I=s("i",{class:"ri-map-pin-fill mr-1"},null,-1),J={class:"text-xs"},R=m({__name:"HomeAuthorCard",async setup(K){let l,r;const c=([l,r]=f(()=>p()),l=await l,r(),l).getThemeConfig(),e=c.me,d=c.links;return(_,O)=>(i(),a(h,null,[s("div",b,[s("div",w,[s("img",{alt:"author avatar",src:t(e).avatar,class:"w-full h-full object-cover"},null,8,k),s("div",y,[s("div",z,[s("div",C,o(t(e).nickname),1),j,s("div",B,[q,s("span",null,o(+_.$dayjs().year()-+t(e).birthYear),1),A,D,s("span",null,o(t(e).location),1)]),s("div",F,o(t(e).description),1)]),s("div",H,[t(d).length?(i(),a("div",N,[(i(!0),a(h,null,v(t(d),(n,u)=>(i(),a("a",{key:u,class:"text-lg flex",title:n.title,href:n.url},[s("i",{class:g(n.icon)},null,2)],8,V))),128))])):x("",!0)])])])]),s("div",Y,[s("div",$,[s("img",{alt:"author avatar",src:t(e).avatar,class:"w-full h-full object-cover"},null,8,E)]),s("div",L,[s("div",P,o(t(e).nickname),1),s("div",S,[T,s("span",null,o(+_.$dayjs().year()-+t(e).birthYear),1),G,I,s("span",null,o(t(e).location),1)]),s("div",J,o(t(e).description),1)])])],64))}});export{R as _};