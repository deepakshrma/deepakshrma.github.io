(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{122:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return h}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),b=function(e){var r=a.a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=b(e.components);return a.a.createElement(i.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},u=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=b(t),u=n,h=p["".concat(c,".").concat(u)]||p[u]||m[u]||o;return t?a.a.createElement(h,s(s({ref:r},i),{},{components:t})):a.a.createElement(h,s({ref:r},i))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var i=2;i<o;i++)c[i]=t[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},85:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return s})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return b}));var n=t(2),a=t(6),o=(t(0),t(122)),c={id:"error-handling-simplified",title:"Error Handling | Simplified | Javascript",author:"Deepak Vishwakarma",author_title:"Front End Engineer",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=460",tags:["js","javascript","programming","error","handling","typescript"]},s={permalink:"/blog/error-handling-simplified",source:"@site/blog/2020-09-12-error-handling-simplified.md",description:"img1",date:"2020-09-12T00:00:00.000Z",tags:[{label:"js",permalink:"/blog/tags/js"},{label:"javascript",permalink:"/blog/tags/javascript"},{label:"programming",permalink:"/blog/tags/programming"},{label:"error",permalink:"/blog/tags/error"},{label:"handling",permalink:"/blog/tags/handling"},{label:"typescript",permalink:"/blog/tags/typescript"}],title:"Error Handling | Simplified | Javascript",readingTime:8.93,truncated:!1,nextItem:{title:"Security Vulnerability Solutions for Non-Tech People | In Simple Language",permalink:"/blog/security-for-non-tech"}},l=[{value:"Topics",id:"topics",children:[]},{value:"Types of\xa0Errors",id:"types-of-errors",children:[]},{value:"How to handle\xa0Error",id:"how-to-handle-error",children:[{value:"Synchronous",id:"synchronous",children:[]},{value:"Custom Error",id:"custom-error",children:[]},{value:"Advanced Error Handling",id:"advanced-error-handling",children:[]},{value:"Error Handling Coding Practices",id:"error-handling-coding-practices",children:[]}]}],i={rightToc:l};function b(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/1440/0*xe7Z_KiUCiwSNKDg",alt:"img1"}))),Object(o.b)("p",null,"Javascript is a dynamic language. This makes Javascript a supercool language. However, Same time it is very hard to write secure code. One small mistake can lead to a bigger issue. Error handling plays a vital role to reduce the number of bugs. If you handle error elegant way, it will save a lot of time in the future. So the bigger question is how you should handle the error."),Object(o.b)("p",null,"Let's take one example."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'const express = require("express");\nconst app = express();\napp.get("/", (_, res) => res.end("OK"));\napp.listen(80);\n')),Object(o.b)("p",null,"The above code is a sample code written in nodejs on an ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://expressjs.com/"}),"express")," framework. This code trying to run a server at port 80. What if we know that port 80 is already taken by some other app and we try to run the above code. How do we know what will happen? Will it run or break with some error? This is very unclear while seeing this code. Even you want to handle an error, you may have to read the documentation. But don\u2019t worry, just like any natural language. The programming language has some grammar. Even there is no standard specification in ECMA standard for Error handling. But the Javascript community follows certain coding guidelines."),Object(o.b)("h3",{id:"topics"},"Topics"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Types of Errors"),Object(o.b)("li",{parentName:"ol"},"How To Handle Errors",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Synchronous",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"try-catch"))),Object(o.b)("li",{parentName:"ol"},"Asynchronous",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"callback-error-data"),Object(o.b)("li",{parentName:"ol"},"promise-then-catch"),Object(o.b)("li",{parentName:"ol"},"try-catch-await"))))),Object(o.b)("li",{parentName:"ol"},"Custom Error"),Object(o.b)("li",{parentName:"ol"},"Advanced Error\xa0Handling",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Error handle with Loop"),Object(o.b)("li",{parentName:"ol"},"Multiple errors in try-catch"),Object(o.b)("li",{parentName:"ol"},"Multiple errors in promise-then-catch"))),Object(o.b)("li",{parentName:"ol"},"Error Handling Coding Practices")),Object(o.b)("h2",{id:"types-of-errors"},"Types of\xa0Errors"),Object(o.b)("p",null,"Since JavaScript has a different flavor of the compiler and most of the have written and maintained by a different organization. Except for ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError"}),"SyntaxError"),", There is no very definite or consistent distribution among the type of error. Even the message varies compiler to compiler. However, You can find a list fo the errors",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError"}),"here"),". Since Javascript is a dynamic language, most of the errors are runtime errors."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"console.log(Number(10).toPrecision(200));\n")),Object(o.b)("p",null,"If we run the above code, It will throw RangeError. ",Object(o.b)("inlineCode",{parentName:"p"},"RangeError: toPrecision() argument must be between 1 and 100")),Object(o.b)("h2",{id:"how-to-handle-error"},"How to handle\xa0Error"),Object(o.b)("p",null,"Base on the nature of the API(method) call sync/async, Error can be handle differently."),Object(o.b)("h3",{id:"synchronous"},"Synchronous"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"try-catch:")," You can use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch"}),"try-catch")," block to handle Synchronous error."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"{4,5}","{4,5}":!0}),"try {\n  console.log(Number(10).toPrecision(200));\n} catch (error) {\n  // RangeError: toPrecision() argument must be between 1 and 100\n  console.log(error instanceof RangeError); // true\n}\n")),Object(o.b)("p",null,"If you don't want to catch the error and perform any operation. In the newer version of JavaScript compiler you can do so."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"{3}","{3}":!0}),"try {\n  console.log(Number(10).toPrecision(200));\n} catch {}\n")),Object(o.b)("p",null,"If you want to perform some default operation on error, You can use finally block after the catch block."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"{5-7}","{5-7}":!0}),"let average;\ntry {\n  average = getAverage(); // Sum function does not exits.\n} catch {\n} finally {\n  average = 0;\n}\nconsole.log(`Average is ${average}`);\n// Average is 0\n")),Object(o.b)("p",null,"Finally block is mainly used to clean the resources like some ",Object(o.b)("strong",{parentName:"p"},"open file"),", ",Object(o.b)("strong",{parentName:"p"},"open")," ",Object(o.b)("strong",{parentName:"p"},"connection"),"."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/1440/0*VB_fvm1LnN39nOcg",alt:"img2"}))),Object(o.b)("p",null,"Photo by ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://unsplash.com/@nordwood"}),"NordWood Themes")," on\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://unsplash.com"}),"Unsplash")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Asynchronous:")),Object(o.b)("p",null,"An API is called asynchronous in nature when the outcome will come on some next event cycle of the EventLoop. Normally, All network call and IO operation are an async in nature. To get data from async call we either use callback or promise object."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Error handle in async-callback API(callback-error-data):")," Core Browser base javascript has very limited async APIs. You can create an async function either using timer APIs like ",Object(o.b)("strong",{parentName:"p"},"setTimeout")," and ",Object(o.b)("strong",{parentName:"p"},"setInterval")," Or you can create an ",Object(o.b)("strong",{parentName:"p"},"AJAX")," call using ",Object(o.b)("strong",{parentName:"p"},"fetch"),". ",Object(o.b)("strong",{parentName:"p"},"setTimeout")," and ",Object(o.b)("strong",{parentName:"p"},"setInterval")," do not throw any such error that can be handle. And fetch is a promised based async call(We will learn later to handle promise-based error). However, nodejs has a lot of standards and third-party APIs which throws an error. Just like our first express.js example."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"{5-8}","{5-8}":!0}),'const express = require("express");\nconst app = express();\napp.get("/", (\\_, res) => res.end("OK"));\n\nconst server = app.listen(80);\nserver.on("error", function handleListen(error) {\n  console.log(error);\n});\n')),Object(o.b)("p",null,"Here in the above example, Express does not try to handle error for you. Instead, it returns the core ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org/api/http.html#http_event_clienterror"}),"server")," instance of nodejs. You can catch error on the error handler callback function."),Object(o.b)("p",null,"Nodejs follows certain rules. As a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org/api/errors.html"}),"coding standards"),", all the async APIs accept a callback. In the callback, the first argument will be an error generated by API and the second argument will be data on success. This standard has been followed by the overall community too."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"{1}","{1}":!0}),'fs.readFile("a file that does not exist", (err, data) => {\n  if (err) {\n    console.error("There was an error reading the file!", err);\n    return;\n  }\n  // Otherwise handle the data\n});\n')),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You can not handle async callback error in ",Object(o.b)("strong",{parentName:"p"},"try-catch")," block. However, there is an exception. A recent version of ECMA Script, using async-await now we can handle error in try-catch. We will learn that later."))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"{6}","{6}":!0}),"// This will not work\n\ntry {\n  app.listen(80);\n} catch (error) {\n  // never called\n  console.error(error);\n}\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Error handle in promise-based API(try-catch-await):")," After ES5, Javascript introduce a new design pattern to handle callback for async API. That is a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"}),"promise design pattern"),". This solves the previous issue of callback hell."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"{9}","{9}":!0}),'const promise = new Promise((response, reject) => {\n  // some async code here\n});\n\npromise\n  .then(function onSuccess(data) {\n    console.log("SUCCESS");\n  })\n  .catch(function onError(err) {\n    console.error(err);\n  });\n')),Object(o.b)("p",null,"To get error form a promise object, you have to use the catch method and pass a callback function. To understand the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.tothenew.com/blog/angularjs-deferred-promises-basic-understanding/"}),"promise/deferred")," pattern, You can read my blog ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.tothenew.com/blog/angularjs-deferred-promises-basic-understanding/"}),"here"),"."),Object(o.b)("p",null,"The promise is much cleaner than that callback. However, It is very hard to understand the flow in a big codebase. The recent version of ECMA Script has introduced ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://javascript.info/async-await"}),"async-await"),". Using async-await we can write asynchronous code in a synchronous way."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"{3,6}","{3,6}":!0}),"async function main() {\n  try {\n    await promise1;\n    const data = await promise2;\n  } catch (error) {\n    console.log(error); // SOME ERROR\n  }\n}\nmain();\n")),Object(o.b)("p",null,"Using ",Object(o.b)("strong",{parentName:"p"},"try-catch-await"),", you can handle multiple errors in one block which was not possible/complicated in the ",Object(o.b)("strong",{parentName:"p"},"promise-then-catch")," pattern."),Object(o.b)("p",null,"Now we know how to handle the error. However, while writing code we don\u2019t have to handle error only. We may want to create a custom error. This will help to write clean and maintainable code. It is good practice, you should create custom errors for business logics"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/1440/0*xETNVRQX05UU0UZM",alt:"img3"}))),Object(o.b)("p",null,"Photo by ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://unsplash.com/@isisfra"}),"Isis Fran\xe7a")," on\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://unsplash.com"}),"Unsplash")),Object(o.b)("h3",{id:"custom-error"},"Custom Error"),Object(o.b)("p",null,"Creating a custom error is very simple. You can use any custom class and throw it as an error."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"{7,9-10}","{7,9-10}":!0}),"class SomeNetworkError {\n  constructor(status) {\n    this.status = status;\n  }\n}\ntry {\n  throw new SomeNetworkError(4000);\n} catch (error) {\n  console.log(error instanceof SomeNetworkError); // true\n  console.log(`SomeNetworkError Status: ${error.status}`); // SomeNetworkError Status: 4000\n}\n")),Object(o.b)("p",null,"Above we have SomeNetworkError class and we use an instance of this class to throw an error. This is a valid code. However, as a coding practice, we should extend default(standard) error-classes. The base of all error-class is ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Constructor"}),"Error")," and call with a super method with the message."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"{1,3,8,10-13}","{1,3,8,10-13}":!0}),'class SomeNetworkError extends Error {\n  constructor(message, status) {\n    super(message);\n    this.status = status;\n  }\n}\ntry {\n  throw new SomeNetworkError("Network Error", 4000);\n} catch (error) {\n  console.error(error instanceof Error); // true\n  console.log(`> ${error}`); // > Error: Network Error\n  console.error(error); // SomeNetworkError: Network Error\n  console.error(error.stack); // stacktrace here\n}\n')),Object(o.b)("p",null,"If you notice, extending the Error class and calling super automatically get\xa0.",Object(o.b)("strong",{parentName:"p"},"toString")," method of the SomeNetworkError class and print a nice message. Similarly, you can extend other standard Error class too."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"{1,3,9,12,13}","{1,3,9,12,13}":!0}),'class ArithmeticRangeError extends RangeError {\n  constructor(message) {\n    super(message);\n  }\n}\ntry {\n  const zero = 0;\n  if (zero === 0) {\n    throw new ArithmeticRangeError("zero cant be 0");\n  }\n} catch (error) {\n  console.log(error instanceof RangeError); // true\n  console.error(error.toString()); // RangeError: zero cant be 0\n}\n')),Object(o.b)("h3",{id:"advanced-error-handling"},"Advanced Error Handling"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Error handle with Loop:")," Keep try-catch out of the loop, if you want to break loop on error. Else put try-catch inside a loop to continue"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Break on error:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"{1,9}","{1,9}":!0}),'try {\n const numbers = \\[10, 2, 0, 5\\];\n numbers.forEach((num) => {\n if (num === 0) {\n throw new ArithmeticRangeError("zero cant be 0");\n }\n console.log(num);\n });\n} catch (error) {}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Continue on error or skip:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"{3,7}","{3,7}":!0}),'const numbers = \\[10, 2, 0, 5\\];\nnumbers.forEach((num) => {\n try {\n  if (num === 0) {\n  throw new ArithmeticRangeError("zero cant be 0");\n  }\n } catch (error) {}\n console.log(num);\n});\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Without try-catch, Logical handle:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"{1,3,8,14}","{1,3,8,14}":!0}),"// filter zero, no need handle zero\n\nconst numbers = \\[10, 2, 0, 5\\].filter((num) => num !== 0);\nnumbers.forEach((num) => {\n console.log(num);\n});\n\n// Use some to break loop\n\nconst numbers = \\[10, 2, 0, 5\\];\n\nnumbers.some((num) => {\n const isZero = num === 0;\n if (isZero) return true;\n // logic here\n console.log(num);\n});\n")),Object(o.b)("p",null,"As you can see, based on your need you may not need to throw error always. You can handle it logically."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Multiple errors in try-catch:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"{8-9}","{8-9}":!0}),'try {\n  let name;\n  /// some operation\n  if (name === "") throw new RangeError("Cant be blank");\n  if (name.match(/\\\\W/)) throw new TypeError("name cant be non alph-numric");\n  throw new Error("Some other error");\n} catch (error) {\n  if (error instanceof RangeError) console.log("RangeError");\n  else if (error instanceof TypeError) console.log("TypeError");\n  else console.log("Other Error");\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Multiple errors in promise-then-catch:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"{7,11,15-17}","{7,11,15-17}":!0}),'new Promise((resolve) => {\n  let name;\n  // some logic\n  resolve(name);\n})\n  .then((name) => {\n    if (name === "") throw new RangeError("Cant be blank");\n    else return name;\n  })\n  .then((name) => {\n    if (name.match(/\\\\W/)) throw new TypeError("name cant be non alph-numric");\n    else return name;\n  })\n  .catch((error) => {\n    if (error instanceof RangeError) console.log("RangeError");\n    else if (error instanceof TypeError) console.log("TypeError");\n    else console.log("Other Error");\n  });\n')),Object(o.b)("h3",{id:"error-handling-coding-practices"},"Error Handling Coding Practices"),Object(o.b)("p",null,"Above all code are very standard and simple use cases to handle the error. However, when you work on the project. The code maybe not this simple as it is given here. So we need to write some boilerplate codes. Below, I have listed some of the patterns that I follow in my projects."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create ",Object(o.b)("strong",{parentName:"li"},"Enum")," Class or Error ",Object(o.b)("strong",{parentName:"li"},"Constants")),Object(o.b)("li",{parentName:"ol"},"Use ",Object(o.b)("strong",{parentName:"li"},"localization")," from beginning"),Object(o.b)("li",{parentName:"ol"},"Common ",Object(o.b)("strong",{parentName:"li"},"util module or file")," to handle logic and generate an error"),Object(o.b)("li",{parentName:"ol"},"Try to ",Object(o.b)("strong",{parentName:"li"},"minimize")," try-catch uses, Instead write more unit test cases"),Object(o.b)("li",{parentName:"ol"},"Catch and Throw a ",Object(o.b)("strong",{parentName:"li"},"custom error")," on API calls"),Object(o.b)("li",{parentName:"ol"},"Use ",Object(o.b)("strong",{parentName:"li"},"typescript")," as much as possible"),Object(o.b)("li",{parentName:"ol"},"Minimize the use of magic number/string"),Object(o.b)("li",{parentName:"ol"},"Avoid higher level of ",Object(o.b)("strong",{parentName:"li"},"nested object")),Object(o.b)("li",{parentName:"ol"},"Avoid global ",Object(o.b)("strong",{parentName:"li"},"object pollution")),Object(o.b)("li",{parentName:"ol"},"Use ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactjs.org/docs/error-boundaries.html"}),Object(o.b)("strong",{parentName:"a"},"Error-Boundaries"))," as much as possible(React)"),Object(o.b)("li",{parentName:"ol"},"Proper logging, use ",Object(o.b)("strong",{parentName:"li"},"console.error")," for error logging."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Log level")," to minimize log messages"),Object(o.b)("li",{parentName:"ol"},"Don\u2019t print ",Object(o.b)("strong",{parentName:"li"},"credential")," in logs"),Object(o.b)("li",{parentName:"ol"},"Use ",Object(o.b)("strong",{parentName:"li"},"more visuals")," than console in the case of WebApps.")),Object(o.b)("div",{className:"powr-comments",id:"93e7bc2a_1599917840"}))}b.isMDXComponent=!0}}]);