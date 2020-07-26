---
id: one-for-all
title: Building and Testing A TypeScript library
author: Deepak Vishwakarma
author_title: Front End Engineer
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=460
tags: [library, typeScript, bundle, testing, deno, npm]
---

## Building and Testing A TypeScript/NodeJS library without WebPack, Jest or Rollup

No doubt Typescript is one of the best programming language/frameworks came in recent years. TypeScript helps you with the typings to write clean and modular JavaScript. However, Writing and setting up the library is a very tedious task. You can use TypeScript CLI to build a library, Still testing is a pain. In this tutorial, I will explain how you can ditch WebPack, Jest, or Rollup and write a beautiful library just using tools provided by [Awesome Deno](https://deno.land/).

Deno is around town for a while. Since the beginning, it getting the attention of the developers. It has runtime for JavaScript and TypeScript that uses V8 and is built-in Rust. Rust means, it is fast and secure at the same time.

![Bundle Image](https://miro.medium.com/max/1400/1*7Ws9_cH2N2ZxvheAIn9f6A@2x.png)

So how Deno will help you to ditch the things mentioned above. Let’s understand Deno a little bit. We will build a small nodejs/npm library using Deno just Deno.

## Overview of library

The library we are going to build will be lodash, Our own lodash. It will have some util methods like find unique, get values by props.

## Initial setup for library

1. Create folders and Initialize npm and git
2. Add basic test case and Implement the method `unique`
3. Run and test it working

### 1. Create a folders and Initilize npm and git

```bash
# Create a folder
md dash-lodash
md lib test

## Create files
touch test/index.js
touch lib/index.js

# Git init
git init
echo ".vscode\nnode_modules\nlib" > .gitignore

# npm init
npm init --y
```

If all good, You will see structure as below.

![folder_lodash](/img/deno_loadash_1.png)

:::note
If you noticed, I have added lib in `.gitignore`. Since we are building the TypeScript library. We will not need a `compiled` version of it.
:::

### 2. Add basic test case and Implement method `unique`

Open file `test/index.js` and add below lines.

```js title="test/index.js"
const { unique } = require("../lib");

const uniqueValues = unique([1, 2, 3, 1]);

if (uniqueValues.length === 4) throw new Error("Unique is not working");

console.log("✅ All looks good");
```

Open file `lib/index.js` and add below lines.

```js title="lib/index.js"
const unique = (arr) => arr;

module.exports = { unique };
```

Open`package.json` add below lines

```json title="package.json" {5,7}
{
  "name": "dash-lodash",
  "version": "1.0.0",
  "description": "",
  "main": "lib/index.js",
  "scripts": {
    "test": "node test"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

### 3. Run and test it working

Since our npm is set now, You can run and test using `npm test` command. Once you run `npm test`, You will see error message like. `Error: Unique is not working`

Add below code in `lib/index.js`

```js {1}
const unique = (arr) => [...new Set(arr)];
module.exports = { unique };
```

Run the test again, If you see the message `✅ All looks good` meaning all good to go. Your library is working.

## Deno as TypeScript Runtime

Our code is already running and tested. This is good to publish in npm. However, We want to use TypeScript as a source code. Good thing, The biggest selling point for Deno is TypeScript runtime. Saying that means you can run TypeScript without any external `trans-compiler`. Even you don't need [typescript cli](https://www.typescriptlang.org/index.html#download-links). Using Deno we can run typescript and same time Deno provides tools like a bundle. We can compile typescript and convert it to JavaScript.

**Prerequisite:**
_Deno 1.1.0 and above_

You can install Deno from here. [installation](https://Deno.land/#installation)

Let's move to TypeScript.

1. Create a TypeScript lodash library
2. Update `npm scripts`, add Deno test task

### 1. Create a TypeScript lodash library

```bash
md src
touch src/lodash.ts
```

Add below lines in file `src/lodash.ts`

```js
export const unique = (arr: any[]) => [...new Set(arr)];
```

### 2. Update `npm scripts`, add Deno test task

Let's add a few test cases.

Since we are moving to Deno. We have to convert test cases to the `TypeScript` file.

```bash
touch test/lodash.test.ts
```

Replace content of file with below given lines.

```typescript
import { assertEquals } from "https://Deno.land/std/testing/asserts.ts";
import { unique } from "../src/lodash.ts";

Deno.test("unique #1", () => {
  assertEquals(typeof unique, "function", "Unique is not defined!");
});

Deno.test("unique #2", () => {
  const uniqueValues = unique([1, 2, 3, 1]);
  assertEquals(uniqueValues.length, 3, "Unique is not working");
  assertEquals(uniqueValues, [1, 2, 3]);
  console.log("✅ All looks good");
});
```

Update test command in `package.json`

```json title="package.json" {4}
{
  // rest
  "scripts": {
    "test": "Deno test"
  }
}
```

Run the test again. `npm test`. You will see a message like `test result: ok. 2 passed;`

Now we have successfully moved our source code to typescript. However, If notice we cant directly consume our `src/lodash.ts` in nodejs. Our `dash-lodash` still pointing to `lib/index.js`. to consume this in nodejs. We need to convert typescript to JavaScript to consume in nodejs without webpack[bundler].

To convert `TypeScript` to `JavaScript`, we will use [typescript CLI](https://www.typescriptlang.org/index.html#download-links) tool. To setup, bundler follow below given steps.

1. Add typescript as dev dependencies
2. Add `tsconfig.json` file
3. Update `package.json`

**1. typescript as dev dependencies:**

`npm i -D typescript`

**2. Add `tsconfig.json` file:**

```json title="tsconfig.json"
{
  "compilerOptions": {
    "target": "es6",
    "module": "CommonJS",
    "declaration": true,
    "outDir": "./lib",
    "moduleResolution": "node"
  },
  "include": ["src"],
  "exclude": ["node_modules", "**/test/*"]
}
```

**3. Update `package.json`:**

Add bundle command in `package.json`

```json title="package.json" {4,5}
{
  // rest
  "scripts": {
    "test": "Deno test && node test",
    "bundle": "tsc"
  }
}
```

**Run `bundle` command:**

`npm run bundle`

![folder_lodash](/img/deno_loadash_2.png)

:::note
We have to update, `test/index.js` import/require statement. Since `tsc` using `commonjs` as a module in `tsconfig.json`, All the files will be compiled and converted to the same name ie. `lib/lodash.js`.
:::

After update, `test/index.js`

```js {1}
const { unique } = require("../lib/lodash");

// rest of the code
```

**Try and run again test.**

> `npm test` OR `node test`

Tada!! congrats you are all good to publish your nodejs-typescript module. To publish your module to npm you can follow [this](https://zellwk.com/blog/publish-to-npm/) blog.

:::note Some final touch
TypeScript module need to define the type defination locaction. We can add meta data for that in `package.json`
:::

Add below lines in `package.json`

```json {5}
{
  "name": "dash-lodash",
  "version": "1.0.0",
  "description": "\"demo deno typescript, testing bundling\"",
  "types": "lib/lodash.d.ts",
  "main": "lib/lodash.js",
  "files": ["lib/lodash.js"]
  //rest of the code
}
```

Once you publish your module on npm. You can use your module as below.

**In NodeJS:**

```js
const { unique } = require("dash-lodash");

const uniqueValues = unique([1, 2, 3, 1]);

if (uniqueValues.length === 4) throw new Error("Unique is not working");

console.log("✅ All looks good");
```

**In TypeScript:**

```typescript
import { unique } from "dash-lodash";

const uniqueValues = unique([1, 2, 3, 1]);

if (uniqueValues.length === 4) throw new Error("Unique is not working");

console.log("✅ All looks good");
```

For source code, You can refer to [dash-lodash-deno-typescript-sample](https://github.com/deepakshrma/dash-lodash-deno-typescript-sample) repo.

Thanks. Keep Calm, Keep Coding.
