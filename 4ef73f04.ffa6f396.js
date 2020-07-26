(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),o=(n(0),n(149)),l={id:"one-for-all",title:"Building and Testing A TypeScript library",author:"Deepak Vishwakarma",author_title:"Front End Engineer",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=460",tags:["library","typeScript","bundle","testing","deno","npm"]},r={permalink:"/blog/one-for-all",source:"@site/blog/2020-07-11-one-tool-for-all.md",description:"Building and Testing A TypeScript/NodeJS library without WebPack, Jest or Rollup",date:"2020-07-11T00:00:00.000Z",tags:[{label:"library",permalink:"/blog/tags/library"},{label:"typeScript",permalink:"/blog/tags/type-script"},{label:"bundle",permalink:"/blog/tags/bundle"},{label:"testing",permalink:"/blog/tags/testing"},{label:"deno",permalink:"/blog/tags/deno"},{label:"npm",permalink:"/blog/tags/npm"}],title:"Building and Testing A TypeScript library",readingTime:5.625,truncated:!1,prevItem:{title:"Security Vulnerability Solutions for Non-Tech People | In Simple Language",permalink:"/blog/security-for-non-tech"},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},c=[{value:"Building and Testing A TypeScript/NodeJS library without WebPack, Jest or Rollup",id:"building-and-testing-a-typescriptnodejs-library-without-webpack-jest-or-rollup",children:[]},{value:"Overview of library",id:"overview-of-library",children:[]},{value:"Initial setup for library",id:"initial-setup-for-library",children:[{value:"1. Create a folders and Initilize npm and git",id:"1-create-a-folders-and-initilize-npm-and-git",children:[]},{value:"2. Add basic test case and Implement method <code>unique</code>",id:"2-add-basic-test-case-and-implement-method-unique",children:[]},{value:"3. Run and test it working",id:"3-run-and-test-it-working",children:[]}]},{value:"Deno as TypeScript Runtime",id:"deno-as-typescript-runtime",children:[{value:"1. Create a TypeScript lodash library",id:"1-create-a-typescript-lodash-library",children:[]},{value:"2. Update <code>npm scripts</code>, add Deno test task",id:"2-update-npm-scripts-add-deno-test-task",children:[]}]}],s={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"building-and-testing-a-typescriptnodejs-library-without-webpack-jest-or-rollup"},"Building and Testing A TypeScript/NodeJS library without WebPack, Jest or Rollup"),Object(o.b)("p",null,"No doubt Typescript is one of the best programming language/frameworks came in recent years. TypeScript helps you with the typings to write clean and modular JavaScript. However, Writing and setting up the library is a very tedious task. You can use TypeScript CLI to build a library, Still testing is a pain. In this tutorial, I will explain how you can ditch WebPack, Jest, or Rollup and write a beautiful library just using tools provided by ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://deno.land/"}),"Awesome Deno"),"."),Object(o.b)("p",null,"Deno is around town for a while. Since the beginning, it getting the attention of the developers. It has runtime for JavaScript and TypeScript that uses V8 and is built-in Rust. Rust means, it is fast and secure at the same time."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://miro.medium.com/max/1400/1*7Ws9_cH2N2ZxvheAIn9f6A@2x.png",alt:"Bundle Image"}))),Object(o.b)("p",null,"So how Deno will help you to ditch the things mentioned above. Let\u2019s understand Deno a little bit. We will build a small nodejs/npm library using Deno just Deno."),Object(o.b)("h2",{id:"overview-of-library"},"Overview of library"),Object(o.b)("p",null,"The library we are going to build will be lodash, Our own lodash. It will have some util methods like find unique, get values by props."),Object(o.b)("h2",{id:"initial-setup-for-library"},"Initial setup for library"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create folders and Initialize npm and git"),Object(o.b)("li",{parentName:"ol"},"Add basic test case and Implement the method ",Object(o.b)("inlineCode",{parentName:"li"},"unique")),Object(o.b)("li",{parentName:"ol"},"Run and test it working")),Object(o.b)("h3",{id:"1-create-a-folders-and-initilize-npm-and-git"},"1. Create a folders and Initilize npm and git"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# Create a folder\nmd dash-lodash\nmd lib test\n\n## Create files\ntouch test/index.js\ntouch lib/index.js\n\n# Git init\ngit init\necho ".vscode\\nnode_modules\\nlib" > .gitignore\n\n# npm init\nnpm init --y\n')),Object(o.b)("p",null,"If all good, You will see structure as below."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/deno_loadash_1.png",alt:"folder_lodash"}))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you noticed, I have added lib in ",Object(o.b)("inlineCode",{parentName:"p"},".gitignore"),". Since we are building the TypeScript library. We will not need a ",Object(o.b)("inlineCode",{parentName:"p"},"compiled")," version of it."))),Object(o.b)("h3",{id:"2-add-basic-test-case-and-implement-method-unique"},"2. Add basic test case and Implement method ",Object(o.b)("inlineCode",{parentName:"h3"},"unique")),Object(o.b)("p",null,"Open file ",Object(o.b)("inlineCode",{parentName:"p"},"test/index.js")," and add below lines."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="test/index.js"',title:'"test/index.js"'}),'const { unique } = require("../lib");\n\nconst uniqueValues = unique([1, 2, 3, 1]);\n\nif (uniqueValues.length === 4) throw new Error("Unique is not working");\n\nconsole.log("\u2705 All looks good");\n')),Object(o.b)("p",null,"Open file ",Object(o.b)("inlineCode",{parentName:"p"},"lib/index.js")," and add below lines."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="lib/index.js"',title:'"lib/index.js"'}),"const unique = (arr) => arr;\n\nmodule.exports = { unique };\n")),Object(o.b)("p",null,"Open",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," add below lines"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="package.json" {5,7}',title:'"package.json"',"{5,7}":!0}),'{\n  "name": "dash-lodash",\n  "version": "1.0.0",\n  "description": "",\n  "main": "lib/index.js",\n  "scripts": {\n    "test": "node test"\n  },\n  "keywords": [],\n  "author": "",\n  "license": "ISC"\n}\n')),Object(o.b)("h3",{id:"3-run-and-test-it-working"},"3. Run and test it working"),Object(o.b)("p",null,"Since our npm is set now, You can run and test using ",Object(o.b)("inlineCode",{parentName:"p"},"npm test")," command. Once you run ",Object(o.b)("inlineCode",{parentName:"p"},"npm test"),", You will see error message like. ",Object(o.b)("inlineCode",{parentName:"p"},"Error: Unique is not working")),Object(o.b)("p",null,"Add below code in ",Object(o.b)("inlineCode",{parentName:"p"},"lib/index.js")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{1}","{1}":!0}),"const unique = (arr) => [...new Set(arr)];\nmodule.exports = { unique };\n")),Object(o.b)("p",null,"Run the test again, If you see the message ",Object(o.b)("inlineCode",{parentName:"p"},"\u2705 All looks good")," meaning all good to go. Your library is working."),Object(o.b)("h2",{id:"deno-as-typescript-runtime"},"Deno as TypeScript Runtime"),Object(o.b)("p",null,"Our code is already running and tested. This is good to publish in npm. However, We want to use TypeScript as a source code. Good thing, The biggest selling point for Deno is TypeScript runtime. Saying that means you can run TypeScript without any external ",Object(o.b)("inlineCode",{parentName:"p"},"trans-compiler"),". Even you don't need ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.typescriptlang.org/index.html#download-links"}),"typescript cli"),". Using Deno we can run typescript and same time Deno provides tools like a bundle. We can compile typescript and convert it to JavaScript."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Prerequisite:"),"\n",Object(o.b)("em",{parentName:"p"},"Deno 1.1.0 and above")),Object(o.b)("p",null,"You can install Deno from here. ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://Deno.land/#installation"}),"installation")),Object(o.b)("p",null,"Let's move to TypeScript."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create a TypeScript lodash library"),Object(o.b)("li",{parentName:"ol"},"Update ",Object(o.b)("inlineCode",{parentName:"li"},"npm scripts"),", add Deno test task")),Object(o.b)("h3",{id:"1-create-a-typescript-lodash-library"},"1. Create a TypeScript lodash library"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"md src\ntouch src/lodash.ts\n")),Object(o.b)("p",null,"Add below lines in file ",Object(o.b)("inlineCode",{parentName:"p"},"src/lodash.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"export const unique = (arr: any[]) => [...new Set(arr)];\n")),Object(o.b)("h3",{id:"2-update-npm-scripts-add-deno-test-task"},"2. Update ",Object(o.b)("inlineCode",{parentName:"h3"},"npm scripts"),", add Deno test task"),Object(o.b)("p",null,"Let's add a few test cases."),Object(o.b)("p",null,"Since we are moving to Deno. We have to convert test cases to the ",Object(o.b)("inlineCode",{parentName:"p"},"TypeScript")," file."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"touch test/lodash.test.ts\n")),Object(o.b)("p",null,"Replace content of file with below given lines."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'import { assertEquals } from "https://Deno.land/std/testing/asserts.ts";\nimport { unique } from "../src/lodash.ts";\n\nDeno.test("unique #1", () => {\n  assertEquals(typeof unique, "function", "Unique is not defined!");\n});\n\nDeno.test("unique #2", () => {\n  const uniqueValues = unique([1, 2, 3, 1]);\n  assertEquals(uniqueValues.length, 3, "Unique is not working");\n  assertEquals(uniqueValues, [1, 2, 3]);\n  console.log("\u2705 All looks good");\n});\n')),Object(o.b)("p",null,"Update test command in ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="package.json" {4}',title:'"package.json"',"{4}":!0}),'{\n  // rest\n  "scripts": {\n    "test": "Deno test"\n  }\n}\n')),Object(o.b)("p",null,"Run the test again. ",Object(o.b)("inlineCode",{parentName:"p"},"npm test"),". You will see a message like ",Object(o.b)("inlineCode",{parentName:"p"},"test result: ok. 2 passed;")),Object(o.b)("p",null,"Now we have successfully moved our source code to typescript. However, If notice we cant directly consume our ",Object(o.b)("inlineCode",{parentName:"p"},"src/lodash.ts")," in nodejs. Our ",Object(o.b)("inlineCode",{parentName:"p"},"dash-lodash")," still pointing to ",Object(o.b)("inlineCode",{parentName:"p"},"lib/index.js"),". to consume this in nodejs. We need to convert typescript to JavaScript to consume in nodejs without webpack","[bundler]","."),Object(o.b)("p",null,"To convert ",Object(o.b)("inlineCode",{parentName:"p"},"TypeScript")," to ",Object(o.b)("inlineCode",{parentName:"p"},"JavaScript"),", we will use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.typescriptlang.org/index.html#download-links"}),"typescript CLI")," tool. To setup, bundler follow below given steps."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Add typescript as dev dependencies"),Object(o.b)("li",{parentName:"ol"},"Add ",Object(o.b)("inlineCode",{parentName:"li"},"tsconfig.json")," file"),Object(o.b)("li",{parentName:"ol"},"Update ",Object(o.b)("inlineCode",{parentName:"li"},"package.json"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"1. typescript as dev dependencies:")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"npm i -D typescript")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"2. Add ",Object(o.b)("inlineCode",{parentName:"strong"},"tsconfig.json")," file:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="tsconfig.json"',title:'"tsconfig.json"'}),'{\n  "compilerOptions": {\n    "target": "es6",\n    "module": "CommonJS",\n    "declaration": true,\n    "outDir": "./lib",\n    "moduleResolution": "node"\n  },\n  "include": ["src"],\n  "exclude": ["node_modules", "**/test/*"]\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"3. Update ",Object(o.b)("inlineCode",{parentName:"strong"},"package.json"),":")),Object(o.b)("p",null,"Add bundle command in ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="package.json" {4,5}',title:'"package.json"',"{4,5}":!0}),'{\n  // rest\n  "scripts": {\n    "test": "Deno test && node test",\n    "bundle": "tsc"\n  }\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Run ",Object(o.b)("inlineCode",{parentName:"strong"},"bundle")," command:")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"npm run bundle")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/deno_loadash_2.png",alt:"folder_lodash"}))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"We have to update, ",Object(o.b)("inlineCode",{parentName:"p"},"test/index.js")," import/require statement. Since ",Object(o.b)("inlineCode",{parentName:"p"},"tsc")," using ",Object(o.b)("inlineCode",{parentName:"p"},"commonjs")," as a module in ",Object(o.b)("inlineCode",{parentName:"p"},"tsconfig.json"),", All the files will be compiled and converted to the same name ie. ",Object(o.b)("inlineCode",{parentName:"p"},"lib/lodash.js"),"."))),Object(o.b)("p",null,"After update, ",Object(o.b)("inlineCode",{parentName:"p"},"test/index.js")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{1}","{1}":!0}),'const { unique } = require("../lib/lodash");\n\n// rest of the code\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Try and run again test.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"npm test")," OR ",Object(o.b)("inlineCode",{parentName:"p"},"node test"))),Object(o.b)("p",null,"Tada!! congrats you are all good to publish your nodejs-typescript module. To publish your module to npm you can follow ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://zellwk.com/blog/publish-to-npm/"}),"this")," blog."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Some final touch")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"TypeScript module need to define the type defination locaction. We can add meta data for that in ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")))),Object(o.b)("p",null,"Add below lines in ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:"{5}","{5}":!0}),'{\n  "name": "dash-lodash",\n  "version": "1.0.0",\n  "description": "\\"demo deno typescript, testing bundling\\"",\n  "types": "lib/lodash.d.ts",\n  "main": "lib/lodash.js",\n  "files": ["lib/lodash.js"]\n  //rest of the code\n}\n')),Object(o.b)("p",null,"Once you publish your module on npm. You can use your module as below."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"In NodeJS:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const { unique } = require("dash-lodash");\n\nconst uniqueValues = unique([1, 2, 3, 1]);\n\nif (uniqueValues.length === 4) throw new Error("Unique is not working");\n\nconsole.log("\u2705 All looks good");\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"In TypeScript:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'import { unique } from "dash-lodash";\n\nconst uniqueValues = unique([1, 2, 3, 1]);\n\nif (uniqueValues.length === 4) throw new Error("Unique is not working");\n\nconsole.log("\u2705 All looks good");\n')),Object(o.b)("p",null,"For source code, You can refer to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/deepakshrma/dash-lodash-deno-typescript-sample"}),"dash-lodash-deno-typescript-sample")," repo."),Object(o.b)("p",null,"Thanks. Keep Calm, Keep Coding."))}p.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(l,".").concat(u)]||b[u]||d[u]||o;return n?i.a.createElement(m,r(r({ref:t},s),{},{components:n})):i.a.createElement(m,r({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var s=2;s<o;s++)l[s]=n[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);