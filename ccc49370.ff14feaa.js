(window.webpackJsonp=window.webpackJsonp||[]).push([[40,9],{101:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(111),m=a(183),o=a(115);var i=function(e){const{nextItem:t,prevItem:a}=e;return n.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog post page navigation"},n.a.createElement("div",{className:"pagination-nav__item"},a&&n.a.createElement(o.a,{className:"pagination-nav__link",to:a.permalink},n.a.createElement("div",{className:"pagination-nav__sublabel"},"Newer Post"),n.a.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.a.createElement(o.a,{className:"pagination-nav__link",to:t.permalink},n.a.createElement("div",{className:"pagination-nav__sublabel"},"Older Post"),n.a.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))};t.default=function(e){const{content:t}=e,{frontMatter:a,metadata:r}=t,{title:o,description:c,nextItem:s,prevItem:p,editUrl:d}=r;return n.a.createElement(l.a,{title:o,description:c},t&&n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--8 col--offset-2"},n.a.createElement(m.a,{frontMatter:a,metadata:r,isBlogPostPage:!0},n.a.createElement(t,null)),n.a.createElement("div",null,d&&n.a.createElement("a",{href:d,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},n.a.createElement("g",null,n.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(s||p)&&n.a.createElement("div",{className:"margin-vert--xl"},n.a.createElement(i,{nextItem:s,prevItem:p}))))))}},110:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"d",(function(){return m})),a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return i}));var r=a(169),n=(a(0),a(107));const l=(e={base:r.a})=>({margin_md:"8px",margin_sm:"4px",margin_lg:"12px",bg_color:"#fff",bg_color_invert:"#000",color_primary:e.base[500],color_primary_dark:e.base[600],color_primary_darker:e.base[700],color_primary_darkest:e.base[800],color_primary_light:e.base[400],color_primary_lighter:e.base[300],color_primary_lightest:e.base[200]}),m=e=>{document.documentElement.style.setProperty("--ifm-color-primary",e.color_primary),document.documentElement.style.setProperty("--ifm-color-primary-dark",e.color_primary_dark),document.documentElement.style.setProperty("--ifm-color-primary-darker",e.color_primary_darker),document.documentElement.style.setProperty("--ifm-color-primary-darkest",e.color_primary_darkest),document.documentElement.style.setProperty("--ifm-color-primary-light",e.color_primary_light),document.documentElement.style.setProperty("--ifm-color-primary-lighter",e.color_primary_lighter),document.documentElement.style.setProperty("--ifm-color-primary-lightest",e.color_primary_lightest)},o=l(),i=e=>t=>t.theme[e];n.b`
  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
`;r.a},111:function(e,t,a){"use strict";var r=a(0),n=a.n(r),l=a(120),m=a(106),o=a(113),i=a(129),c=a(128),s=a(124),p=a(127),d=a(125),g=a(107),u=(a(48),a(110));function E({children:e}){return n.a.createElement(i.a,null,n.a.createElement(g.a,{theme:u.c},n.a.createElement(c.a,null,e)))}t.a=function(e){const{siteConfig:t={}}=Object(m.a)(),{favicon:a,title:r,themeConfig:{image:i},url:c}=t,{children:g,title:u,noFooter:_,description:y,image:v,keywords:f,permalink:h,version:b}=e,k=u?`${u} | ${r}`:r,w=v||i,N=Object(o.a)(w,{absolute:!0}),P=Object(o.a)(a);return n.a.createElement(E,null,n.a.createElement(l.a,null,n.a.createElement("html",{lang:"en"}),k&&n.a.createElement("title",null,k),k&&n.a.createElement("meta",{property:"og:title",content:k}),a&&n.a.createElement("link",{rel:"shortcut icon",href:P}),y&&n.a.createElement("meta",{name:"description",content:y}),y&&n.a.createElement("meta",{property:"og:description",content:y}),b&&n.a.createElement("meta",{name:"docsearch:version",content:b}),f&&f.length&&n.a.createElement("meta",{name:"keywords",content:f.join(",")}),w&&n.a.createElement("meta",{property:"og:image",content:N}),w&&n.a.createElement("meta",{property:"twitter:image",content:N}),w&&n.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+k}),h&&n.a.createElement("meta",{property:"og:url",content:c+h}),h&&n.a.createElement("link",{rel:"canonical",href:c+h}),n.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),n.a.createElement(s.a,null),n.a.createElement(p.a,null),n.a.createElement("div",{className:"main-wrapper"},g),!_&&n.a.createElement(d.a,null))}}}]);