"use client";

import { useEffect, useState } from "react";

const pages = [
  {
    title: "30 seconds of typescript",
    img: "https://source.unsplash.com/400x300/?TypeScript,programming",
    description:
      "Utility library,code snippets like lodash for typescript, typescript react(tsx) and deno [inspired by 30-seconds-of-code].",
    link: "https://decipher.dev/30-seconds-of-typescript/docs/",
  },
  {
    title: "Deno By Example",
    img: "https://source.unsplash.com/400x300/?dinosaur,javascript,animal",
    description: "Tutorial: Learn Web Programming in Deno by Examples\nDeno is a simple, modern and secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust.",
    link: "https://decipher.dev/deno-by-example/",
  },
  {
    title: "Blockchain Introduction",
    img: "https://source.unsplash.com/400x300/?crypto,currency,digital",
    description: "Tutorial: Sample code for blockchain and sample app, Solidity Introduction",
    link: "https://decipher.dev/blockchain-introduction/",
  },
  {
    title: "Code Snippets- By Deepak Vishwakarma",
    img: "https://source.unsplash.com/400x300/?code,programming,coding",
    description: "Code Snippets Game to learn programming languages like Kotlin, Python, JavaScript, Typescript and many more",
    link: "https://decipher.dev/snippets/",
    link: "#",
  },
  {
    title: "Googles Codelabs - Node JS Library",
    img: "https://source.unsplash.com/400x300/?lab,chemistry,beakers,flasks",
    description: "Go Lang claat tool replica written in node js, using marked parser",
    link: "https://decipher.dev/googles-codelabs/",
  },
];
const getContent = (innerHTML) => {
  const d = document.createElement("div");
  d.innerHTML = innerHTML;
  return d.textContent.split("\n").slice(0, 10).join("\n");
};

export default function Home() {
  const [feeds, setFeeds] = useState([]);
  useEffect(() => {
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@deepak-v")
      .then((x) => x.json())
      .then((m) => {
        setFeeds(
          m.items
            .filter((i) => i.categories.length)
            .map((feed) => {
              feed.imageUrl = feed.thumbnail;
              feed.href = feed.guid;
              feed.description = getContent(feed.description);
              feed.updateAt = new Date(...feed.pubDate.split(/[- :]/g).map(Number)).toLocaleDateString();
              return feed;
            })
        );
      });
  }, []);
  return (
    <div className="container">
      <div className="sub">
        <h2>Showcases</h2>
        <div className="cards">
          {pages.map((page) => (
            <PageCard key={`page_${page.title}`} {...page} />
          ))}
        </div>
      </div>
      <div className="sub">
        <h2>Articles</h2>
        <div className="cards">
          {feeds.map((page) => (
            <Article key={`page_${page.title}`} {...page} />
          ))}
        </div>
      </div>
    </div>
  );
}
function PageCard({ title, img, description, link }) {
  return (
    <div className="card">
      <a href={link} target="_blank">
        <img src={img} />
      </a>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <a href={link} target="_blank" className="button control">
        Read more
      </a>
    </div>
  );
}
function Article({ title, href, tags, imageUrl, body, description, media, updateAt }) {
  tags =
    tags ||
    title
      .split(/\s+/)
      .filter((x) => x.length > 2 && !/build|create|using|The|with|working|and|has|Like/i.test(x))
      .slice(0, 4);
  tags = [...new Set(tags)].join(",");
  media = imageUrl || media || `https://source.unsplash.com/400x300/?${tags ? tags : "random"}`;
  body = body || description;

  return (
    <div className="card">
      <a href={href} target="_blank">
        <img src={media} />
      </a>
      <div className="content">
        <h3>{title}</h3>
        <p>{body}</p>
        <small className="time">
          <b>Last Update: </b> {updateAt}
        </small>
        <small className="tags">
          <b>Tags </b> {tags}
        </small>
      </div>
      <a href={href} target="_blank" className="button control">
        Learn more
      </a>
    </div>
  );
}
