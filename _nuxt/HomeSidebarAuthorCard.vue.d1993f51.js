import{d as m,w as f,u as p,a,c as o,g as s,h as t,t as i,F as h,r as v,K as b,i as g}from"./entry.0e4a9e84.js";const x={class:"xl:hidden bg-zinc-900 rounded overflow-hidden relative dark:border-zinc-800 mb-3 aspect-square"},k={class:"absolute inset-0 bg-zinc-900 group text-white"},w=["src"],y={class:"absolute bottom-0 left-0 w-full bg-gradient-to-t from-zinc-900 grid"},z={class:"p-4"},C={class:"font-black text-4xl"},j=s("div",{class:"w-1/6 border-2 my-2 border-default-theme-primary"},null,-1),B={class:"heti--serif text-xs"},q=s("i",{class:"ri-cake-2-fill mr-1"},null,-1),A=s("span",null,"，",-1),D=s("i",{class:"ri-map-pin-fill mr-1"},null,-1),F={class:"text-xs"},H={class:"text-sm bg-black dark:bg-default-theme-primary w-full h-0 group-hover:h-10 transition-[height] duration-500"},N={key:0,class:"flex items-center gap-3 h-10 w-full justify-center"},S=["title","href"],V={class:"hidden xl:flex relative overflow-hidden border dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded mb-3"},Y={class:"w-1/3 aspect-square shrink-0"},$=["src"],E={class:"p-4 grid grid-cols-1 w-full"},K={class:"font-black text-4xl pb-2"},L={class:"heti--serif text-xs"},T=s("i",{class:"ri-cake-2-fill mr-1"},null,-1),G=s("span",null,"，",-1),I=s("i",{class:"ri-map-pin-fill mr-1"},null,-1),J={class:"text-xs"},R=m({__name:"HomeSidebarAuthorCard",async setup(M){let l,r;const c=([l,r]=f(()=>p()),l=await l,r(),l).getThemeConfig(),e=c.me,d=c.links;return(_,P)=>(a(),o(h,null,[s("div",x,[s("div",k,[s("img",{alt:"author avatar",src:t(e).avatar,class:"w-full h-full object-cover"},null,8,w),s("div",y,[s("div",z,[s("div",C,i(t(e).nickname),1),j,s("div",B,[q,s("span",null,i(+_.$dayjs().year()-+t(e).birthYear),1),A,D,s("span",null,i(t(e).location),1)]),s("div",F,i(t(e).description),1)]),s("div",H,[t(d).length?(a(),o("div",N,[(a(!0),o(h,null,v(t(d),(n,u)=>(a(),o("a",{key:u,class:"text-lg flex",title:n.title,href:n.url},[s("i",{class:b(n.icon)},null,2)],8,S))),128))])):g("",!0)])])])]),s("div",V,[s("div",Y,[s("img",{alt:"author avatar",src:t(e).avatar,class:"w-full h-full object-cover"},null,8,$)]),s("div",E,[s("div",K,i(t(e).nickname),1),s("div",L,[T,s("span",null,i(+_.$dayjs().year()-+t(e).birthYear),1),G,I,s("span",null,i(t(e).location),1)]),s("div",J,i(t(e).description),1)])])],64))}});export{R as _};