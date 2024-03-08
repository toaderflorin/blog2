"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{4811:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,r=!1,a=!1;for(let n=0;n<e.length;n++){const i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,a=r,r=!0,n++):r&&a&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),a=r,r=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,a=r,r=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r;var r};e.exports=t,e.exports.default=t},3723:function(e,t,r){r.d(t,{G:function(){return $},L:function(){return p},M:function(){return b},P:function(){return E},_:function(){return l},a:function(){return s},b:function(){return c},g:function(){return d},h:function(){return o}});var a=r(7294),n=(r(4811),r(5697)),i=r.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t.indexOf(r=i[a])>=0||(n[r]=e[r]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,r,a,n){return void 0===n&&(n={}),s({},r,{loading:a,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function d(e,t,r,a,n,i,l,o){const c={};i&&(c.backgroundColor=i,"fixed"===r?(c.width=a,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const u=["children"],m=function(e){let{layout:t,width:r,height:n}=e;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/r*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:r,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg height='${n}' width='${r}' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,r=l(e,u);return a.createElement(a.Fragment,null,a.createElement(m,s({},r)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:r,loading:n,alt:i="",shouldLoad:o}=e,c=l(e,g);return a.createElement("img",s({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?r:void 0,"data-srcset":o?void 0:r,alt:i}))},y=function(e){let{fallback:t,sources:r=[],shouldLoad:n=!0}=e,i=l(e,h);const o=i.sizes||(null==t?void 0:t.sizes),c=a.createElement(f,s({},i,t,{sizes:o,shouldLoad:n}));return r.length?a.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:i}=e;return a.createElement("source",{key:`${t}-${i}-${r}`,type:i,media:t,srcSet:n?r:void 0,"data-srcset":n?void 0:r,sizes:o})})),c):c};var v;f.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,r=l(e,w);return t?a.createElement(y,s({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",s({},r))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(v=y.propTypes)?void 0:v.sources,alt:function(e,t,r){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${r}\`. Validation failed.`):null}};const b=function(e){return a.createElement(a.Fragment,null,a.createElement(y,s({},e)),a.createElement("noscript",null,a.createElement(y,s({},e,{shouldLoad:!0}))))};b.displayName="MainImage",b.propTypes=y.propTypes;const x=function(e,t,r){for(var a=arguments.length,n=new Array(a>3?a-3:0),s=3;s<a;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,r].concat(n)):new Error(`The "alt" prop is required in ${r}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},_={image:i().object.isRequired,alt:x},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],k=["style","className"],C=new Set;let N,S;const T=function(e){let{as:t="div",image:n,style:i,backgroundColor:c,className:d,class:u,onStartLoad:m,onLoad:p,onError:g}=e,h=l(e,L);const{width:f,height:y,layout:v}=n,w=function(e,t,r){const a={};let n="gatsby-image-wrapper";return"fixed"===r?(a.width=e,a.height=t):"constrained"===r&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:a}}(f,y,v),{style:E,className:b}=w,x=l(w,k),_=(0,a.useRef)(),T=(0,a.useMemo)((()=>JSON.stringify(n.images)),[n.images]);u&&(d=u);const $=function(e,t,r){let a="";return"fullWidth"===e&&(a=`<div aria-hidden="true" style="padding-top: ${r/t*100}%;"></div>`),"constrained"===e&&(a=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height='${r}' width='${t}' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),a}(v,f,y);return(0,a.useEffect)((()=>{N||(N=Promise.all([r.e(774),r.e(223)]).then(r.bind(r,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return S=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=_.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==m||m({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void C.add(T);if(S&&C.has(T))return;let t,a;return N.then((e=>{let{renderImageToString:r,swapPlaceholderImage:l}=e;_.current&&(_.current.innerHTML=r(s({isLoading:!0,isLoaded:C.has(T),image:n},h)),C.has(T)||(t=requestAnimationFrame((()=>{_.current&&(a=l(_.current,T,C,i,m,p,g))}))))})),()=>{t&&cancelAnimationFrame(t),a&&a()}}),[n]),(0,a.useLayoutEffect)((()=>{C.has(T)&&S&&(_.current.innerHTML=S(s({isLoading:C.has(T),isLoaded:C.has(T),image:n},h)),null==m||m({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,a.createElement)(t,s({},x,{style:s({},E,i,{backgroundColor:c}),className:`${b}${d?` ${d}`:""}`,ref:_,dangerouslySetInnerHTML:{__html:$},suppressHydrationWarning:!0}))},$=(0,a.memo)((function(e){return e.image?(0,a.createElement)(T,e):null}));$.propTypes=_,$.displayName="GatsbyImage";const I=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],O=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(a)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},z=new Set(["fixed","fullWidth","constrained"]),q={src:i().string.isRequired,alt:x,width:O,height:O,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!z.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}},R=(A=$,function(e){let{src:t,__imageData:r,__error:n}=e,i=l(e,I);return n&&console.warn(n),r?a.createElement(A,s({image:r},i)):(console.warn("Image not loaded",t),null)});var A;R.displayName="StaticImage",R.propTypes=q},5323:function(e,t,r){r.d(t,{Z:function(){return n}});var a=r(7294);function n(){function e(){const e=window.scrollY,t=window.visualViewport?window.visualViewport.height:0,r=e/(document.documentElement.scrollHeight-t)*100,a=document.getElementById("scroller");a&&a.style&&(a.style.width=r+"%")}function t(){window.removeEventListener("scroll",e)}return(0,a.useEffect)((()=>(window.addEventListener("scroll",e),t)),[]),a.createElement("div",{id:"scroller",className:"fixed h-[3px] left-0 top-0 bg-[color:var(--color-primary)]"})}},3589:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var a=r(7294),n=r(1082);function i(e){const{post:t,position:r}=e,i=t.frontmatter.title||t.fields.slug;const s=[2,1,1,1,1,1,2][r%7];return a.createElement(a.Fragment,null,a.createElement("article",{key:t.fields.slug,className:`cursor-pointer p-5 shadow-[0_5px_30px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_5px_30px_-15px_rgba(0,0,0,0.7)] hover:text-black duration-300 rounded span-${s}`,onClick:()=>{return e=t.fields.slug,void(0,n.navigate)(e);var e}},a.createElement("section",{className:"mt-3 relative h-[215px]",style:{overflow:"hidden"}},a.createElement("header",null,a.createElement("span",{className:"text-xl"},i),a.createElement("div",null,t.frontmatter.date)),a.createElement("div",{className:"overflow-hidden w-[100%] mt-[10px]"},a.createElement("img",{src:`${t.fields.slug}/${t.frontmatter.icon}`,className:"article-icon"}),t.frontmatter.description,a.createElement("div",{style:{position:"absolute",left:0,right:0,bottom:0,height:80,background:"linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 150))"}}))),a.createElement("p",{className:"text-[color:var(--color-primary)] text-sm"},"Read more...")))}function s(e){const{posts:t}=e;return a.createElement("div",{className:"relative bg-white pt-10 z-0 pb-[20px] shadow-[0_0_30px_0_rgba(0,0,0,0.5) margin",style:{boxShadow:"0 0 30px 0 rgba(0, 0, 0, 0.5)"}},a.createElement("div",{className:"mx-auto container"},a.createElement("div",{className:"pt-4"},a.createElement("div",{className:"text-gray-400  flex flex-col gap-1"},a.createElement("div",{className:"text-right"},a.createElement("i",null,"“The only thing a Big Bang rewrite guarantees is a Big Bang!”")),a.createElement("div",{className:"text-right"},a.createElement("b",null,"Martin Fowler"))),a.createElement("div",{style:{fontSize:"35px",lineHeight:"2"}},"Blog"),a.createElement("div",{className:"cards"},t.map(((e,t)=>a.createElement(i,{post:e,position:t,key:t})))))))}var l=r(5323);function o(){return a.createElement("div",{className:"mx-auto flex flex-col items-center justify-center text-slate-100 rounded relative scr-2 shadow-[0_5px_30px_-15px_rgba(0,0,0,1)] hero"},a.createElement("div",{className:"shadow-[0_0_5px_0_rgba(0,0,0,1) inner"}),a.createElement("div",{className:"bar"},a.createElement("a",{href:"https://www.linkedin.com/in/florin-toader/"},a.createElement("img",{src:"/img/in2.png",className:"w-[24px]"}))),a.createElement("div",{className:"flex flex-col items-center"},a.createElement("div",{style:{fontSize:"34px"}},"Florin Toader"),a.createElement("div",{className:"text-slate-400 text-center"},"Don't look at technology options until you understand the problem. ",a.createElement("br",null)," Be practical, don't be dogmatic.")))}var c=r(3723);function d(e){let{data:t}=e;const r=t.allMarkdownRemark.nodes;function n(){const e=window.scrollY,t=(e<500?e:500)/500,r=1+.3*t,a=document.getElementById("back12");a&&a.style&&(a.style.transform=`scale(${r})`,a.style.opacity=1-t)}return(0,a.useEffect)((()=>{window.addEventListener("scroll",n)}),[]),a.createElement("div",null,a.createElement("div",{id:"back12",style:{height:"550px",position:"fixed",overflow:"clip",zIndex:0,top:0}},a.createElement(c.G,{src:"/img/p1.webp"})),a.createElement(s,{posts:r}),a.createElement("div",{style:{left:0,right:0,top:0,position:"absolute",zIndex:1e3}},a.createElement(o,null)),a.createElement(l.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-94ade38c21ced01b24f9.js.map