"use strict";(self.webpackChunkdeepakshrma_github_io=self.webpackChunkdeepakshrma_github_io||[]).push([[237],{642:(e,t,a)=>{a.d(t,{L0:()=>B,ZJ:()=>C});var n=a(7294),r=a(1120),o=a(6010),l=a(8463),i=a(4697),c=a(951),s=a(9912),m=a(1907),d=a(6037),p=a(7265),u=a(7812),f=a(2318),b=a(907),h=a(6324),g=a(3093),E=a(4276),Z=a(4566),y=a(6594),w=a(9578),x=a(9699),k=a(9738),S=a(282);const v=(0,x.Z)(f.Z)({whiteSpace:"pre",overflow:"auto",display:"block"}),_=(0,r.Z)((e=>({root:{maxWidth:345,minWidth:345,marginBottom:20,[e.breakpoints.up("md")]:{marginRight:10},boxShadow:"0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:b.Z[500]}}))),C=e=>{let{items:t,flowable:a}=e,r={};return a&&(r={overflow:"auto",flexWrap:"nowrap",justifyContent:"flex-start"}),n.createElement("div",{className:w.Z.features,style:r},t.sort(((e,t)=>(e.createdAt=e.createdAt?new Date(e.createdAt):new Date,t.createdAt=t.createdAt?new Date(t.createdAt):new Date,t.createdAt.getTime()-e.createdAt.getTime()))).map(((e,t)=>n.createElement(A,{item:e,key:t,flowable:a}))))};function A(e){let{item:t,flowable:a}=e;const r=_(),[b,w]=n.useState(!1),x=t.tags||t.title.split(/\s+/).filter((e=>e.length>2)).join(","),k=t.imageUrl||t.media||`https://source.unsplash.com/1600x1200/?${x||"random"}`,S=t.body||t.description;return n.createElement(l.Z,{className:r.root,style:a?{marginRight:20,minWidth:300}:{},key:t.key},n.createElement(i.Z,{avatar:n.createElement(p.Z,{"aria-label":"recipe",className:r.avatar},t.title.charAt(0)),title:t.title,subheader:new Date(t.createdAt).toLocaleString("en-US"),action:n.createElement(u.Z,{"aria-label":"settings",onClick:()=>window.open(t.href,"_blank")},n.createElement(E.Z,null))}),n.createElement(c.Z,{className:r.media,image:k,title:t.title}),S&&n.createElement(s.Z,null,n.createElement(f.Z,{variant:"body2",color:"textSecondary",component:"p"},S.slice(0,140))),n.createElement(m.Z,{disableSpacing:!0},n.createElement(u.Z,{"aria-label":"add to favorites",onClick:()=>(0,y.Yo)(t.href)},n.createElement(h.Z,null)),n.createElement(u.Z,{"aria-label":"share",onClick:()=>(0,y.Yo)(t.href)},n.createElement(g.Z,null)),n.createElement(u.Z,{className:(0,o.Z)(r.expand,{[r.expandOpen]:b}),onClick:()=>{w(!b)},"aria-expanded":b,"aria-label":"show more"},S&&n.createElement(Z.Z,null))),S&&n.createElement(d.Z,{in:b,timeout:"auto",unmountOnExit:!0},n.createElement(s.Z,null,n.createElement(v,{variant:"caption"},S))))}const N=(0,r.Z)((e=>({root:{maxWidth:345,minHeight:345,marginBottom:10,boxShadow:"0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"},media:{height:180}})));function B(e){let{imageUrl:t,title:a,description:r,media:i=t,body:d=r,href:p}=e;const u=N();return n.createElement("a",{className:(0,o.Z)("col col--4",w.Z.feature),href:p,target:"_blank"},n.createElement(l.Z,{className:u.root},n.createElement(k.Z,null,n.createElement(c.Z,{className:u.media,image:i,title:a}),n.createElement(s.Z,null,n.createElement(f.Z,{gutterBottom:!0,variant:"h5",component:"h2"},a),n.createElement(f.Z,{variant:"body2",color:"textSecondary",component:"p"},d))),n.createElement(m.Z,null,n.createElement(S.Z,{size:"small",color:"primary",onClick:()=>(0,y.Yo)(p)},"Learn More"))))}},7031:(e,t,a)=>{a.d(t,{Z:()=>l,b:()=>o});var n=a(7294),r=a(5729);const o=e=>{const[t,a]=(0,n.useState)([]);return(0,n.useEffect)((()=>{firebase.database().ref(`${e}/`).on("value",(function(e){const t=e.val();t&&a((0,r.compact)(Object.values(t)))}),(function(e){console.log("The read failed: "+e.code)}))}),[]),t},l=()=>{(0,n.useEffect)((()=>{firebase.apps.length||firebase.initializeApp({apiKey:"AIzaSyBcPpDWoSwYTcB4jZjMygyFIKABBIlqINQ",authDomain:"decipher-db.firebaseapp.com",databaseURL:"https://decipher-db.firebaseio.com",projectId:"decipher-db",storageBucket:"decipher-db.appspot.com",messagingSenderId:"793000199384",appId:"1:793000199384:web:c767946ddeb9e0750b03ad",measurementId:"G-YVC97JL6V2"})}),[])}},9754:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var n=a(7462),r=a(4996),o=a(2263),l=a(7452),i=a(7294),c=a(642),s=a(3526),m=a(7031),d=a(6594),p=a(9578),u=a(6694);const f=function(){const e=(0,o.Z)(),{siteConfig:t={}}=e,[a,f]=i.useState([]),[b,h]=i.useState([]),[g,E]=i.useState([]),[Z,y]=i.useState((0,u.EC)());(0,m.Z)();const w=(0,m.b)("notes");return i.useEffect((()=>{(0,d.EJ)("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@deepak-v").then((e=>{E(e.items.filter((e=>e.categories.length)).map((e=>(e.imageUrl=e.thumbnail,e.href=e.guid,e.description=(e=>{const t=document.createElement("div");return t.innerHTML=e,t.textContent.split("\n").slice(0,10).join("\n")})(e.description),e.updateAt=new Date(...e.pubDate.split(/[- :]/g).map(Number)).toLocaleString("en-US"),e))))}))}),[]),i.useEffect((()=>{h(w.filter((e=>"feature"===e.type))),f(w.filter((e=>"poem"===e.type)))}),[w]),i.createElement(l.Z,{title:t.title,description:t.tagline,theme:Z},i.createElement(s.yo,null,i.createElement(s.DK,null,t.title),i.createElement(s.NZ,null,t.tagline),i.createElement(s.zx,{variant:"outlined",rel:"noreferrer noopener",color:"primary",href:(0,r.Z)("blog/")},"Learn More")),i.createElement("main",{className:p.Z.bgContent},i.createElement(s.DK,null,"Showcase"),i.createElement("section",{className:p.Z.features},b.map(((e,t)=>i.createElement(c.L0,(0,n.Z)({key:t},e))))),i.createElement("section",null,i.createElement(s.DK,null,"Medium Feeds"),i.createElement(c.ZJ,{items:g,flowable:!0})),i.createElement("section",null,i.createElement(s.DK,null,"Poems"),i.createElement(c.ZJ,{items:a,flowable:!0}))))}},6594:(e,t,a)=>{a.d(t,{EJ:()=>n,Yo:()=>r});const n=(e,t)=>t?fetch(e,{...t,headers:{"Content-Type":"application/json"},body:t.data?JSON.stringify(t.data):void 0}).then((e=>e.json())):fetch(e).then((e=>e.json())),r=e=>window.open(e,"_blank")},9578:(e,t,a)=>{a.d(t,{Z:()=>n});const n={heroBanner:"heroBanner_UJJx",buttons:"buttons_pzbO",features:"features_keug",featureImage:"featureImage_yA8i",container:"container_czXe",footer:"footer_SBgd",products:"products_Kl_t",poems:"poems_OAoF",poemsHeader:"poemsHeader_mgPO",pics:"pics_XQc7",productHeader:"productHeader_c71U",productBody:"productBody_SymH",bgContent:"bgContent_MYwr"}}}]);