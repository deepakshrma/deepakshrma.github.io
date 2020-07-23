(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{110:function(e,t,a){"use strict";a.r(t),a.d(t,"device",(function(){return b}));var n=a(2),l=a(0),s=a.n(l),r=a(142),o=a(146),i=a(141),c=a(140),m=a(144),p=a(94),d=a.n(p),u=a(206),h=a(198),g=a.n(h);a(111);const f="2560px",b={mobileS:`(min-width: ${"320px"})`,mobileM:`(min-width: ${"375px"})`,mobileL:`(min-width: ${"425px"})`,tablet:`(min-width: ${"768px"})`,laptop:`(min-width: ${"1024px"})`,laptopL:`(min-width: ${"1440px"})`,desktop:`(min-width: ${f})`,desktopL:`(min-width: ${f})`},E=[{original:"https://source.unsplash.com/1600x1200/?light,imagination"},{original:"https://source.unsplash.com/1600x1200/?innovation,fire"},{original:"https://source.unsplash.com/1600x1200/?colors,nature"},{original:"https://source.unsplash.com/user/deepak_v/1600x1200"},{original:"https://source.unsplash.com/1600x1200/?water,life.kids"},{original:"https://source.unsplash.com/1600x1200/?people,portrait,bubble"}],x=u.a.div`
  padding: 20px;
  @media ${b.laptop} { 
    width: 60%';
    margin: 0 auto;
    max-width: 800px;
  }
`,w=(u.a.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`,u.a.a`
  width: 30%;
  text-decoration: none;
  margin-right: 20px;
  img {
    width: 100%;
    object-fit: cover;
  }
  @media only screen and (max-width: 1281px) {
    width: 100%;
    padding: 20px;
    margin-right: 0px;
  }
`,[{title:s.a.createElement(s.a.Fragment,null,"Deno by Examples"),imageUrl:"https://decipher.dev/deno-by-example/img/home_page_dino.jpg",description:s.a.createElement(s.a.Fragment,null,"Tutorial: Learn Web Programming in Deno by Examples"),href:"/deno-by-example/"},{title:s.a.createElement(s.a.Fragment,null,"30 Seconds of Typescript"),imageUrl:"https://raw.githubusercontent.com/deepakshrma/30-seconds-of-typescript/master/assets/icon_128x128.png",description:s.a.createElement(s.a.Fragment,null,"Utility library,code snippets like lodash for typescript, typescriptreact(tsx) and deno [inspired by 30-seconds-of-code]."),href:"/30-seconds-of-typescript/"},{title:s.a.createElement(s.a.Fragment,null,"Googles Codelabs- Clone"),imageUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAATXAJzZEtpMKWPkkfbpfdkBBsKlxsa5KsXr471zBg%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1",description:s.a.createElement(s.a.Fragment,null,"Go Lang claat tool replica written in node js, using marked parser"),href:"/googles-codelabs/"}]);function k({imageUrl:e,title:t,description:a,href:n}){const l=Object(m.a)(e);return s.a.createElement("a",{className:Object(r.default)("col col--4",d.a.feature),href:n,target:"_blank"},s.a.createElement("div",null,l&&s.a.createElement("div",{className:"text--center"},s.a.createElement("img",{className:d.a.featureImage,src:l,alt:t})),s.a.createElement("h3",null,t),s.a.createElement("p",null,a)))}t.default=function(){const e=Object(c.a)(),{siteConfig:t={}}=e,[a,l]=s.a.useState([]);return s.a.useEffect(()=>{fetch("https://raw.githubusercontent.com/deepakshrma/json_data/master/poems.json").then(e=>e.json()).then(l)},[]),s.a.createElement(o.a,{title:t.title,description:t.tagline},s.a.createElement("header",{className:Object(r.default)(d.a.heroBanner)},s.a.createElement("div",{className:"container "+d.a.container},s.a.createElement("h1",{className:"hero__title"},t.title),s.a.createElement("p",{className:"hero__subtitle"},t.tagline),s.a.createElement("div",{className:d.a.buttons},s.a.createElement(i.a,{className:Object(r.default)("button button--outline button--secondary button--lg",d.a.getStarted),to:Object(m.a)("blog/")},"Get Started")))),s.a.createElement("main",null,w&&w.length>0&&s.a.createElement("section",{className:d.a.features},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},w.map((e,t)=>s.a.createElement(k,Object(n.a)({key:t},e)))))),s.a.createElement("section",null,s.a.createElement("p",{className:d.a.poemsHeader},"Random Photos"),s.a.createElement(x,null,s.a.createElement(g.a,{items:E,autoPlay:!0,showThumbnails:!1,onClick:()=>window.open("https://unsplash.com/@deepak_v","_blank")}))),s.a.createElement("p",{className:d.a.poemsHeader},"Poems"),s.a.createElement("section",{className:d.a.poems},s.a.createElement("div",{className:d.a.products},a.map((e,t)=>s.a.createElement("a",{href:e.href,target:"_blank"},s.a.createElement("div",{className:d.a.product,key:"poem_"+t},s.a.createElement("h4",{className:d.a.productHeader},e.title),s.a.createElement("pre",{className:d.a.productBody},e.body))))))))}}}]);