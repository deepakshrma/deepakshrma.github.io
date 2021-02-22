(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{111:function(e,t,a){"use strict";a.d(t,"f",(function(){return i})),a.d(t,"n",(function(){return l})),a.d(t,"m",(function(){return c})),a.d(t,"a",(function(){return m})),a.d(t,"k",(function(){return d})),a.d(t,"i",(function(){return s})),a.d(t,"j",(function(){return u})),a.d(t,"c",(function(){return p})),a.d(t,"g",(function(){return f})),a.d(t,"b",(function(){return b})),a.d(t,"h",(function(){return g})),a.d(t,"l",(function(){return h})),a.d(t,"e",(function(){return y})),a.d(t,"d",(function(){return x}));var r=a(162);const n=`(min-width: ${"1440px"})`;const o=e=>t=>t.theme[e],i=(r.b.div`
  display: flex;
  justify-content: space-evenly;
`,r.b.section`
  display: flex;
  justify-content: space-evenly;
  padding: 2rem;
  flex-wrap: wrap;
`,r.b.div`
  padding: 20px;
  @media ${n} {
    width: 60%;
    margin: 0 auto;
    max-width: 800px;
  }
`,r.b.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  h1,
  h2,
  h3,
  h4 {
    text-align: center;
  }
  button,
  a {
    align-self: center;
    width: 300px;
  }
`),l=(r.b.p`
  color: ${e=>e.theme.color_primary};
`,r.b.h2`
  color: ${e=>e.theme.color_primary};
`),c=r.b.h4`
  color: ${e=>e.theme.color_primary};
  font-weight: 600;
`,m=(r.b.ul`
  color: ${e=>e.theme.color_primary_darker};
  list-style: square;
`,r.b.h3``,r.b.button`
  border: 1px solid ${o("color_primary_darker")};
  background: ${o("bg_color")};
  height: 40px;
  min-width: 100px;
  color: ${o("color_primary")};
  cursor: pointer;
  font-weight: 600;
  border-radius: ${o("margin_sm")};
  outline: none;
  box-shadow: none;
  font-size: 20px;
`),d=(r.b.div`
  padding: 10px 20px;
  background: ${o("bg_color")};
  min-height: 100vh;
`,r.b.div`
  height: 1px;
  background: ${o("color_primary")};
  margin: ${o("margin_sm")} 0 ${o("margin_md")} 0;
`,r.b.div`
  height: ${o("margin_lg")};
`,r.a`
  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
`,r.b.div`
  display: flex;
  justify-content: center;
`),s=r.b.div`
  padding: 20px;
`,u=r.b.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`,p=r.b.span`
  display: flex;
`,f=r.b.a`
  color: var(--ifm-color-primary-light);
  text-align: center;
`,b=r.b.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  > div {
    /* width: 80%; */
    margin: 0 auto;
    text-align: center;
    margin-top: 20px;
    width: 100%;
    @media ${n} {
      padding: 20px 30px;
    }
    padding: 10px;
  }
`,g=r.b.main``,h=r.b.section`
  padding: 20px 40px;
`,y=r.b.h2``,x=r.b.form`
  display: flex;
  flex-direction: column;
  width: 800px;
  * {
    margin-bottom: 10px;
  }
`},132:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n})),a.d(t,"c",(function(){return o}));const r=(e,t)=>t?fetch(e,{...t,headers:{"Content-Type":"application/json"},body:t.data?JSON.stringify(t.data):void 0}).then((e=>e.json())):fetch(e).then((e=>e.json())),n=e=>window.open(e,"_blank"),o=(e,t)=>{if("undefined"!=typeof window)return t?localStorage.setItem(e,t):localStorage.getItem(e)||""}},151:function(e,t,a){"use strict";a.d(t,"a",(function(){return P})),a.d(t,"b",(function(){return D}));var r=a(0),n=a.n(r),o=a(354),i=a(90),l=a(282),c=a(283),m=a(285),d=a(286),s=a(287),u=a(288),p=a(312),f=a(356),b=a(351),g=a(276),h=a(158),y=a.n(h),x=a(159),E=a.n(x),_=a(156),w=a.n(_),v=a(160),k=a.n(v),j=a(132),O=a(57),S=a.n(O),$=a(272),N=a(289),A=a(357);const C=Object($.a)(b.a)({whiteSpace:"pre",overflow:"auto",display:"block"}),T=Object(o.a)((e=>({root:{maxWidth:345,minWidth:345,marginBottom:20,[e.breakpoints.up("md")]:{marginRight:10},boxShadow:"0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:g.a[500]}}))),P=({items:e,flowable:t})=>{let a={};return t&&(a={overflow:"auto",flexWrap:"nowrap",justifyContent:"flex-start"}),n.a.createElement("div",{className:S.a.features,style:a},e.sort(((e,t)=>(e.createdAt=e.createdAt?new Date(e.createdAt):new Date,t.createdAt=t.createdAt?new Date(t.createdAt):new Date,t.createdAt.getTime()-e.createdAt.getTime()))).map(((e,a)=>n.a.createElement(I,{item:e,key:a,flowable:t}))))};function I({item:e,flowable:t}){const a=T(),[r,o]=n.a.useState(!1),g=e.tags||e.title.split(/\s+/).filter((e=>e.length>2)).join(","),h=e.imageUrl||e.media||`https://source.unsplash.com/1600x1200/?${g||"random"}`,x=e.body||e.description;return n.a.createElement(l.a,{className:a.root,style:t?{marginRight:20,minWidth:300}:{},key:e.key},n.a.createElement(c.a,{avatar:n.a.createElement(p.a,{"aria-label":"recipe",className:a.avatar},e.title.charAt(0)),title:e.title,subheader:new Date(e.createdAt).toLocaleString("en-US"),action:n.a.createElement(f.a,{"aria-label":"settings",onClick:()=>window.open(e.href,"_blank")},n.a.createElement(w.a,null))}),n.a.createElement(m.a,{className:a.media,image:h,title:e.title}),x&&n.a.createElement(d.a,null,n.a.createElement(b.a,{variant:"body2",color:"textSecondary",component:"p"},x.slice(0,140))),n.a.createElement(s.a,{disableSpacing:!0},n.a.createElement(f.a,{"aria-label":"add to favorites",onClick:()=>Object(j.a)(e.href)},n.a.createElement(y.a,null)),n.a.createElement(f.a,{"aria-label":"share",onClick:()=>Object(j.a)(e.href)},n.a.createElement(E.a,null)),n.a.createElement(f.a,{className:Object(i.a)(a.expand,{[a.expandOpen]:r}),onClick:()=>{o(!r)},"aria-expanded":r,"aria-label":"show more"},x&&n.a.createElement(k.a,null))),x&&n.a.createElement(u.a,{in:r,timeout:"auto",unmountOnExit:!0},n.a.createElement(d.a,null,n.a.createElement(C,{variant:"caption"},x))))}const B=Object(o.a)((e=>({root:{maxWidth:345,minHeight:345,marginBottom:10,boxShadow:"0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"},media:{height:180}})));function D({imageUrl:e,title:t,description:a,media:r=e,body:o=a,href:c}){const u=B();return n.a.createElement("a",{className:Object(i.a)("col col--4",S.a.feature),href:c,target:"_blank"},n.a.createElement(l.a,{className:u.root},n.a.createElement(N.a,null,n.a.createElement(m.a,{className:u.media,image:r,title:t}),n.a.createElement(d.a,null,n.a.createElement(b.a,{gutterBottom:!0,variant:"h5",component:"h2"},t),n.a.createElement(b.a,{variant:"body2",color:"textSecondary",component:"p"},o))),n.a.createElement(s.a,null,n.a.createElement(A.a,{size:"small",color:"primary",onClick:()=>Object(j.a)(c)},"Learn More"))))}},163:function(e,t,a){"use strict";a.d(t,"b",(function(){return o}));var r=a(0),n=a(164);const o=e=>{const[t,a]=Object(r.useState)([]);return Object(r.useEffect)((()=>{firebase.database().ref(`${e}/`).on("value",(function(e){const t=e.val();t&&a(Object(n.compact)(Object.values(t)))}),(function(e){console.log("The read failed: "+e.code)}))}),[]),t};t.a=()=>{Object(r.useEffect)((()=>{firebase.apps.length||firebase.initializeApp({apiKey:"AIzaSyBcPpDWoSwYTcB4jZjMygyFIKABBIlqINQ",authDomain:"decipher-db.firebaseapp.com",databaseURL:"https://decipher-db.firebaseio.com",projectId:"decipher-db",storageBucket:"decipher-db.appspot.com",messagingSenderId:"793000199384",appId:"1:793000199384:web:c767946ddeb9e0750b03ad",measurementId:"G-YVC97JL6V2"})}),[])}},88:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(311),o=a(100),i=a(22),l=a(107),c=a(0),m=a.n(c),d=(a(58),a(151)),s=a(276),u=a(275),p=a(358),f=a(359),b=a(274),g=a(278),h=a(360),y=a(361),x=a(362),E=a(279),_=a(363),w=a(364),v=a(365),k=a(277),j=a(366),O=a(367),S=a(379),$=a(111);const N=[[s.a,u.a,p.a,f.a],[b.a,g.a,h.a,y.a],[x.a,E.a,_.a,w.a],[v.a,k.a,j.a,O.a]],A=[["red","pink","purple","deepPurple"],["indigo","blue","lightBlue","cyan"],["teal","green","lightGreen","lime"],["yellow","orange","amber","deepOrange"]],C=({onThemeToggle:e})=>m.a.createElement($.i,null,m.a.createElement($.j,null,N.map(((t,a)=>m.a.createElement($.k,{key:`rowNum_${a}`},t.map(((t,r)=>m.a.createElement(S.a,{title:A[a][r],"aria-label":A[a][r],key:`colNum_${r}`},m.a.createElement($.c,{onClick:()=>e(t,`${a}${r}`),style:{background:t[500],width:40,height:40}}))))))),m.a.createElement($.g,null,"Pick a Theme")));var T=a(163),P=a(132),I=a(57),B=a.n(I);const D=e=>{const[t,a]=[1,0];return e||(e={base:N[Number(t)][Number(a)]}),{margin_md:"8px",margin_sm:"4px",margin_lg:"12px",bg_color:"#fff",bg_color_invert:"#000",color_primary:e.base[500],color_primary_dark:e.base[600],color_primary_darker:e.base[700],color_primary_darkest:e.base[800],color_primary_light:e.base[400],color_primary_lighter:e.base[300],color_primary_lightest:e.base[200]}};b.a[500],b.a[600],b.a[700],b.a[800],b.a[400],b.a[300],b.a[200];t.default=function(){var e=Object(i.default)().siteConfig,t=void 0===e?{}:e,a=m.a.useState([]),c=a[0],s=a[1],u=m.a.useState([]),p=u[0],f=u[1],b=m.a.useState([]),g=b[0],h=b[1],y=m.a.useState(D()),x=y[0],E=y[1];Object(T.a)();var _=Object(T.b)("notes");return m.a.useEffect((function(){Object(P.b)("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@deepak-v").then((function(e){h(e.items.filter((function(e){return e.categories.length})).map((function(e){var t,a;return e.imageUrl=e.thumbnail,e.href=e.guid,e.description=(t=e.description,(a=document.createElement("div")).innerHTML=t,a.textContent.split("\n").slice(0,10).join("\n")),e.updateAt=Object(n.a)(Date,e.pubDate.split(/[- :]/g).map(Number)).toLocaleString("en-US"),e})))}))}),[]),m.a.useEffect((function(){f(_.filter((function(e){return"feature"===e.type}))),s(_.filter((function(e){return"poem"===e.type})))}),[_]),m.a.createElement(l.a,{title:t.title,description:t.tagline,theme:x},m.a.createElement($.f,null,m.a.createElement($.n,null,t.title),m.a.createElement($.m,null,t.tagline),m.a.createElement($.a,{variant:"outlined",rel:"noreferrer noopener",color:"primary",href:Object(o.a)("blog/")},"Learn More"),m.a.createElement(C,{onThemeToggle:function(e,t){Object(P.c)("theme-name",t),E(D({base:e})),(e=>{document.documentElement.style.setProperty("--ifm-color-primary",e.color_primary),document.documentElement.style.setProperty("--ifm-color-primary-dark",e.color_primary_dark),document.documentElement.style.setProperty("--ifm-color-primary-darker",e.color_primary_darker),document.documentElement.style.setProperty("--ifm-color-primary-darkest",e.color_primary_darkest),document.documentElement.style.setProperty("--ifm-color-primary-light",e.color_primary_light),document.documentElement.style.setProperty("--ifm-color-primary-lighter",e.color_primary_lighter),document.documentElement.style.setProperty("--ifm-color-primary-lightest",e.color_primary_lightest)})(D({base:e}))}})),m.a.createElement("main",{className:B.a.bgContent},m.a.createElement($.n,null,"Showcase"),m.a.createElement("section",{className:B.a.features},p.map((function(e,t){return m.a.createElement(d.b,Object(r.a)({key:t},e))}))),m.a.createElement("section",null,m.a.createElement($.n,null,"Medium Feeds"),m.a.createElement(d.a,{items:g,flowable:!0})),m.a.createElement("section",null,m.a.createElement($.n,null,"Poems"),m.a.createElement(d.a,{items:c,flowable:!0}))))}}}]);