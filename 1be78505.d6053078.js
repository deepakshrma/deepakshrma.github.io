(window.webpackJsonp=window.webpackJsonp||[]).push([[8,47],{103:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(118),c=n(110),i=n(25),l=n(119),u=n(2),s=n(6),m=n(106),p=n(212),d=n(215),f=n(216),h=n(217),y=n(214),b=n(113),g=n(178),v=n(66),j=n.n(v);var O=function e(t,n){return"link"===t.type?(r=t.href,a=n,(o=function(e){return e.endsWith("/")?e:e+"/"})(r)===o(a)):"category"===t.type&&t.items.some((function(t){return e(t,n)}));var r,a,o};function k(e){var t,n,o,c=e.item,i=e.onItemClick,l=e.collapsible,p=e.activePath,d=Object(s.a)(e,["item","onItemClick","collapsible","activePath"]),f=c.items,h=c.label,y=O(c,p),b=(n=y,o=Object(r.useRef)(n),Object(r.useEffect)((function(){o.current=n}),[n]),o.current),g=Object(r.useState)((function(){return!!l&&(!y&&c.collapsed)})),v=g[0],k=g[1];Object(r.useEffect)((function(){y&&!b&&v&&k(!1)}),[y,b,v]);var E=Object(r.useCallback)((function(e){e.preventDefault(),k((function(e){return!e}))}),[k]);return 0===f.length?null:a.a.createElement("li",{className:Object(m.default)("menu__list-item",{"menu__list-item--collapsed":v}),key:h},a.a.createElement("a",Object(u.a)({className:Object(m.default)("menu__link",(t={"menu__link--sublist":l,"menu__link--active":l&&y},t[j.a.menuLinkText]=!l,t)),onClick:l?E:void 0,href:l?"#!":void 0},d),h),a.a.createElement("ul",{className:"menu__list"},f.map((function(e){return a.a.createElement(x,{tabIndex:v?"-1":"0",key:e.label,item:e,onItemClick:i,collapsible:l,activePath:p})}))))}function E(e){var t=e.item,n=e.onItemClick,r=e.activePath,o=(e.collapsible,Object(s.a)(e,["item","onItemClick","activePath","collapsible"])),c=t.href,i=t.label,l=O(t,r);return a.a.createElement("li",{className:"menu__list-item",key:i},a.a.createElement(b.a,Object(u.a)({className:Object(m.default)("menu__link",{"menu__link--active":l}),to:c},Object(g.a)(c)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"},o),i))}function x(e){switch(e.item.type){case"category":return a.a.createElement(k,e);case"link":default:return a.a.createElement(E,e)}}var _=function(e){var t,n,o=e.path,i=e.sidebar,l=e.sidebarCollapsible,s=void 0===l||l,g=Object(r.useState)(!1),v=g[0],O=g[1],k=Object(c.a)(),E=k.siteConfig,_=(E=void 0===E?{}:E).themeConfig,w=(_=void 0===_?{}:_).navbar,C=(w=void 0===w?{}:w).title,N=void 0===C?"":C,P=w.hideOnScroll,S=void 0!==P&&P,T=k.isClient,L=Object(h.a)(),I=L.logoLink,D=L.logoLinkProps,M=L.logoImageUrl,B=L.logoAlt,A=Object(p.a)().isAnnouncementBarClosed,R=Object(y.a)().scrollY;Object(d.a)(v);var F=Object(f.a)();return Object(r.useEffect)((function(){F===f.b.desktop&&O(!1)}),[F]),a.a.createElement("div",{className:Object(m.default)(j.a.sidebar,(t={},t[j.a.sidebarWithHideableNavbar]=S,t))},S&&a.a.createElement(b.a,Object(u.a)({tabIndex:"-1",className:j.a.sidebarLogo,to:I},D),null!=M&&a.a.createElement("img",{key:T,src:M,alt:B}),null!=N&&a.a.createElement("strong",null,N)),a.a.createElement("div",{className:Object(m.default)("menu","menu--responsive",j.a.menu,(n={"menu--show":v},n[j.a.menuWithAnnouncementBar]=!A&&0===R,n))},a.a.createElement("button",{"aria-label":v?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){O(!v)}},v?a.a.createElement("span",{className:Object(m.default)(j.a.sidebarMenuIcon,j.a.sidebarMenuCloseIcon)},"\xd7"):a.a.createElement("svg",{"aria-label":"Menu",className:j.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},a.a.createElement("title",null,"Menu"),a.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),a.a.createElement("ul",{className:"menu__list"},i.map((function(e){return a.a.createElement(x,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),O(!1)},collapsible:s,activePath:o})})))))},w=n(155),C=n(209),N=n(124),P=n(67),S=n.n(P);function T(e){var t,n,r=e.currentDocRoute,i=e.docsMetadata,u=e.children,s=Object(c.a)(),m=s.siteConfig,p=s.isClient,d=i.permalinkToSidebar,f=i.docsSidebars,h=i.version,y=f[d[r.path]];return a.a.createElement(l.a,{version:h,key:p},a.a.createElement("div",{className:S.a.docPage},y&&a.a.createElement("div",{className:S.a.docSidebarContainer,role:"complementary"},a.a.createElement(_,{sidebar:y,path:r.path,sidebarCollapsible:null===(t=null===(n=m.themeConfig)||void 0===n?void 0:n.sidebarCollapsible)||void 0===t||t})),a.a.createElement("main",{className:S.a.docMainContainer},a.a.createElement(o.a,{components:w.a},u))))}t.default=function(e){var t=e.route.routes,n=e.docsMetadata,r=e.location,o=t.find((function(e){return Object(N.matchPath)(r.pathname,e)}));return o?a.a.createElement(T,{currentDocRoute:o,docsMetadata:n},Object(i.a)(t)):a.a.createElement(C.default,e)}},115:function(e,t,n){"use strict";n.d(t,"e",(function(){return L})),n.d(t,"g",(function(){return I})),n.d(t,"o",(function(){return D})),n.d(t,"n",(function(){return M})),n.d(t,"a",(function(){return B})),n.d(t,"l",(function(){return A})),n.d(t,"j",(function(){return R})),n.d(t,"k",(function(){return F})),n.d(t,"c",(function(){return W})),n.d(t,"h",(function(){return $})),n.d(t,"b",(function(){return U})),n.d(t,"i",(function(){return z})),n.d(t,"m",(function(){return H})),n.d(t,"f",(function(){return Y})),n.d(t,"d",(function(){return q}));var r=n(134),a=n(122),o="2560px",c={mobileS:"(min-width: "+"320px"+")",mobileM:"(min-width: "+"375px"+")",mobileL:"(min-width: "+"425px"+")",tablet:"(min-width: "+"768px"+")",laptop:"(min-width: "+"1024px"+")",laptopL:"(min-width: "+"1440px"+")",desktop:"(min-width: "+o+")",desktopL:"(min-width: "+o+")"};function i(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 800px;\n  * {\n    margin-bottom: 10px;\n  }\n"]);return i=function(){return e},e}function l(){var e=Object(r.a)([""]);return l=function(){return e},e}function u(){var e=Object(r.a)(["\n  padding: 20px 40px;\n"]);return u=function(){return e},e}function s(){var e=Object(r.a)([""]);return s=function(){return e},e}function m(){var e=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  > div {\n    /* width: 80%; */\n    margin: 0 auto;\n    text-align: center;\n    margin-top: 20px;\n    width: 100%;\n    @media "," {\n      padding: 20px 30px;\n    }\n    padding: 10px;\n  }\n"]);return m=function(){return e},e}function p(){var e=Object(r.a)(["\n  color: var(--ifm-color-primary-light);\n  text-align: center;\n"]);return p=function(){return e},e}function d(){var e=Object(r.a)(["\n  display: flex;\n"]);return d=function(){return e},e}function f(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n"]);return f=function(){return e},e}function h(){var e=Object(r.a)(["\n  padding: 20px;\n"]);return h=function(){return e},e}function y(){var e=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n"]);return y=function(){return e},e}function b(){var e=Object(r.a)(["\n  p, h1, h2, h3, h4, h5, h6 {\n    margin: 0;\n    padding: 0;\n  }\n"]);return b=function(){return e},e}function g(){var e=Object(r.a)(["\n  height: ",";\n"]);return g=function(){return e},e}function v(){var e=Object(r.a)(["\n  height: 1px;\n  background: ",";\n  margin: "," 0 "," 0;\n"]);return v=function(){return e},e}function j(){var e=Object(r.a)(["\n  padding: 10px 20px;\n  background: ",";\n  min-height: 100vh;\n"]);return j=function(){return e},e}function O(){var e=Object(r.a)(["\n  border: 1px solid ",";\n  background: ",";\n  height: 40px;\n  min-width: 100px;\n  color: ",";\n  cursor: pointer;\n  font-weight: 600;\n  border-radius: ",";\n  outline: none;\n  box-shadow: none;\n  font-size: 20px;\n"]);return O=function(){return e},e}function k(){var e=Object(r.a)([""]);return k=function(){return e},e}function E(){var e=Object(r.a)(["\n  color: ",";\n  list-style: square;\n"]);return E=function(){return e},e}function x(){var e=Object(r.a)(["\n  color: ",";\n  font-weight: 600;\n"]);return x=function(){return e},e}function _(){var e=Object(r.a)(["\n  color: ",";\n"]);return _=function(){return e},e}function w(){var e=Object(r.a)(["\n  color: ",";\n"]);return w=function(){return e},e}function C(){var e=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  padding: 20px;\n  h1,\n  h2,\n  h3,\n  h4 {\n    text-align: center;\n  }\n  button,\n  a {\n    align-self: center;\n    width: 300px;\n  }\n"]);return C=function(){return e},e}function N(){var e=Object(r.a)(["\n  padding: 20px;\n  @media "," {\n    width: 60%;\n    margin: 0 auto;\n    max-width: 800px;\n  }\n"]);return N=function(){return e},e}function P(){var e=Object(r.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  padding: 2rem;\n  flex-wrap: wrap;\n"]);return P=function(){return e},e}function S(){var e=Object(r.a)(["\n  display: flex;\n  justify-content: space-evenly;\n"]);return S=function(){return e},e}var T=function(e){return function(t){return t.theme[e]}},L=(a.c.div(S()),a.c.section(P()),a.c.div(N(),c.laptopL)),I=a.c.div(C()),D=(a.c.p(w(),(function(e){return e.theme.color_primary})),a.c.h2(_(),(function(e){return e.theme.color_primary}))),M=a.c.h4(x(),(function(e){return e.theme.color_primary})),B=(a.c.ul(E(),(function(e){return e.theme.color_primary_darker})),a.c.h3(k()),a.c.button(O(),T("color_primary_darker"),T("bg_color"),T("color_primary"),T("margin_sm"))),A=(a.c.div(j(),T("bg_color")),a.c.div(v(),T("color_primary"),T("margin_sm"),T("margin_md")),a.c.div(g(),T("margin_lg")),Object(a.b)(b()),a.c.div(y())),R=a.c.div(h()),F=a.c.div(f()),W=a.c.span(d()),$=a.c.a(p()),U=a.c.div(m(),c.laptopL),z=a.c.main(s()),H=a.c.section(u()),Y=a.c.h2(l()),q=a.c.form(i())},118:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?a.a.createElement(f,i(i({ref:t},u),{},{components:n})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},119:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(114),c=n(110),i=n(111),l=n(141),u=n(140),s=n(131),m=n(139),p=n(133),d=n(122),f=(n(48),n(120));function h(e){var t=e.children;return a.a.createElement(l.a,null,a.a.createElement(u.a,null,t))}t.a=function(e){var t=Object(c.a)().siteConfig,n=void 0===t?{}:t,l=n.favicon,u=n.title,y=n.themeConfig.image,b=n.url,g=e.children,v=e.title,j=e.noFooter,O=e.description,k=e.image,E=e.keywords,x=e.permalink,_=e.version,w=e.theme,C=void 0===w?Object(f.a)():w,N=v?v+" | "+u:u,P=k||y,S=Object(i.a)(P,{absolute:!0}),T=Object(i.a)(l),L=Object(r.useState)(C),I=L[0],D=L[1];return Object(r.useEffect)((function(){setTimeout((function(){return D(C)}),100)}),[C]),a.a.createElement(h,null,a.a.createElement(o.a,null,a.a.createElement("html",{lang:"en"}),N&&a.a.createElement("title",null,N),N&&a.a.createElement("meta",{property:"og:title",content:N}),l&&a.a.createElement("link",{rel:"shortcut icon",href:T}),O&&a.a.createElement("meta",{name:"description",content:O}),O&&a.a.createElement("meta",{property:"og:description",content:O}),_&&a.a.createElement("meta",{name:"docsearch:version",content:_}),E&&E.length&&a.a.createElement("meta",{name:"keywords",content:E.join(",")}),P&&a.a.createElement("meta",{property:"og:image",content:S}),P&&a.a.createElement("meta",{property:"twitter:image",content:S}),P&&a.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+N}),x&&a.a.createElement("meta",{property:"og:url",content:b+x}),x&&a.a.createElement("link",{rel:"canonical",href:b+x}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),a.a.createElement(s.a,null),a.a.createElement(m.a,null),a.a.createElement(d.a,{theme:I},a.a.createElement("div",{className:"main-wrapper"},g)),!j&&a.a.createElement(p.a,null))}},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));var r=n(267),a=n(121),o=function(e){return e||(e={base:a.b[Number(1)][Number(0)]}),{margin_md:"8px",margin_sm:"4px",margin_lg:"12px",bg_color:"#fff",bg_color_invert:"#000",color_primary:e.base[500],color_primary_dark:e.base[600],color_primary_darker:e.base[700],color_primary_darkest:e.base[800],color_primary_light:e.base[400],color_primary_lighter:e.base[300],color_primary_lightest:e.base[200]}},c=function(e){document.documentElement.style.setProperty("--ifm-color-primary",e.color_primary),document.documentElement.style.setProperty("--ifm-color-primary-dark",e.color_primary_dark),document.documentElement.style.setProperty("--ifm-color-primary-darker",e.color_primary_darker),document.documentElement.style.setProperty("--ifm-color-primary-darkest",e.color_primary_darkest),document.documentElement.style.setProperty("--ifm-color-primary-light",e.color_primary_light),document.documentElement.style.setProperty("--ifm-color-primary-lighter",e.color_primary_lighter),document.documentElement.style.setProperty("--ifm-color-primary-lightest",e.color_primary_lightest)};r.a[500],r.a[600],r.a[700],r.a[800],r.a[400],r.a[300],r.a[200]},121:function(e,t,n){"use strict";n.d(t,"b",(function(){return E})),n.d(t,"a",(function(){return _}));var r=n(0),a=n.n(r),o=n(265),c=n(266),i=n(328),l=n(329),u=n(267),s=n(268),m=n(330),p=n(331),d=n(332),f=n(269),h=n(333),y=n(334),b=n(335),g=n(270),v=n(336),j=n(337),O=n(346),k=n(115),E=[[o.a,c.a,i.a,l.a],[u.a,s.a,m.a,p.a],[d.a,f.a,h.a,y.a],[b.a,g.a,v.a,j.a]],x=[["red","pink","purple","deepPurple"],["indigo","blue","lightBlue","cyan"],["teal","green","lightGreen","lime"],["yellow","orange","amber","deepOrange"]],_=function(e){var t=e.onThemeToggle;return a.a.createElement(k.j,null,a.a.createElement(k.k,null,E.map((function(e,n){return a.a.createElement(k.l,{key:"rowNum_"+n},e.map((function(e,r){return a.a.createElement(O.a,{title:x[n][r],"aria-label":x[n][r],key:"colNum_"+r},a.a.createElement(k.c,{onClick:function(){return t(e,""+n+r)},style:{background:e[500],width:40,height:40}}))})))})),a.a.createElement(k.h,null,"Pick a Theme")))}},132:function(e,t,n){"use strict";var r=n(2),a=n(0),o=n.n(a),c=n(20),i=n(110),l=n(124),u=n(111),s=n(113),m=n(114),p=n(128),d=n(327),f=n(347),h=null;function y(e){var t=e.hit,n=e.children,r=(e.pathname,t.url.match(/\/30-seconds/)||t.url.match(/\/deno-by-example/));return o.a.createElement(s.a,{to:t.url,target:r&&"_blank"},n)}function b(e){var t=e.state,n=e.onClose,r=Object(p.a)().generateSearchPageLink;return o.a.createElement(s.a,{to:r(t.query),onClick:n},"See all ",t.context.nbHits," results")}function g(e){var t=Object(i.a)().siteMetadata,s=Object(u.b)().withBaseUrl,p=Object(l.useHistory)(),g=Object(a.useRef)(null),v=Object(a.useState)(!1),j=v[0],O=v[1],k=Object(a.useState)(null),E=k[0],x=k[1],_=Object(a.useCallback)((function(){return h?Promise.resolve():Promise.all([n.e(48).then(n.bind(null,138)),Promise.all([n.e(0),n.e(49)]).then(n.bind(null,137)),n.e(0).then(n.t.bind(null,49,7))]).then((function(e){var t=e[0].DocSearchModal;h=t}))}),[]),w=Object(a.useCallback)((function(){_().then((function(){O(!0)}))}),[_,O]),C=Object(a.useCallback)((function(){O(!1)}),[O]),N=Object(a.useCallback)((function(e){_().then((function(){O(!0),x(e.key)}))}),[_,O,x]);return Object(d.a)({isOpen:j,onOpen:w,onClose:C,onInput:N,searchButtonRef:g}),o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,null,o.a.createElement("link",{rel:"preconnect",href:"https://"+e.appId+"-dsn.algolia.net",crossOrigin:!0})),o.a.createElement(f.a,{onTouchStart:_,onFocus:_,onMouseOver:_,onClick:w,ref:g}),j&&Object(c.createPortal)(o.a.createElement(h,Object(r.a)({onClose:C,initialScrollY:window.scrollY,initialQuery:E,navigator:{navigate:function(e){var t=e.suggestionUrl;p.push(t)}},transformItems:function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{pathname:t.pathname,url:s(""+t.pathname+t.hash)})}))},hitComponent:y,resultsFooterComponent:function(e){return o.a.createElement(b,Object(r.a)({},e,{onClose:C}))},transformSearchClient:function(e){return e.addAlgoliaAgent("docusaurus",t.docusaurusVersion),e}},e)),document.body))}t.a=function(){var e=Object(i.a)().siteConfig;return o.a.createElement(g,e.themeConfig.algolia)}},152:function(e,t,n){"use strict";const r=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let o=!1;a.rangeCount>0&&(o=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch(i){}return n.remove(),o&&(a.removeAllRanges(),a.addRange(o)),r&&r.focus(),c};e.exports=r,e.exports.default=r},153:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],r=t[2],a=t[3];if(n&&a){var o=[],c=(n=parseInt(n))<(a=parseInt(a))?1:-1;"-"!=r&&".."!=r&&"\u2025"!=r||(a+=c);for(var i=n;i!=a;i+=c)o.push(i);return o}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},155:function(e,t,n){"use strict";var r=n(2),a=n(0),o=n.n(a),c=n(113),i=n(106),l={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},u={Prism:n(21).a,theme:l};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},f=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},h=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=m({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=m({},n,{backgroundColor:null}),a};function y(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var b=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?h(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=m({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(o.style=c.plain),void 0!==a&&(o.style=void 0!==o.style?m({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),s(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var c=r?{display:"inline-block"}:{},i=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[c].concat(i))}})),s(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,c=m({},y(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(c.style=void 0!==c.style?m({},c.style,a):a),void 0!==n&&(c.key=n),r&&(c.className+=" "+r),c}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),c=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,c=0,i=[],l=[i];c>-1;){for(;(o=r[c]++)<a[c];){var u=void 0,s=t[c],m=n[c][o];if("string"==typeof m?(s=c>0?s:["plain"],u=m):(s=f(s,m.type),m.alias&&(s=f(s,m.alias)),u=m.content),"string"==typeof u){var h=u.split(p),y=h.length;i.push({types:s,content:h[0]});for(var b=1;b<y;b++)d(i),l.push(i=[]),i.push({types:s,content:h[b]})}else c++,t.push(s),n.push(u),r.push(0),a.push(u.length)}c--,t.pop(),n.pop(),r.pop(),a.pop()}return d(i),l}(void 0!==c?t.tokenize(r,c,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),g=n(152),v=n.n(g),j=n(153),O=n.n(j),k=n(110),E={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},x=n(158),_=function(){var e=Object(k.a)().siteConfig.themeConfig.prism,t=void 0===e?{}:e,n=Object(x.a)().isDarkTheme,r=t.theme||E,a=t.darkTheme||r;return n?a:r},w=n(50),C=n.n(w),N=/{([\d,-]+)}/,P=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")},S=/title=".*"/,T=function(e){var t=e.children,n=e.className,c=e.metastring,l=Object(k.a)().siteConfig.themeConfig.prism,s=void 0===l?{}:l,m=Object(a.useState)(!1),p=m[0],d=m[1],f=Object(a.useState)(!1),h=f[0],y=f[1];Object(a.useEffect)((function(){y(!0)}),[]);var g=Object(a.useRef)(null),j=[],E="",x=_();if(c&&N.test(c)){var w=c.match(N)[1];j=O.a.parse(w).filter((function(e){return e>0}))}c&&S.test(c)&&(E=c.match(S)[0].split("title=")[1].replace(/"+/g,""));var T=n&&n.replace(/language-/,"");!T&&s.defaultLanguage&&(T=s.defaultLanguage);var L=t.replace(/\n$/,"");if(0===j.length&&void 0!==T){for(var I,D="",M=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return P(["js","jsBlock"]);case"jsx":case"tsx":return P(["js","jsBlock","jsx"]);case"html":return P(["js","jsBlock","html"]);case"python":case"py":return P(["python"]);default:return P()}}(T),B=t.replace(/\n$/,"").split("\n"),A=0;A<B.length;){var R=A+1,F=B[A].match(M);if(null!==F){switch(F.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":D+=R+",";break;case"highlight-start":I=R;break;case"highlight-end":D+=I+"-"+(R-1)+","}B.splice(A,1)}else A+=1}j=O.a.parse(D),L=B.join("\n")}var W=function(){v()(L),d(!0),setTimeout((function(){return d(!1)}),2e3)};return o.a.createElement(b,Object(r.a)({},u,{key:String(h),theme:x,code:L,language:T}),(function(e){var t,n,a=e.className,c=e.style,l=e.tokens,u=e.getLineProps,s=e.getTokenProps;return o.a.createElement(o.a.Fragment,null,E&&o.a.createElement("div",{style:c,className:C.a.codeBlockTitle},E),o.a.createElement("div",{className:C.a.codeBlockContent},o.a.createElement("button",{ref:g,type:"button","aria-label":"Copy code to clipboard",className:Object(i.default)(C.a.copyButton,(t={},t[C.a.copyButtonWithTitle]=E,t)),onClick:W},p?"Copied":"Copy"),o.a.createElement("div",{tabIndex:0,className:Object(i.default)(a,C.a.codeBlock,(n={},n[C.a.codeBlockWithTitle]=E,n))},o.a.createElement("div",{className:C.a.codeBlockLines,style:c},l.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=u({line:e,key:t});return j.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(r.a)({key:t},n),e.map((function(e,t){return o.a.createElement("span",Object(r.a)({key:t},s({token:e,key:t})))})))}))))))}))},L=n(6),I=(n(51),n(52)),D=n.n(I),M=function(e){return function(t){var n,r=t.id,a=Object(L.a)(t,["id"]),c=Object(k.a)().siteConfig,l=(c=void 0===c?{}:c).themeConfig,u=(l=void 0===l?{}:l).navbar,s=(u=void 0===u?{}:u).hideOnScroll,m=void 0!==s&&s;return r?o.a.createElement(e,a,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(i.default)("anchor",(n={},n[D.a.enhancedAnchor]=!m,n)),id:r}),a.children,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:"hash-link",href:"#"+r,title:"Direct link to heading"},"#")):o.a.createElement(e,a)}},B=n(53),A=n.n(B);t.a={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?o.a.createElement(T,e):o.a.createElement("code",e):t},a:function(e){return o.a.createElement(c.a,e)},pre:function(e){return o.a.createElement("div",Object(r.a)({className:A.a.mdxCodeBlock},e))},h1:M("h1"),h2:M("h2"),h3:M("h3"),h4:M("h4"),h5:M("h5"),h6:M("h6")}},209:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(119);t.default=function(){return a.a.createElement(o.a,{title:"Page Not Found"},a.a.createElement("div",{className:"container margin-vert--xl"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col col--6 col--offset-3"},a.a.createElement("h1",{className:"hero__title"},"Page Not Found"),a.a.createElement("p",null,"We could not find what you were looking for."),a.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);