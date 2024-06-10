"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[8764],{6504:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var n=s(74848),o=s(28453);const t={title:"\u642d\u5efa",sidebar_position:2},d="\u642d\u5efa",i={id:"doc-start/process/cross-server/build-up/BungeeCord/build-up",title:"\u642d\u5efa",description:"\u4e0b\u8f7d",source:"@site/docs/doc-start/process/cross-server/build-up/BungeeCord/build-up.md",sourceDirName:"doc-start/process/cross-server/build-up/BungeeCord",slug:"/doc-start/process/cross-server/build-up/BungeeCord/build-up",permalink:"/NitWikit/doc-start/process/cross-server/build-up/BungeeCord/build-up",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs/doc-start/process/cross-server/build-up/BungeeCord/build-up.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u642d\u5efa",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u6982\u89c8",permalink:"/NitWikit/doc-start/process/cross-server/build-up/BungeeCord/overview"},next:{title:"config.yml",permalink:"/NitWikit/doc-start/process/cross-server/build-up/BungeeCord/config.yml"}},c={},l=[{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",level:2},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"config.yml",id:"configyml",level:3},{value:"\u5b50\u670dbc\u6a21\u5f0f",id:"\u5b50\u670dbc\u6a21\u5f0f",level:3},{value:"\u52a0\u5165",id:"\u52a0\u5165",level:2}];function a(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"\u642d\u5efa",children:"\u642d\u5efa"}),"\n",(0,n.jsx)(r.h2,{id:"\u4e0b\u8f7d",children:"\u4e0b\u8f7d"}),"\n",(0,n.jsxs)(r.p,{children:["\u524d\u5f80 ",(0,n.jsx)(r.a,{href:"/docs/process/cross-server/server-core-choose",children:"\u6838\u5fc3\u9009\u62e9"})]}),"\n",(0,n.jsxs)(r.p,{children:["1.7.10\u7528BungeeCord\u7684 ",(0,n.jsx)(r.a,{href:"https://ci.md-5.net/job/BungeeCord/1119/",children:"\u6784\u5efa1119"})]}),"\n",(0,n.jsx)(r.h2,{id:"\u542f\u52a8",children:"\u542f\u52a8"}),"\n",(0,n.jsx)(r.p,{children:"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6587\u4ef6\u5939\u5c06\u6838\u5fc3\u653e\u8fdb\u53bb"}),"\n",(0,n.jsx)(r.p,{children:"\u5e76\u4e14\u4f7f\u7528\u53c2\u6570\u542f\u52a8\u4ee5\u751f\u6210\u521d\u59cb\u6587\u4ef6"}),"\n",(0,n.jsxs)(r.p,{children:["\u5982\u679c\u60f3\u8fdb\u4e00\u6b65\u4f18\u5316\u53ef\u4ee5\u4f7f\u7528JVM\u53c2\u6570 ",(0,n.jsx)(r.a,{href:"https://docs.papermc.io/waterfall/getting-started#running-the-proxy",children:"Waterfall\u5b98\u65b9"}),"\u6709\u63a8\u8350\u7684flags"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"java -Xms1024M -Xmx1024M -jar \u6838\u5fc3\u540d\u5b57.jar\n"})}),"\n",(0,n.jsx)(r.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,n.jsx)(r.h3,{id:"configyml",children:"config.yml"}),"\n",(0,n.jsxs)(r.p,{children:["\u914d\u7f6eBungeeCord\u7aef\u6839\u76ee\u5f55\u4e2d\u7684 ",(0,n.jsx)(r.code,{children:"config.yml"})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/NitWikit/doc-start/process/cross-server/build-up/BungeeCord/config.yml",children:"\u8be6\u7ec6\u914d\u7f6e\u6587\u4ef6\u8bb2\u89e3"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"servers:\n  lobby:\n    motd: '&1Just another BungeeCord - Forced Host'\n    address: localhost:25565\n    restricted: false\n"})}),"\n",(0,n.jsx)(r.p,{children:"\u5176\u5b9e\u4e0d\u7528\u89e3\u91ca\u4f60\u4e5f\u770b\u5f97\u61c2\u5427"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"servers:\n  \u5b50\u670d\u540d\u79f0:\n    motd: '\u670d\u52a1\u5668\u6807\u8bed'\n    address: \u670d\u52a1\u5668\u5730\u5740:\u670d\u52a1\u5668\u7aef\u53e3\n    restricted: false\n"})}),"\n",(0,n.jsx)(r.p,{children:"\u7167\u7740\u628a\u4f60\u7684\u5b50\u670d\u90fd\u5199\u4e0a\u53bb\uff0c\u5c31\u50cf\u8fd9\u6837"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"servers:\n  login:\n    motd: '&1Just another BungeeCord - Forced Host'\n    address: localhost:25501\n    restricted: false\n  survival:\n    motd: '&1Just another BungeeCord - Forced Host'\n    address: localhost:25502\n    restricted: false\n  resource:\n    motd: '&1Just another BungeeCord - Forced Host'\n    address: localhost:25503\n    restricted: false\n"})}),"\n",(0,n.jsx)(r.h3,{id:"\u5b50\u670dbc\u6a21\u5f0f",children:"\u5b50\u670dbc\u6a21\u5f0f"}),"\n",(0,n.jsxs)(r.p,{children:["\u914d\u7f6e\u5b50\u670d\u7aef\u6839\u76ee\u5f55\u4e2d\u7684 ",(0,n.jsx)(r.code,{children:"spigot.yml"})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"  bungeecord: false\n"})}),"\n",(0,n.jsx)(r.p,{children:"\u628a\u8fd9\u4e2a\u6253\u5f00 \u5b83\u5728settings\u8282\u70b9\u4e0b"}),"\n",(0,n.jsx)(r.h2,{id:"\u52a0\u5165",children:"\u52a0\u5165"}),"\n",(0,n.jsxs)(r.p,{children:["\u89c1 ",(0,n.jsx)(r.a,{href:"/docs/process/cross-server/build-up/join-server.md",children:"\u52a0\u5165\u670d\u52a1\u5668"})]})]})}function u(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>d,x:()=>i});var n=s(96540);const o={},t=n.createContext(o);function d(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);