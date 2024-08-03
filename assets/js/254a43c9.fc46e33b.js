"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[1758],{77934:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(74848),s=n(28453),i=n(3514);const o={title:"\u5f00\u59cb\u9636\u6bb5",slug:"/start",sidebar_position:3},a="\u5f00\u59cb\u9636\u6bb5",c={id:"start/start",title:"\u5f00\u59cb\u9636\u6bb5",description:"\u5728\u8fd9\u4e2a\u9636\u6bb5\uff0c\u6211\u4eec\u4e3b\u8981\u4e3a\u4f60\u4ecb\u7ecd\u670d\u52a1\u5668\u57fa\u7840\u77e5\u8bc6\uff0c\u5982\u4f55\u533a\u522b\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u3001\u5982\u4f55\u9009\u62e9\u670d\u52a1\u7aef\u3001\u5982\u4f55\u642d\u5efa\u5e76\u8fde\u63a5\u7b49\u3002",source:"@site/docs-java/start/start.md",sourceDirName:"start",slug:"/start",permalink:"/NitWikit/Java/start",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-java/start/start.md",tags:[],version:"current",lastUpdatedBy:"Minimouse48",lastUpdatedAt:1722699104e3,sidebarPosition:3,frontMatter:{title:"\u5f00\u59cb\u9636\u6bb5",slug:"/start",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u7b28\u86cb\u670d\u52a1",permalink:"/NitWikit/Java/services"},next:{title:"\u57fa\u7840\u77e5\u8bc6",permalink:"/NitWikit/Java/basic"}},l={},u=[];function d(t){const e={h1:"h1",p:"p",...(0,s.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"\u5f00\u59cb\u9636\u6bb5",children:"\u5f00\u59cb\u9636\u6bb5"}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u8fd9\u4e2a\u9636\u6bb5\uff0c\u6211\u4eec\u4e3b\u8981\u4e3a\u4f60\u4ecb\u7ecd\u670d\u52a1\u5668\u57fa\u7840\u77e5\u8bc6\uff0c\u5982\u4f55\u533a\u522b\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u3001\u5982\u4f55\u9009\u62e9\u670d\u52a1\u7aef\u3001\u5982\u4f55\u642d\u5efa\u5e76\u8fde\u63a5\u7b49\u3002"}),"\n","\n",(0,r.jsx)(i.A,{})]})}function m(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},3514:(t,e,n)=>{n.d(e,{A:()=>j});n(96540);var r=n(34164),s=n(84142),i=n(28774),o=n(53465),a=n(16654),c=n(21312),l=n(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(74848);function m(t){let{href:e,children:n}=t;return(0,d.jsx)(i.A,{href:e,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function p(t){let{href:e,icon:n,title:s,description:i}=t;return(0,d.jsxs)(m,{href:e,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:s,children:[n," ",s]}),i&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:i,children:i})]})}function h(t){let{item:e}=t;const n=(0,s.Nr)(e),r=function(){const{selectMessage:t}=(0,o.W)();return e=>t(e,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))}();return n?(0,d.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??r(e.items.length)}):null}function f(t){let{item:e}=t;const n=(0,a.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(e.docId??void 0);return(0,d.jsx)(p,{href:e.href,icon:n,title:e.label,description:e.description??r?.description})}function g(t){let{item:e}=t;switch(e.type){case"link":return(0,d.jsx)(f,{item:e});case"category":return(0,d.jsx)(h,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function x(t){let{className:e}=t;const n=(0,s.$S)();return(0,d.jsx)(j,{items:n.items,className:e})}function j(t){const{items:e,className:n}=t;if(!e)return(0,d.jsx)(x,{...t});const i=(0,s.d1)(e);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:i.map(((t,e)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:t})},e)))})}},53465:(t,e,n)=>{n.d(e,{W:()=>l});var r=n(96540),s=n(44586);const i=["zero","one","two","few","many","other"];function o(t){return i.filter((e=>t.includes(e)))}const a={locale:"en",pluralForms:o(["one","other"]),select:t=>1===t?"one":"other"};function c(){const{i18n:{currentLocale:t}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(t){const e=new Intl.PluralRules(t);return{locale:t,pluralForms:o(e.resolvedOptions().pluralCategories),select:t=>e.select(t)}}(t)}catch(e){return console.error(`Failed to use Intl.PluralRules for locale "${t}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${e.message}\n`),a}}),[t])}function l(){const t=c();return{selectMessage:(e,n)=>function(t,e,n){const r=t.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${t}`);const s=n.select(e),i=n.pluralForms.indexOf(s);return r[Math.min(i,r.length-1)]}(n,e,t)}}},28453:(t,e,n)=>{n.d(e,{R:()=>o,x:()=>a});var r=n(96540);const s={},i=r.createContext(s);function o(t){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:o(t.components),r.createElement(i.Provider,{value:e},t.children)}}}]);