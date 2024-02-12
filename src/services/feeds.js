import { uniqueBy } from "@deepakvishwakarma/ts-util";

const getContent = (innerHTML) => {
  const d = document.createElement("div");
  d.innerHTML = innerHTML;
  return d.textContent.split("\n").slice(0, 10).join("\n");
};

const info = (...messages) => console.log(`%c ${messages.toString()} `, "background: #155724; color: #fff");
const error = (...messages) => console.log(`%c ${messages.toString()} `, "background: #721c24; color: #fff");

export const getFeeds = async () => {
  const today = new Date();
  const preDay = today;
  preDay.setHours(0, 0, 0, 0);
  if (!localStorage["blog-feeds"]) {
    localStorage["blog-feeds"] = JSON.stringify({ items: [], lastUpdated: preDay.getTime() - 1 });
  }
  const blogFeeds = JSON.parse(localStorage["blog-feeds"]);

  if (preDay.getTime() > blogFeeds.lastUpdated) {
    info("getting freshed");
    let items = await fetch("https://v1.nocodeapi.com/xdeepakv/medium/YsuyXwnSNggSzPAc").then((x) => x.json());
    items = items
      .filter((i) => i.category.length)
      .map((feed) => {
        feed.imageUrl = feed.thumbnail;
        feed.href = feed.link;
        feed.description = getContent(feed.description);
        feed.updateAt = new Date(feed.published).toLocaleDateString();
        return feed;
      });
    localStorage["blog-feeds"] = JSON.stringify({ items, lastUpdated: Date.now() });
    return items;
  } else {
    error("get cached");
    return blogFeeds.items;
  }
};
export const MAX_POEM_LINES = 8;

export const getPoems = async (tag) => {
  const poems = await fetch(`https://poetrydb.org/title,random/${tag};7`).then((x) => x.json());
  return uniqueBy(poems, (a, b) => a.title === b.title).slice(0, 5);
};
