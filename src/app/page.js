"use client";

import { useEffect, useState, useDeferredValue, Suspense } from "react";
import dynamic from "next/dynamic";
import { shuffle } from "@deepakvishwakarma/ts-util";
import { getFeeds } from "@/services/feeds";
import { useKeyPress } from "@/services/hooks";
import { POEM_TAGS, PAGES_INFO } from "@/services/util";

const Article = dynamic(() => import("@/components/Article"));
const Modal = dynamic(() => import("@/components/Modal"));
const PageCard = dynamic(() => import("@/components/PageCard"));
const Poem = dynamic(() => import("@/components/Poem"));
const Poems = dynamic(() => import("@/components/Poems"));

export default function Home() {
  const [allFeeds, setAllFeeds] = useState([]);
  const [poemTag, setPoemTag] = useState(shuffle(POEM_TAGS).pop());
  const [selectedPoem, setSelectedPoem] = useState(null);
  const deferredPoemTag = useDeferredValue(poemTag);

  useEffect(() => {
    getFeeds().then((items) => setAllFeeds(items));
  }, []);

  useKeyPress(() => setSelectedPoem(null));

  const feeds = shuffle(allFeeds).slice(0, 5);

  return (
    <div className="container home">
      <div className="sub">
        <h2>Showcases</h2>
        <div className="cards">
          {PAGES_INFO.map((page) => (
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
          Random Poems on <i suppressHydrationWarning>#{deferredPoemTag}</i>
        </h2>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Poems
            tag={deferredPoemTag}
            onPoemSelect={(poem) => setSelectedPoem(poem)}
            onSetPoemTag={(t) => setPoemTag(t)}
          />
        </Suspense>
      </div>
      {selectedPoem && (
        <Modal className="inverted" onClose={() => setSelectedPoem(null)}>
          <Poem {...selectedPoem} full />
        </Modal>
      )}
    </div>
  );
}
