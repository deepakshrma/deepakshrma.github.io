(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{103:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}r.r(t),t.default=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},112:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=p(r),s=n,d=f["".concat(i,".").concat(s)]||f[s]||b[s]||o;return r?a.a.createElement(d,c(c({ref:t},l),{},{components:r})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},169:function(e,t,r){"use strict";t.a={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe"}},208:function(e,t,r){"use strict";var n=r(2),a=r(0),o=r.n(a),i=(r(7),r(164)),c=r(284),u=r(165);t.a=function(e){var t=e.children,r=e.theme,a=Object(c.a)(),l=o.a.useMemo((function(){var e=null===a?r:function(e,t){return"function"==typeof t?t(e):Object(n.a)(Object(n.a)({},e),t)}(a,r);return null!=e&&(e[u.a]=null!==a),e}),[r,a]);return o.a.createElement(i.a.Provider,{value:l},t)}},86:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return d}));var n=r(2),a=r(6),o=(r(0),r(112)),i=r(285),c=r(266),u=r(208),l={id:"me",title:"Deepak Vishwakarma",disableHeaderTitle:null},p={unversionedId:"me",id:"me",isDocsHomePage:!1,title:"Deepak Vishwakarma",description:"const theme = createMuiTheme({",source:"@site/docs/me.mdx",permalink:"/docs/me"},f=Object(c.a)({overrides:{MuiButton:{text:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",borderRadius:3,border:0,color:"white",height:48,padding:"0 30px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)"}}},typography:{useNextVariants:!0}}),b=[],s={rightToc:b};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)(u.a,{theme:f,mdxType:"MuiThemeProvider"},Object(o.b)(i.a,{variant:"overline",display:"block",gutterBottom:!0,mdxType:"Typography"},"Programmer and Enthusiastic Tech lover")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Polyglot Programmer, Efficiently can work on UI/UX(Frontend), Backend and Mobile\napps")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Proficient in developing Web and Mobile Apps"),Object(o.b)("li",{parentName:"ul"},"Mobile: Android, Flutter, React Native, Little bit Swift"),Object(o.b)("li",{parentName:"ul"},"Frontend: Proficient in React, Angular, Typescript, Object-Oriented JavaScript, ES6 and above"),Object(o.b)("li",{parentName:"ul"},"Backend: Node Js, Java, SpringBoot, Go(Started recently)"),Object(o.b)("li",{parentName:"ul"},"DevOps: Having good enough knowledge work on DevOps tasks Jenkin(Groovy, bash scripting)"),Object(o.b)("li",{parentName:"ul"},"Test-Driven Development using jest, karma-jasmine, protractor, expresso")))}d.isMDXComponent=!0}}]);