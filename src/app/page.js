"use client";

import { useEffect, useState } from "react";

const pages = [
  {
    title: "30 seconds of typescript",
    img: "typescript.webp",
    description:
      "Utility library,code snippets like lodash for typescript, typescriptreact(tsx) and deno [inspired by 30-seconds-of-code].",
    link: "https://decipher.dev/30-seconds-of-typescript/docs/",
  },
  {
    title: "Deno By Example",
    img: "https://cdn.deno.land/autopilot/versions/0.4.0/raw/docs/logo.png",
    description: "Tutorial: Learn Web Programming in Deno by Examples",
    link: "https://decipher.dev/deno-by-example/",
  },
  {
    title: "Blockchain Introduction",
    img: "https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg",
    description: "Tutorial: Sample code for blockchain and sample app, Solidity Introduction",
    link: "https://decipher.dev/blockchain-introduction/",
  },
  {
    title: "Code Snippets- By Deepak Vishwakarma",
    img: "https://static.vecteezy.com/system/resources/previews/002/099/443/non_2x/programming-code-coding-or-hacker-background-programming-code-icon-made-with-binary-code-digital-binary-data-and-streaming-digital-code-vector.jpg",
    description: "Code Snippets Game to learn programming languages like Kotlin, Python, JavaScript, Typescript and many more",
    link: "https://decipher.dev/snippets/",
    link: "#",
  },
  {
    title: "Googles Codelabs - Node JS Library",
    img: "https://wallpaperaccess.com/full/909067.jpg",
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
              feed.updateAt = new Date(...feed.pubDate.split(/[- :]/g).map(Number)).toLocaleString("en-US");
              return feed;
            })
        );
      });
  }, []);
  console.log(feeds)
  return (
    <div className="container">
      <div className="sub">
        <h2>Showcase</h2>
        <div className="cards">
          {pages.map((page) => (
            <PageCard key={`page_${page.title}`} {...page} />
          ))}
        </div>
      </div>
      <div className="sub">
        <h2>Articles</h2>
        <div className="cards articles">
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
      <a href={link} target="_blank"><img src={img} /></a>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" className="button">
          Read more
        </a>
      </div>
    </div>
  );
}
function Article({ title, href, tags, imageUrl, body, description,  media }) {
  tags =
    tags ||
    title
      .split(/\s+/)
      .filter((x) => x.length > 2)
      .join(",");
  media = imageUrl || media || `https://source.unsplash.com/1600x1200/?${tags ? tags : "random"}`;
  body = body || description;

  return (
    <div className="card">
      <a href={href} target="_blank"><img src={media} /></a>
      <div className="content">
        <h3>{title}</h3>
        <p>{body}</p>
        <a href={href} target="_blank" className="button">
          Learn more
        </a>
      </div>
    </div>
  );
}
{
  /* <div className="bg-white flex min-h-screen flex-col items-center justify-between p-12">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Deepak Vishwakarma
      </h1>
      <h2 className="mb-4 text-2xl text-gray-900 md:text-3xl lg:text-4xl dark:text-white my-20">Showcase</h2>
      <div className="page-cards">
        {pages.map((page) => (
          <PageCard key={`page_${page.title}`} {...page} />
        ))}
      </div>
      <h2 className="mb-4 text-2xl text-gray-900 md:text-3xl lg:text-4xl dark:text-white my-20">Blogs/Articles</h2>
      <div className="page-cards">
        {feeds.map((feed) => (
          <FeedCard key={`page_${feed.title}`} {...feed} />
        ))}
      </div>
    </div> */
}
/*
function FeedCard({ title, href, tags, imageUrl, body, description, link, media }) {
  tags =
    tags ||
    title
      .split(/\s+/)
      .filter((x) => x.length > 2)
      .join(",");
  media = imageUrl || media || `https://source.unsplash.com/1600x1200/?${tags ? tags : "random"}`;
  body = body || description;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={media} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{body}</p>
        <a
          target="_blank"
          href={href}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
        </a>
      </div>
    </div>
  );
}
function PageCard({ title, img, description, link }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={img} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <a
          target="_blank"
          href={link}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
        </a>
      </div>
    </div>
  );
}
*/
