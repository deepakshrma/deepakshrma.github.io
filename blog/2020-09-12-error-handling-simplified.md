---
id: error-handling-simplified
title: Error Handling | Simplified | Javascript
author: Deepak Vishwakarma
author_title: Front End Engineer
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=460
tags: [js, javascript, programming, error, handling, typescript]
---

![img1](https://cdn-images-1.medium.com/max/1440/0*xe7Z_KiUCiwSNKDg)

Javascript is a dynamic language. This makes Javascript a supercool language. However, Same time it is very hard to write secure code. One small mistake can lead to a bigger issue. Error handling plays a vital role to reduce the number of bugs. If you handle error elegant way, it will save a lot of time in the future. So the bigger question is how you should handle the error.

Let's take one example.

```js
const express = require("express");
const app = express();
app.get("/", (_, res) => res.end("OK"));
app.listen(80);
```

The above code is a sample code written in nodejs on an [express](https://expressjs.com/) framework. This code trying to run a server at port 80. What if we know that port 80 is already taken by some other app and we try to run the above code. How do we know what will happen? Will it run or break with some error? This is very unclear while seeing this code. Even you want to handle an error, you may have to read the documentation. But don’t worry, just like any natural language. The programming language has some grammar. Even there is no standard specification in ECMA standard for Error handling. But the Javascript community follows certain coding guidelines.

### Topics

1. Types of Errors
2. How To Handle Errors
   1. Synchronous
      1. try-catch
   2. Asynchronous
      1. callback-error-data
      2. promise-then-catch
      3. try-catch-await
3. Custom Error
4. Advanced Error Handling
   1. Error handle with Loop
   2. Multiple errors in try-catch
   3. Multiple errors in promise-then-catch
5. Error Handling Coding Practices

## Types of Errors

Since JavaScript has a different flavor of the compiler and most of the have written and maintained by a different organization. Except for [SyntaxError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError), There is no very definite or consistent distribution among the type of error. Even the message varies compiler to compiler. However, You can find a list fo the errors[here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError). Since Javascript is a dynamic language, most of the errors are runtime errors.

**Example:**

```js
console.log(Number(10).toPrecision(200));
```

If we run the above code, It will throw RangeError. `RangeError: toPrecision() argument must be between 1 and 100`

## How to handle Error

Base on the nature of the API(method) call sync/async, Error can be handle differently.

### Synchronous

**try-catch:** You can use [try-catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block to handle Synchronous error.

```js {4,5}
try {
  console.log(Number(10).toPrecision(200));
} catch (error) {
  // RangeError: toPrecision() argument must be between 1 and 100
  console.log(error instanceof RangeError); // true
}
```

If you don't want to catch the error and perform any operation. In the newer version of JavaScript compiler you can do so.

```js  {3}
try {
  console.log(Number(10).toPrecision(200));
} catch {}
```

If you want to perform some default operation on error, You can use finally block after the catch block.

```js {5-7}
let average;
try {
  average = getAverage(); // Sum function does not exits.
} catch {
} finally {
  average = 0;
}
console.log(`Average is ${average}`);
// Average is 0
```

Finally block is mainly used to clean the resources like some **open file**, **open** **connection**.

![img2](https://cdn-images-1.medium.com/max/1440/0*VB_fvm1LnN39nOcg)

Photo by [NordWood Themes](https://unsplash.com/@nordwood) on [Unsplash](https://unsplash.com)

**Asynchronous:**

An API is called asynchronous in nature when the outcome will come on some next event cycle of the EventLoop. Normally, All network call and IO operation are an async in nature. To get data from async call we either use callback or promise object.

**Error handle in async-callback API(callback-error-data):** Core Browser base javascript has very limited async APIs. You can create an async function either using timer APIs like **setTimeout** and **setInterval** Or you can create an **AJAX** call using **fetch**. **setTimeout** and **setInterval** do not throw any such error that can be handle. And fetch is a promised based async call(We will learn later to handle promise-based error). However, nodejs has a lot of standards and third-party APIs which throws an error. Just like our first express.js example.

```js {5-8}
const express = require("express");
const app = express();
app.get("/", (\_, res) => res.end("OK"));

const server = app.listen(80);
server.on("error", function handleListen(error) {
  console.log(error);
});
```

Here in the above example, Express does not try to handle error for you. Instead, it returns the core [server](https://nodejs.org/api/http.html#http_event_clienterror) instance of nodejs. You can catch error on the error handler callback function.

Nodejs follows certain rules. As a [coding standards](https://nodejs.org/api/errors.html), all the async APIs accept a callback. In the callback, the first argument will be an error generated by API and the second argument will be data on success. This standard has been followed by the overall community too.

```js {1}
fs.readFile("a file that does not exist", (err, data) => {
  if (err) {
    console.error("There was an error reading the file!", err);
    return;
  }
  // Otherwise handle the data
});
```

:::info
You can not handle async callback error in **try-catch** block. However, there is an exception. A recent version of ECMA Script, using async-await now we can handle error in try-catch. We will learn that later.
:::

```js {6}
// This will not work

try {
  app.listen(80);
} catch (error) {
  // never called
  console.error(error);
}
```

**Error handle in promise-based API(try-catch-await):** After ES5, Javascript introduce a new design pattern to handle callback for async API. That is a [promise design pattern](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). This solves the previous issue of callback hell.

```js {9}
const promise = new Promise((response, reject) => {
  // some async code here
});

promise
  .then(function onSuccess(data) {
    console.log("SUCCESS");
  })
  .catch(function onError(err) {
    console.error(err);
  });
```

To get error form a promise object, you have to use the catch method and pass a callback function. To understand the [promise/deferred](https://www.tothenew.com/blog/angularjs-deferred-promises-basic-understanding/) pattern, You can read my blog [here](https://www.tothenew.com/blog/angularjs-deferred-promises-basic-understanding/).

The promise is much cleaner than that callback. However, It is very hard to understand the flow in a big codebase. The recent version of ECMA Script has introduced [async-await](https://javascript.info/async-await). Using async-await we can write asynchronous code in a synchronous way.

```js {3,6}
async function main() {
  try {
    await promise1;
    const data = await promise2;
  } catch (error) {
    console.log(error); // SOME ERROR
  }
}
main();
```

Using **try-catch-await**, you can handle multiple errors in one block which was not possible/complicated in the **promise-then-catch** pattern.

Now we know how to handle the error. However, while writing code we don’t have to handle error only. We may want to create a custom error. This will help to write clean and maintainable code. It is good practice, you should create custom errors for business logics

![img3](https://cdn-images-1.medium.com/max/1440/0*xETNVRQX05UU0UZM)

Photo by [Isis França](https://unsplash.com/@isisfra) on [Unsplash](https://unsplash.com)

### Custom Error

Creating a custom error is very simple. You can use any custom class and throw it as an error.

```js {7,9-10}
class SomeNetworkError {
  constructor(status) {
    this.status = status;
  }
}
try {
  throw new SomeNetworkError(4000);
} catch (error) {
  console.log(error instanceof SomeNetworkError); // true
  console.log(`SomeNetworkError Status: ${error.status}`); // SomeNetworkError Status: 4000
}
```

Above we have SomeNetworkError class and we use an instance of this class to throw an error. This is a valid code. However, as a coding practice, we should extend default(standard) error-classes. The base of all error-class is [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Constructor) and call with a super method with the message.

```js {1,3,8,10-13}
class SomeNetworkError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}
try {
  throw new SomeNetworkError("Network Error", 4000);
} catch (error) {
  console.error(error instanceof Error); // true
  console.log(`> ${error}`); // > Error: Network Error
  console.error(error); // SomeNetworkError: Network Error
  console.error(error.stack); // stacktrace here
}
```

If you notice, extending the Error class and calling super automatically get .**toString** method of the SomeNetworkError class and print a nice message. Similarly, you can extend other standard Error class too.

```js {1,3,9,12,13}
class ArithmeticRangeError extends RangeError {
  constructor(message) {
    super(message);
  }
}
try {
  const zero = 0;
  if (zero === 0) {
    throw new ArithmeticRangeError("zero cant be 0");
  }
} catch (error) {
  console.log(error instanceof RangeError); // true
  console.error(error.toString()); // RangeError: zero cant be 0
}
```

### Advanced Error Handling

**Error handle with Loop:** Keep try-catch out of the loop, if you want to break loop on error. Else put try-catch inside a loop to continue

**Break on error:**

```js {1,9}
try {
 const numbers = \[10, 2, 0, 5\];
 numbers.forEach((num) => {
 if (num === 0) {
 throw new ArithmeticRangeError("zero cant be 0");
 }
 console.log(num);
 });
} catch (error) {}
```

**Continue on error or skip:**

```js {3,7}
const numbers = \[10, 2, 0, 5\];
numbers.forEach((num) => {
 try {
  if (num === 0) {
  throw new ArithmeticRangeError("zero cant be 0");
  }
 } catch (error) {}
 console.log(num);
});
```

**Without try-catch, Logical handle:**

```js {1,3,8,14}
// filter zero, no need handle zero

const numbers = \[10, 2, 0, 5\].filter((num) => num !== 0);
numbers.forEach((num) => {
 console.log(num);
});

// Use some to break loop

const numbers = \[10, 2, 0, 5\];

numbers.some((num) => {
 const isZero = num === 0;
 if (isZero) return true;
 // logic here
 console.log(num);
});
```

As you can see, based on your need you may not need to throw error always. You can handle it logically.

**Multiple errors in try-catch:**

```js {8-9}
try {
  let name;
  /// some operation
  if (name === "") throw new RangeError("Cant be blank");
  if (name.match(/\\W/)) throw new TypeError("name cant be non alph-numric");
  throw new Error("Some other error");
} catch (error) {
  if (error instanceof RangeError) console.log("RangeError");
  else if (error instanceof TypeError) console.log("TypeError");
  else console.log("Other Error");
}
```

**Multiple errors in promise-then-catch:**

```js {7,11,15-17}
new Promise((resolve) => {
  let name;
  // some logic
  resolve(name);
})
  .then((name) => {
    if (name === "") throw new RangeError("Cant be blank");
    else return name;
  })
  .then((name) => {
    if (name.match(/\\W/)) throw new TypeError("name cant be non alph-numric");
    else return name;
  })
  .catch((error) => {
    if (error instanceof RangeError) console.log("RangeError");
    else if (error instanceof TypeError) console.log("TypeError");
    else console.log("Other Error");
  });
```

### Error Handling Coding Practices

Above all code are very standard and simple use cases to handle the error. However, when you work on the project. The code maybe not this simple as it is given here. So we need to write some boilerplate codes. Below, I have listed some of the patterns that I follow in my projects.

1. Create **Enum** Class or Error **Constants**
2. Use **localization** from beginning
3. Common **util module or file** to handle logic and generate an error
4. Try to **minimize** try-catch uses, Instead write more unit test cases
5. Catch and Throw a **custom error** on API calls
6. Use **typescript** as much as possible
7. Minimize the use of magic number/string
8. Avoid higher level of **nested object**
9. Avoid global **object pollution**
10. Use [**Error-Boundaries**](https://reactjs.org/docs/error-boundaries.html) as much as possible(React)
11. Proper logging, use **console.error** for error logging.
12. **Log level** to minimize log messages
13. Don’t print **credential** in logs
14. Use **more visuals** than console in the case of WebApps.

<div className="powr-comments" id="93e7bc2a_1599917840" />
