"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[226],{67725:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(74848),s=r(28453),i=r(3514);const o={title:"\u642d\u5efa",slug:"/build",sidebar_position:1},c="\u642d\u5efa\u4ee3\u7406\u670d",l={id:"process/cross-server/build-up/build-up",title:"\u642d\u5efa",description:"\u5e38\u89c1\u7684\u4ee3\u7406\u670d\u5206\u4e3a\u4ee5\u4e0b\u4e24\u79cd\uff1a",source:"@site/docs/process/cross-server/build-up/build-up.md",sourceDirName:"process/cross-server/build-up",slug:"/build",permalink:"/NitWikit/build",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs/process/cross-server/build-up/build-up.md",tags:[],version:"current",lastUpdatedBy:"Radiation_pi",lastUpdatedAt:1719224334e3,sidebarPosition:1,frontMatter:{title:"\u642d\u5efa",slug:"/build",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"GeyserMEG4\u652f\u6301",permalink:"/NitWikit/process/mobile-player/Geyser/Upgrade/GeyserMEG4-supports"},next:{title:"BungeeCord",permalink:"/NitWikit/bungeecord"}},a={},u=[];function d(e){const t={h1:"h1",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"\u642d\u5efa\u4ee3\u7406\u670d",children:"\u642d\u5efa\u4ee3\u7406\u670d"}),"\n",(0,n.jsx)(t.p,{children:"\u5e38\u89c1\u7684\u4ee3\u7406\u670d\u5206\u4e3a\u4ee5\u4e0b\u4e24\u79cd\uff1a"}),"\n","\n",(0,n.jsx)(i.A,{}),"\n",(0,n.jsx)(t.p,{children:"\u8bf7\u9009\u62e9\u5408\u9002\u4f60\u7684\u6838\u5fc3\u3002"})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},3514:(e,t,r)=>{r.d(t,{A:()=>b});r(96540);var n=r(34164),s=r(81754),i=r(28774),o=r(53465),c=r(16654),l=r(21312),a=r(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(74848);function p(e){let{href:t,children:r}=e;return(0,d.jsx)(i.A,{href:t,className:(0,n.A)("card padding--lg",u.cardContainer),children:r})}function m(e){let{href:t,icon:r,title:s,description:i}=e;return(0,d.jsxs)(p,{href:t,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,n.A)("text--truncate",u.cardTitle),title:s,children:[r," ",s]}),i&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",u.cardDescription),title:i,children:i})]})}function h(e){let{item:t}=e;const r=(0,s.Nr)(t),n=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,d.jsx)(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function f(e){let{item:t}=e;const r=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const r=(0,s.$S)();return(0,d.jsx)(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return(0,d.jsx)(x,{...e});const i=(0,s.d1)(t);return(0,d.jsx)("section",{className:(0,n.A)("row",r),children:i.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},53465:(e,t,r)=>{r.d(t,{W:()=>a});var n=r(96540),s=r(44586);const i=["zero","one","two","few","many","other"];function o(e){return i.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function a(){const e=l();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=r.select(t),i=r.pluralForms.indexOf(s);return n[Math.min(i,n.length-1)]}(r,t,e)}}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var n=r(96540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);