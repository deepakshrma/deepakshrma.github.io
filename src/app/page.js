"use client";

import { getFeeds, getPoems } from "@/services/feeds";
import { useEffect, useState, useDeferredValue, Suspense } from "react";
import { shuffle } from "@deepakvishwakarma/ts-util";
import Modal from "../components/Modal";

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
    description:
      "Tutorial: Learn Web Programming in Deno by Examples\nDeno is a simple, modern and secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust.",
    link: "https://decipher.dev/deno-by-example/",
  },
  {
    title: "Blockchain Introduction",
    img: "https://source.unsplash.com/400x300/?crypto,currency,digital",
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
    img: "https://source.unsplash.com/400x300/?lab,chemistry,beakers,flasks",
    description: "Go Lang claat tool replica written in node js, using marked parser",
    link: "https://decipher.dev/googles-codelabs/",
  },
];

const poemTags = [
  "time",
  "love",
  "day",
  "light",
  "night",
  "man",
  "world",
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

const cls = (props = {}) => {
  return Object.entries(props)
    .filter(([key, value]) => value)
    .map(([key]) => key)
    .join(" ");
};

export default function Home() {
  const [allFeeds, setAllFeeds] = useState([]);
  const [poemTag, setPoemTag] = useState(shuffle(poemTags).pop());
  const [selectedPoem, setSelectedPoem] = useState(null);
  const deferredPoemTag = useDeferredValue(poemTag);

  // const [maxItems, setMaxItems] = useState(10);
  useEffect(() => {
    getFeeds().then((items) => {
      setAllFeeds(items);
      // setMaxItems(Math.min(items.length, maxItems));
    });
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setSelectedPoem(null);
      }
    });
  }, []);

  const onPoemOpen = (index) => setPoemIndex(index);
  const feeds = shuffle(allFeeds).slice(0, 5);

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
        <h2>Recent Articles</h2>
        <div className="cards">
          {feeds.map((page) => (
            <Article key={`page_${page.title}`} {...page} />
          ))}
        </div>
      </div>
      <div className="sub">
        <h2>
          Random Poems on <i suppressHydrationWarning>#{poemTag}</i>
        </h2>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Poems tag={deferredPoemTag} onPoemSelect={(poem) => setSelectedPoem(poem)} onSetPoemTag={(t) => setPoemTag(t)} />
        </Suspense>
      </div>
      {selectedPoem && (
        <Modal onClose={() => setSelectedPoem(null)}>
          <Poem {...selectedPoem} full />
        </Modal>
      )}
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

const filterTags = (title, tags, maxTags = 3) => {
  tags =
    tags ||
    title
      .split(/\s+/)
      .map((x) => x.match(/\w+/)?.[0].replace(/\W/, "") ?? "")
      .filter((x) => x.length > 2 && !/build|create|using|The|For|with|working|and|has|have|Like|Let|\d|\s+/i.test(x))
      .slice(0, maxTags);
  tags = [...new Set(tags)];
  return tags;
};

function Article({ title, href, tags, imageUrl, description, body = description, media, updateAt }) {
  const filteredTags = filterTags(title, tags).join(",");
  media = imageUrl || `https://source.unsplash.com/400x300/?${filteredTags ? filteredTags : "random"}`;

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
          <b>Tags </b> {filteredTags}
        </small>
      </div>
      <a href={href} target="_blank" className="button control">
        Learn more
      </a>
    </div>
  );
}

const MAX_POEM_LINES = 10;

function Poem({ title, lines, index, full, onPoemOpen, onTagChange }) {
  const filteredTags = filterTags(title, null, 3);
  const media = `https://source.unsplash.com/600x400/?${filteredTags}`;
  const body = lines.slice(0, MAX_POEM_LINES).join("\n");
  return (
    <div className={cls({ card: true, poem: true, full })}>
      <div className="cover" style={{ backgroundImage: `url(${media})` }} />
      <div className="content">
        <h3>{title}</h3>
        <pre>{body}</pre>
        <div className="tags">
          {filteredTags.map((tag) => (
            <span className="tag" key={`${title}__tag___${tag}__`} onClick={() => !full && onTagChange(tag)}>
              #{tag}
            </span>
          ))}
        </div>

        {lines.length > MAX_POEM_LINES && !full && (
          <button className="button read-more" onClick={onPoemOpen}>
            Full Poem
          </button>
        )}
      </div>
    </div>
  );
}
function Poems({ tag, onPoemSelect, onSetPoemTag }) {
  const [poems, setPoems] = useState([]);
  useEffect(() => {
    getPoems(tag).then((poems) => setPoems(poems));
  }, [tag]);

  return (
    <div className="cards">
      {poems.map((poem, index) => (
        <Poem
          {...poem}
          key={`poem___${poem.title}___${index}`}
          onPoemOpen={() => onPoemSelect(poem)}
          onTagChange={(tag) => onSetPoemTag(tag)}
        />
      ))}
    </div>
  );
}
