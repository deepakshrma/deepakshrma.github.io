import { debounce, uniqueBy } from "@deepakvishwakarma/ts-util";

export const copyToClipboard = async (text) => {
  await navigator.clipboard.writeText(`${text}site: ${location.href}`);
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
    description: "Tutorial: Sample code for blockchain and sample app, Solidity Introduction",
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
    description: "Go Lang claat tool replica written in node js, using marked parser",
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
  return Object.entries(props)
    .filter(([key, value]) => value)
    .map(([key]) => key)
    .join(" ");
};
export const filterTags = (title, tags, maxTags = 4) => {
  tags =
    tags ||
    title
      .split(/\W+/)
      .map((x) => x.match(/\w+/)?.[0].replace(/\W/, "").toLowerCase() ?? "")
      .filter((x) => x.length > 2 && !/build|Sonnet|create|using|The|For|with|working|and|has|have|Like|Let|\d|\s+/i.test(x))
      .slice(0, maxTags);
  tags = uniqueBy(tags, (a, b) => a === b);
  return tags;
};

const MAX_CHARS = 50;
export const trimText = (s, maxLen = MAX_CHARS) => `${s.replace(/.+(:|-) /, "").slice(0, maxLen)}${s.length > maxLen ? "..." : ""}`;

export const onDoubleClick = (fn) => {
  const dfn = debounce(fn);
  return (e) => {
    console.log(e);
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

export const onKeyPress = (fn, code = "Enter") => {
  return (e) => {
    console.log(e)
    if (e.code == code) {
      fn(e);
    }
  };
};

export const swapById = (id1, id2, data) => {
  const index1 = data.findIndex((x) => String(x.id) === String(id1));
  const index2 = data.findIndex((x) => String(x.id) === String(id2));
  let cData = [...data];
  const tmp = cData[index1];
  cData[index1] = cData[index2];
  cData[index2] = tmp;
  return cData;
};
