(window.webpackJsonp=window.webpackJsonp||[]).push([[41,9],{110:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"d",(function(){return l})),r.d(t,"c",(function(){return c})),r.d(t,"b",(function(){return i}));var a=r(169),n=(r(0),r(107));const o=(e={base:a.a})=>({margin_md:"8px",margin_sm:"4px",margin_lg:"12px",bg_color:"#fff",bg_color_invert:"#000",color_primary:e.base[500],color_primary_dark:e.base[600],color_primary_darker:e.base[700],color_primary_darkest:e.base[800],color_primary_light:e.base[400],color_primary_lighter:e.base[300],color_primary_lightest:e.base[200]}),l=e=>{document.documentElement.style.setProperty("--ifm-color-primary",e.color_primary),document.documentElement.style.setProperty("--ifm-color-primary-dark",e.color_primary_dark),document.documentElement.style.setProperty("--ifm-color-primary-darker",e.color_primary_darker),document.documentElement.style.setProperty("--ifm-color-primary-darkest",e.color_primary_darkest),document.documentElement.style.setProperty("--ifm-color-primary-light",e.color_primary_light),document.documentElement.style.setProperty("--ifm-color-primary-lighter",e.color_primary_lighter),document.documentElement.style.setProperty("--ifm-color-primary-lightest",e.color_primary_lightest)},c=o(),i=e=>t=>t.theme[e];n.b`
  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
`;a.a},111:function(e,t,r){"use strict";var a=r(0),n=r.n(a),o=r(120),l=r(106),c=r(113),i=r(129),m=r(128),u=r(124),s=r(127),p=r(125),d=r(107),y=(r(48),r(110));function g({children:e}){return n.a.createElement(i.a,null,n.a.createElement(d.a,{theme:y.c},n.a.createElement(m.a,null,e)))}t.a=function(e){const{siteConfig:t={}}=Object(l.a)(),{favicon:r,title:a,themeConfig:{image:i},url:m}=t,{children:d,title:y,noFooter:h,description:E,image:f,keywords:_,permalink:b,version:k}=e,v=y?`${y} | ${a}`:a,w=f||i,j=Object(c.a)(w,{absolute:!0}),x=Object(c.a)(r);return n.a.createElement(g,null,n.a.createElement(o.a,null,n.a.createElement("html",{lang:"en"}),v&&n.a.createElement("title",null,v),v&&n.a.createElement("meta",{property:"og:title",content:v}),r&&n.a.createElement("link",{rel:"shortcut icon",href:x}),E&&n.a.createElement("meta",{name:"description",content:E}),E&&n.a.createElement("meta",{property:"og:description",content:E}),k&&n.a.createElement("meta",{name:"docsearch:version",content:k}),_&&_.length&&n.a.createElement("meta",{name:"keywords",content:_.join(",")}),w&&n.a.createElement("meta",{property:"og:image",content:j}),w&&n.a.createElement("meta",{property:"twitter:image",content:j}),w&&n.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+v}),b&&n.a.createElement("meta",{property:"og:url",content:m+b}),b&&n.a.createElement("link",{rel:"canonical",href:m+b}),n.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),n.a.createElement(u.a,null),n.a.createElement(s.a,null),n.a.createElement("div",{className:"main-wrapper"},d),!h&&n.a.createElement(p.a,null))}},208:function(e,t,r){"use strict";var a=r(2),n=r(0),o=r.n(n),l=(r(7),r(164)),c=r(284),i=r(165);t.a=function(e){var t=e.children,r=e.theme,n=Object(c.a)(),m=o.a.useMemo((function(){var e=null===n?r:function(e,t){return"function"==typeof t?t(e):Object(a.a)(Object(a.a)({},e),t)}(n,r);return null!=e&&(e[i.a]=null!==n),e}),[r,n]);return o.a.createElement(l.a.Provider,{value:m},t)}},93:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(103),l=r(111),c=(r(115),r(106)),i=(r(113),r(49)),m=r.n(i),u=r(285),s=r(266),p=r(208),d=Object(s.a)({overrides:{MuiButton:{text:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",borderRadius:3,border:0,color:"white",height:48,padding:"0 30px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)"}}},typography:{useNextVariants:!0}});t.default=function(){var e=Object(c.a)().siteConfig,t=void 0===e?{}:e;return n.a.createElement(p.a,{theme:d},n.a.createElement(l.a,{title:"About "+t.title,description:""+t.tagline},n.a.createElement("header",{className:Object(o.default)("hero hero--primary",m.a.heroBanner)},n.a.createElement(u.a,{variant:"overline",display:"block",gutterBottom:!0},t.tagline)),n.a.createElement("main",null)))}}}]);