"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{5323:function(e,t,r){r.d(t,{Z:function(){return a}});var l=r(7294);function a(){function e(){const e=window.scrollY,t=window.visualViewport?window.visualViewport.height:0,r=e/(document.documentElement.scrollHeight-t)*100,l=document.getElementById("scroller");l&&l.style&&(l.style.width=r+"%")}function t(){window.removeEventListener("scroll",e)}return(0,l.useEffect)((()=>(window.addEventListener("scroll",e),t)),[]),l.createElement("div",{id:"scroller",className:"fixed h-[3px] left-0 top-0 bg-[color:var(--color-primary)]"})}},3589:function(e,t,r){r.r(t),r.d(t,{default:function(){return c}});var l=r(7294),a=r(1082);function n(e){const{post:t,position:r}=e,n=t.frontmatter.title||t.fields.slug;console.log("asdas",t);const o=[0,3,5],i=(Math.floor(Math.random()*o.length),[2,1,1,1,1,1,2][r%7]);return l.createElement("article",{key:t.fields.slug,className:"cursor-pointer p-6 shadow-[0_5px_30px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_5px_30px_-15px_rgba(0,0,0,0.7)] hover:text-black duration-300 rounded",style:{gridColumn:`auto / span ${i}`},onClick:()=>{return e=t.fields.slug,void(0,a.navigate)(e);var e}},l.createElement("section",{className:"mt-3",style:{overflow:"hidden",height:"260px"}},l.createElement("header",null,l.createElement("span",{className:"text-xl"},n),l.createElement("div",null,t.frontmatter.date)),l.createElement("div",{style:{overflow:"hidden",width:"100%",marginTop:"10px",fontSize:"15px"}},l.createElement("img",{src:`${t.fields.slug}/${t.frontmatter.icon}`,className:"article-icon"}),t.frontmatter.description)),l.createElement("p",{className:"text-[color:var(--color-primary)] text-sm"},"Read more..."))}function o(e){const{posts:t}=e;return l.createElement("div",{className:"relative bg-white pt-10 z-0 mt-[550px]",style:{boxShadow:"0 0 30px 0 rgba(0, 0, 0, 50%)"}},l.createElement("div",{className:"w-[1000px] mx-auto"},l.createElement("div",{className:"pt-12"},l.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"20px"}},t.map(((e,t)=>l.createElement(n,{post:e,position:t})))))),l.createElement("div",{style:{background:"#f3f3f3",height:"200px",padding:"10px",marginTop:"50px"}}))}var i=r(5323);function s(){return l.createElement("div",{className:"h-[550px] w-[1000px] mx-auto flex flex-col items-center justify-center text-slate-100 rounded relative scr-2 shadow-[0_5px_30px_-15px_rgba(0,0,0,1)]",style:{background:"radial-gradient(at top left, rgba(47, 49, 58, 0.97), rgba(26, 27, 35, 0.97))",marginTop:"30px",borderRadius:"7px",overflow:"clip",backdropFilter:"blur(4px)"}},l.createElement("div",{className:"shadow-[0_0_5px_0_rgba(0,0,0,1)",style:{backgroundImage:"url(/img/me.jpg)",backdropFilter:"blur(5px)",height:"120px",width:"120px",backgroundSize:"contain",marginBottom:"10px",borderRadius:"50%"}}),l.createElement("div",{style:{position:"absolute",left:0,top:0,bottom:0,width:"64px",background:"rgba(200, 200, 200, 0.04)",zIndex:100}}),l.createElement("div",{className:"flex flex-col items-center"},l.createElement("div",{style:{fontSize:"34px"}},"Florin Toader"),l.createElement("div",null,"Welcome to my professional abode on the internet.")))}function c(e){let{data:t}=e;const r=t.allMarkdownRemark.nodes;return l.createElement("div",null,l.createElement("div",{className:"bg-[url(/img/bb.jpg)]  bg-cover scroll-watcher z-0"}),l.createElement(o,{posts:r}),l.createElement("div",{style:{height:"400px",left:0,right:0,top:0,position:"absolute",zIndex:1e3}},l.createElement(s,null)),l.createElement(i.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-276e240d076b529f446a.js.map