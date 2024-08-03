"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[6739],{88834:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>a});var r=i(74848),s=i(28453);const t={title:"\u6ce8\u610f\u4e8b\u9879",sidebar_position:8},c="\u6ce8\u610f\u4e8b\u9879",o={id:"advance/cross-server/precautions",title:"\u6ce8\u610f\u4e8b\u9879",description:"\u4e0d\u8981\u4e0d\u8981\u4e0d\u8981\u7ed9\u5b50\u670d\u5f00\u516c\u7f51!!!\u4f60\u7684\u73a9\u5bb6\u53ea\u8981\u9760\u8de8\u670d\u7aef\u5c31\u53ef\u4ee5\u53bb\u5230\u5b50\u670d\uff0c\u5982\u679c\u4f60\u8111\u5b50\u6709\u95ee\u9898\u975e\u8981\u7ed9\u5b50\u670d\u5f00\u516c\u7f51......\u8fd9\u5c06\u4f1a\u5bfc\u81f4\u5f88\u591a\u95ee\u9898\uff0c\u6bd4\u5982\u7ed5\u8fc7\u767b\u5f55\u670d\u968f\u4fbf\u767b\u5f55\u522b\u4eba\u8d26\u53f7\uff0c\u7a83\u53d6 OP \u8d26\u53f7\u6743\u9650\u7b49\u4e25\u91cd\u65f6\u53ef\u80fd\u4f1a\u76f4\u63a5\u5bfc\u81f4\u670d\u52a1\u5668\u88ab\u63d0\u6743\u6216\u540e\u95e8\u7b49\u3002",source:"@site/docs-java/advance/cross-server/precautions.md",sourceDirName:"advance/cross-server",slug:"/advance/cross-server/precautions",permalink:"/NitWikit/Java/advance/cross-server/precautions",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-java/advance/cross-server/precautions.md",tags:[],version:"current",lastUpdatedBy:"Minimouse48",lastUpdatedAt:1722699104e3,sidebarPosition:8,frontMatter:{title:"\u6ce8\u610f\u4e8b\u9879",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"\u9690\u85cf\u771f\u5b9eIP",permalink:"/NitWikit/Java/advance/cross-server/hide-the-real-IP"},next:{title:"Folia",permalink:"/NitWikit/Java/advance/folia"}},d={},a=[{value:"\u4e0d\u8981\u7ed9\u73a9\u5bb6 <code>/server</code> \u6743\u9650",id:"\u4e0d\u8981\u7ed9\u73a9\u5bb6-server-\u6743\u9650",level:2},{value:"bc \u7684\u8bed\u4e49\u6269\u5927",id:"bc-\u7684\u8bed\u4e49\u6269\u5927",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsx)(n.admonition,{title:"\u975e\u5e38\u5371\u9669",type:"danger",children:(0,r.jsx)(n.p,{children:"\u4e0d\u8981\u4e0d\u8981\u4e0d\u8981\u7ed9\u5b50\u670d\u5f00\u516c\u7f51!!!\u4f60\u7684\u73a9\u5bb6\u53ea\u8981\u9760\u8de8\u670d\u7aef\u5c31\u53ef\u4ee5\u53bb\u5230\u5b50\u670d\uff0c\u5982\u679c\u4f60\u8111\u5b50\u6709\u95ee\u9898\u975e\u8981\u7ed9\u5b50\u670d\u5f00\u516c\u7f51......\u8fd9\u5c06\u4f1a\u5bfc\u81f4\u5f88\u591a\u95ee\u9898\uff0c\u6bd4\u5982\u7ed5\u8fc7\u767b\u5f55\u670d\u968f\u4fbf\u767b\u5f55\u522b\u4eba\u8d26\u53f7\uff0c\u7a83\u53d6 OP \u8d26\u53f7\u6743\u9650\u7b49\u4e25\u91cd\u65f6\u53ef\u80fd\u4f1a\u76f4\u63a5\u5bfc\u81f4\u670d\u52a1\u5668\u88ab\u63d0\u6743\u6216\u540e\u95e8\u7b49\u3002"})}),"\n",(0,r.jsxs)(n.h2,{id:"\u4e0d\u8981\u7ed9\u73a9\u5bb6-server-\u6743\u9650",children:["\u4e0d\u8981\u7ed9\u73a9\u5bb6 ",(0,r.jsx)(n.code,{children:"/server"})," \u6743\u9650"]}),"\n",(0,r.jsxs)(n.p,{children:["\u7528 ",(0,r.jsx)(n.code,{children:"\u83dc\u5355/npc"})," \u6216\u5176\u4ed6\u4e1c\u897f\u8de8\u670d\uff0c\u4f46\u662f\u4e0d\u8981\u7ed9\u73a9\u5bb6\u8fd9\u4e2a\u6743\u9650\uff08\u73a9\u5bb6\u9ed8\u8ba4\u6709\uff09\uff0c\u4f1a\u88ab\u73a9\u5bb6\u53d1\u73b0\u670d\u4e3b\u7684\u5c0f \u2642 \u79d8 \u2642 \u5bc6 \u2642"]}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u4e2a\u6743\u9650\u9ed8\u8ba4\u662f\u9ad8\u4e8e Bukkit \u63d2\u4ef6\u6743\u9650\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\u73a9\u5bb6\u53ef\u4ee5\u5728\u672a\u767b\u5f55\u4e4b\u524d\u4f7f\u7528\u6b64\u547d\u4ee4\u8df3\u8f6c\u5230\u53e6\u5916\u4e00\u4e2a\u670d\u52a1\u5668\uff0c\u5982\u679c\u53e6\u5916\u7684\u670d\u52a1\u5668\u6ca1\u767b\u9646\u63d2\u4ef6\uff0c\u90a3\u4e48\u901a\u8fc7\u6b64\u65b9\u6cd5\u5c31\u53ef\u4ee5\u4f7f\u7528\u5230 OP \u8d26\u53f7"}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.p,{children:"\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f AutheMe \u767b\u5f55\u63d2\u4ef6\uff0c\u8bf7\u52a1\u5fc5\u5728\u4ee3\u7406\u7aef\u5b89\u88c5\u5bf9\u5e94\u7684 AuthMe \u63d2\u4ef6\uff0c\u5982 AuthMe-Velocity\u3001AuthMeBungee \u7b49\u63d2\u4ef6"}),(0,r.jsx)(n.p,{children:"\u8fd9\u6837\u5c31\u53ef\u4ee5\u907f\u514d\u4e00\u4e9b\u6b64\u7c7b\u95ee\u9898\u4e86"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u5173\u95ed\u6743\u9650"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u8de8\u670d\u7aef\u5b89\u88c5 ",(0,r.jsx)(n.a,{href:"/NitWikit/Java/permission",children:"Luckperms"})," \u7684\u8de8\u670d\u7aef\u5bf9\u5e94\u7248\u672c\u7136\u540e\u6267\u884c\u547d\u4ee4\uff1a"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"BungeeCord"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"/lpb group default permission set bungeecord.command.server false\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Velocity"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"/lpv group default permission set velocity.* false\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u81ea\u5df1\u642d\u4e86\u4e2a vc \u7136\u540e\u6743\u9650\u8282\u70b9\u6ca1\u6709\u8865\u5168\uff0c\u4f60\u628a\u6743\u9650\u5168 ",(0,r.jsx)(n.code,{children:"false"})," \u4e86\u7b97\u4e86\uff0c\u53cd\u6b63\u73a9\u5bb6\u4e5f\u7528\u4e0d\u5230"]}),"\n",(0,r.jsx)(n.h2,{id:"bc-\u7684\u8bed\u4e49\u6269\u5927",children:"bc \u7684\u8bed\u4e49\u6269\u5927"}),"\n",(0,r.jsx)(n.p,{children:"bc \u8fd9\u4e2a\u7f29\u5199\u5e94\u53ea\u6307 BungeeCord \u6838\u5fc3"}),"\n",(0,r.jsx)(n.p,{children:"\u4f46\u662f\u5f88\u591a\u4eba\u7528 bc \u6307 BungeeCord \u548c\u5b83\u7684\u5206\u652f\uff0c\u751a\u81f3\u6307\u6240\u6709\u7684\u8de8\u670d\u7aef\uff08\u628a Velocity \u548c\u5305\u62ec\u8fdb\u53bb\u4e86\uff09"}),"\n",(0,r.jsx)(n.p,{children:"\u5e0c\u671b\u5728\u770b\u7684\u4f60\u7528 bc \u8fd9\u4e2a\u7f29\u5199\u65f6\u53ea\u7528\u6765\u6307 BungeeCord \u6838\u5fc3\uff0c\u907f\u514d\u4ea7\u751f\u4e0d\u5fc5\u8981\u7684\u8bef\u4f1a"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["\u670d\u52a1\u7aef\u6709\u4e2a\u547d\u4ee4\u662f ",(0,r.jsx)(n.code,{children:"/bc"})," \uff0c\u7528\u6765\u53d1\u516c\u544a\u7684\uff0c\u8fd9\u548c\u6b64\u5904\u7684 BungeeCord \u6ca1\u6709\u5173\u7cfb"]})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>o});var r=i(96540);const s={},t=r.createContext(s);function c(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);