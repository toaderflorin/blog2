"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{5323:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(7294);function l(){function e(){const e=window.scrollY,t=window.visualViewport?window.visualViewport.height:0,a=e/(document.documentElement.scrollHeight-t)*100,r=document.getElementById("scroller");r&&r.style&&(r.style.width=a+"%")}function t(){window.removeEventListener("scroll",e)}return(0,r.useEffect)((()=>(window.addEventListener("scroll",e),t)),[]),r.createElement("div",{id:"scroller",className:"fixed h-[3px] left-0 top-0 bg-[color:var(--color-primary)]"})}},3589:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var r=a(7294),l=a(1082);function n(e){const{post:t,position:a}=e,n=t.frontmatter.title||t.fields.slug;const s=[2,1,1,1,1,1,2][a%7];return r.createElement(r.Fragment,null,5==a&&r.createElement("div",{className:"span-3 my-5"},"Like what you are reading? Reach ",r.createElement("a",null,"out"),"."),r.createElement("article",{key:t.fields.slug,className:`cursor-pointer p-5 shadow-[0_5px_30px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_5px_30px_-15px_rgba(0,0,0,0.7)] hover:text-black duration-300 rounded span-${s}`,onClick:()=>{return e=t.fields.slug,void(0,l.navigate)(e);var e}},r.createElement("section",{className:"mt-3 relative h-[215px]",style:{overflow:"hidden"}},r.createElement("header",null,r.createElement("span",{className:"text-xl"},n),r.createElement("div",null,t.frontmatter.date)),r.createElement("div",{className:"overflow-hidden w-[100%] mt-[10px]"},r.createElement("img",{src:`${t.fields.slug}/${t.frontmatter.icon}`,className:"article-icon"}),t.frontmatter.description,r.createElement("div",{style:{position:"absolute",left:0,right:0,bottom:0,height:70,background:"linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 150))"}}))),r.createElement("p",{className:"text-[color:var(--color-primary)] text-sm"},"Read more...")))}function s(e){const{posts:t}=e;return r.createElement("div",{className:"relative bg-white pt-10 z-0 pb-[20px] shadow-[0_0_30px_0_rgba(0,0,0,0.5) margin"},r.createElement("div",{className:"mx-auto container"},r.createElement("blockquote",null,"Abasdasd"),r.createElement("div",{className:"pt-4"},r.createElement("div",{className:"cards"},t.map(((e,t)=>r.createElement(n,{post:e,position:t,key:t})))))))}var c=a(5323);function o(){return r.createElement("div",{className:"mx-auto flex flex-col items-center justify-center text-slate-100 rounded relative scr-2 shadow-[0_5px_30px_-15px_rgba(0,0,0,1)] hero"},r.createElement("div",{className:"shadow-[0_0_5px_0_rgba(0,0,0,1) inner"}),r.createElement("div",{className:"bar"},r.createElement("a",{href:"https://www.linkedin.com/in/florin-toader/"},r.createElement("img",{src:"/img/in2.png",className:"w-[24px]"}))),r.createElement("div",{className:"flex flex-col items-center"},r.createElement("div",{style:{fontSize:"34px"}},"Florin Toader"),r.createElement("div",{className:"text-slate-400"},"Don't be dogmatic.")))}function i(e){let{data:t}=e;const a=t.allMarkdownRemark.nodes;return r.createElement("div",null,r.createElement("div",{className:"bg-[url(/img/backdrop2.jpg)]  bg-cover scroll-watcher z-0 h-[400px]"}),r.createElement(s,{posts:a}),r.createElement("div",{style:{height:"400px",left:0,right:0,top:0,position:"absolute",zIndex:1e3}},r.createElement(o,null)),r.createElement(c.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-af6dac4ca06cd4aed4b2.js.map