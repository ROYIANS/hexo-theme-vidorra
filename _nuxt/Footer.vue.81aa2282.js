import{d as i,a as t,c as s,F as c,r as u,g as e,K as d,i as h,t as r,j as l}from"./entry.c7679bea.js";const _={class:"heti--sans flex flex-col h-40 items-center justify-center text-white text-sm ml-[--side-width] pt-5 bg-default-theme-primary md:!shadow-none dark:bg-black"},m={key:0,class:"flex items-center gap-3 py-3"},p=["title","href"],f={class:"flex items-center gap-2"},g=e("i",{class:"ri-hashtag"},null,-1),x=e("i",{class:"ri-cursor-line"},null,-1),b=e("span",{id:"busuanzi_container_site_uv"},[l(" 本站总访问量 "),e("span",{id:"busuanzi_value_site_uv"},"???"),l("人次 ")],-1),y=e("div",{class:"flex items-center gap-2"},[e("span",null,"Powered by"),e("a",{href:"https://hexo.io/",target:"_blank",rel:"noopener noreferrer"},"Hexo"),e("span",null,"&"),e("a",{href:"https://github.com/ROYIANS/hexo-theme-dreamland",target:"_blank",rel:"noopener noreferrer"},"Dreamland")],-1),N=i({__name:"Footer",props:{author:{type:String,default:"ROYIANS"},links:{type:Array,default:()=>[]}},setup(a){return(k,v)=>(t(),s("footer",_,[a.links.length?(t(),s("div",m,[(t(!0),s(c,null,u(a.links,(n,o)=>(t(),s("a",{key:o,class:"text-lg flex",title:n.title,href:n.url},[e("i",{class:d(n.icon)},null,2)],8,p))),128))])):h("",!0),e("div",f,[e("span",null,"© "+r(new Date().getFullYear().toString().substr(-4)),1),g,e("span",null,r(a.author),1),x,b]),y]))}});export{N as _};
