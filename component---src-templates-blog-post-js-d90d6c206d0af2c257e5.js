"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{1858:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294);function l(e){const{children:t}=e;return r.createElement("div",null,r.createElement("header",{className:"global-header"},undefined),r.createElement("main",null,t))}},5323:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294);function l(){function e(){const e=window.scrollY,t=window.visualViewport?window.visualViewport.height:0,n=e/(document.documentElement.scrollHeight-t)*100,r=document.getElementById("scroller");r&&r.style&&(r.style.width=n+"%")}function t(){window.removeEventListener("scroll",e)}return(0,r.useEffect)((()=>(window.addEventListener("scroll",e),t)),[]),r.createElement("div",{id:"scroller",className:"fixed h-[3px] left-0 top-0 bg-[color:var(--color-primary)]"})}},9559:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var r=n(7294),l=n(1858);function a(){return r.createElement("div",{className:"sticky top-0 left-0 right-0 text-white bg-slate-800 h-[82px] shadow-lg "},r.createElement("div",{className:"w-[700px] mx-auto flex items-center h-[82px] header"},r.createElement("img",{src:"/img/me.jpg",style:{width:"40px",borderRadius:"50%",marginRight:"5px"}}),r.createElement("a",{href:"/",className:"text-white"},r.createElement("b",null,"Florin Toader"))))}var o=n(5323);function c(e){const{post:t,location:n}=e;return console.log("POST",n.href+t.frontmatter.image),console.log("frontmatter",t.frontmatter),r.createElement(r.Fragment,null,r.createElement("title",null,t.frontmatter.title),r.createElement("meta",{name:"og:image:secure_url",content:"https://florintoader.me/2024-01-08-ddd-bdd/cucumber.jpg"}),r.createElement("meta",{name:"og:description",content:t.frontmatter.description}))}function i(e){var t;const{data:n,location:i}=e,m=n.markdownRemark,s=(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title";return r.createElement(l.Z,{location:i,title:s},r.createElement(a,null),r.createElement(c,{post:m,location:i}),r.createElement("article",{className:"w-[700px] mx-auto pt-[150px] mb-[20px] mt-[150px] post-container",itemScope:!0},r.createElement("header",null,r.createElement("h1",{itemProp:"headline"},m.frontmatter.title),r.createElement("p",null,r.createElement("i",null,m.frontmatter.date))),r.createElement("section",{dangerouslySetInnerHTML:{__html:m.html},itemProp:"articleBody"})),r.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-d90d6c206d0af2c257e5.js.map