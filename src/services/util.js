import { debounce, uniqueBy } from "@deepakvishwakarma/ts-util";
import { sendGAEvent } from "@next/third-parties/google";

export const copyToClipboard = async (text) => {
  await navigator.clipboard.writeText(`${text}site: ${location.href}`);
  sendGAEvent({ event: "share", value: text.split("\n")[0] });
  console.log("copied: ", text);
};
let isShareOpen = false;
export const share = async ({ title, text, tag = "", url }) => {
  const shareData = {
    title: `${tag}: ${title}`,
    text,
    url,
  };
  if (isShareOpen) return;
  try {
    isShareOpen = true;
    console.info(shareData);
    await navigator.share(shareData);
    sendGAEvent({ event: "share", value: title.split("\n")[0] });
    console.log(`${tag}: ${title} shared successfully`);
  } catch (err) {
    console.error(err);
  }
  isShareOpen = false;
};
export const PAGES_INFO = [
  {
    title: "30 seconds of typescript",
    img: "https://source.unsplash.com/400x300/?react,animation,programming",
    description:
      "Utility library,code snippets like lodash for typescript, typescript react(tsx) and deno [inspired by 30-seconds-of-code].",
    link: "https://decipher.dev/30-seconds-of-typescript/docs/",
  },
  {
    title: "Deno By Example",
    img: "https://source.unsplash.com/400x300/?dinosaur,javascript,animal,animation",
    description:
      "Tutorial: Learn Web Programming in Deno by Examples\nDeno is a simple, modern and secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust.",
    link: "https://decipher.dev/deno-by-example/",
  },
  {
    title: "Blockchain Introduction",
    img: "https://source.unsplash.com/400x300/?crypto,currency,digital,animation",
    description:
      "Tutorial: Sample code for blockchain and sample app, Solidity Introduction",
    link: "https://decipher.dev/blockchain-introduction/",
  },
  // {
  //   title: "Code Snippets- By Deepak Vishwakarma",
  //   img: "https://source.unsplash.com/400x300/?code,programming,coding",
  //   description: "Code Snippets Game to learn programming languages like Kotlin, Python, JavaScript, Typescript and many more",
  //   link: "https://decipher.dev/snippets/",
  //   link: "#",
  // },
  {
    title: "Googles Codelabs - Node JS Library",
    img: "https://source.unsplash.com/400x300/?lab,chemistry,beakers,flasks,animation",
    description:
      "Go Lang claat tool replica written in node js, using marked parser",
    link: "https://decipher.dev/googles-codelabs/",
  },
];
export const POEM_TAGS = [
  "time",
  "love",
  "day",
  "light",
  "night",
  "man",
  "world",
  "sex",
  "long",
  "eyes",
  "life",
  "water",
  "hand",
  "white",
  "air",
  "body",
  "dark",
  "face",
  "dead",
  "heart",
  "years",
  "left",
  "god",
  "sky",
  "sun",
  "wind",
];
export const cls = (props = {}) => {
  return Object.keys(props)
    .filter((k) => props[k])
    .map((k) => k)
    .join(" ");
};
export const filterTags = (title, tags, maxTags = 3) => {
  let t = [];
  if (tags?.length) {
    t = tags.join(" ");
  } else {
    t = title;
  }
  t = t
    .split(/\W+/)
    .map((x) => x.match(/\w+/)?.[0].replace(/\W/, "").toLowerCase() ?? "")
    .filter(
      (x) =>
        x.length > 2 &&
        !/build|Sonnet|create|using|The|For|with|working|and|has|have|Like|Let|\d|\s+/i.test(
          x,
        ),
    )
    .slice(0, maxTags);
  return uniqueBy(t, (a, b) => a === b);
};

const MAX_CHARS = 50;
export const trimText = (s, maxLen = MAX_CHARS) =>
  `${s.replace(/.+(:|-) /, "").slice(0, maxLen)}${s.length > maxLen ? "..." : ""}`;

export const onDoubleClick = (fn) => {
  const dfn = debounce(fn);
  return (e) => {
    switch (e.detail) {
      case 1:
        dfn(e, false);
        break;
      case 2:
        dfn(e, true);
        break;
    }
  };
};

export const onKeyPress =
  (fn, code = "Enter") =>
  (e) =>
    e.code == code && fn(e);

export const reOrderByIndex = (srcId, targetId, data) => {
  const srcIndex = data.findIndex((x) => String(x.id) === String(srcId));
  // const targeIndex = data.findIndex((x) => String(x.targetId) === String(targetId));
  const src = data[srcIndex];
  const result = [];

  for (let item of data) {
    if (String(item.id) === String(srcId)) {
      //skip
      continue;
    }
    if (String(item.id) === String(targetId)) {
      result.push(src);
      result.push(item);
    } else {
      result.push(item);
    }
  }

  return result;
};
if (typeof navigator !== "undefined" && "serviceWorker" in navigator) {
  navigator.serviceWorker.register("/serviceworker.js");
}
