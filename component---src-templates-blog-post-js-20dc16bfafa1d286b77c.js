"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{1858:function(e,t,n){n.d(t,{Z:function(){return r}});var l=n(7294);function r(e){const{location:t,children:n}=e;return l.createElement("div",null,l.createElement("header",{className:"global-header"},undefined),l.createElement("main",null,n))}},5323:function(e,t,n){n.d(t,{Z:function(){return r}});var l=n(7294);function r(){function e(){const e=window.scrollY,t=window.visualViewport?window.visualViewport.height:0,n=e/(document.documentElement.scrollHeight-t)*100,l=document.getElementById("scroller");l&&l.style&&(l.style.width=n+"%")}function t(){window.removeEventListener("scroll",e)}return(0,l.useEffect)((()=>(window.addEventListener("scroll",e),t)),[]),l.createElement("div",{id:"scroller",className:"fixed h-[3px] left-0 top-0 bg-[color:var(--color-primary)]"})}},9559:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var l=n(7294),r=n(1858);function a(){return l.createElement("div",{className:"fixed top-0 left-0 right-0 text-white bg-slate-800 h-[64px] shadow-lg"},l.createElement("div",{className:"w-[700px] mx-auto flex items-center h-[64px]"},"florin",l.createElement("b",null,"toader")))}var o=n(5323);function c(e){const{post:t,location:n}=e;return console.log("POST",n.href+t.frontmatter.image),console.log("frontmatter",t.frontmatter),l.createElement(l.Fragment,null,l.createElement("title",null,t.frontmatter.title),l.createElement("meta",{name:"image",content:n.href+t.frontmatter.image}),l.createElement("meta",{name:"og:image:secure_url",content:n.href+t.frontmatter.image}))}function i(e){var t;const{data:n,location:i}=e,m=n.markdownRemark,s=(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title";return console.log("site",n,i),l.createElement(r.Z,{location:i,title:s},l.createElement(a,null),l.createElement(c,{post:m,location:i}),l.createElement("article",{className:"w-[700px] mx-auto pt-[150px]",itemScope:!0,style:{marginTop:"100px",marginBottom:"20px"}},l.createElement("header",null,l.createElement("h1",{itemProp:"headline"},m.frontmatter.title),l.createElement("p",null,l.createElement("i",null,m.frontmatter.date))),l.createElement("section",{dangerouslySetInnerHTML:{__html:m.html},itemProp:"articleBody"})),l.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-20dc16bfafa1d286b77c.js.map