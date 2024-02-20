import { uniqueBy } from "@deepakvishwakarma/ts-util";

const getContent = (innerHTML) => {
  const d = document.createElement("div");
  d.innerHTML = innerHTML;
  return d.textContent.split("\n").slice(0, 10).join("\n");
};

const info = (...messages) =>
  console.log(`%c ${messages.toString()} `, "background: #155724; color: #fff");

export const getFeeds = async () => {
  const [mfeeds, hfeeds] = await Promise.all([
    getMediumFeeds(),
    getHashFeeds(),
  ]);
  return mfeeds.concat(hfeeds);
};

export const getHashFeeds = async (topic = "blockchain") => {
  const query = `{
    tag(slug: "${topic}") {
      id
      name
      slug
      logo
      tagline
      info {
        markdown
        html
        text
      }
      followersCount
      postsCount
      posts(first: 10, filter: {sortBy: popular}) {
        edges {
          node {
            title
            brief
            url
            author {
              name
            }
            tags {
              name
            }
            coverImage {
              url
            }
            reactionCount
            publishedAt
          }
        }
      }
    }
  }`;

  const {
    data: { tag: { posts: { edges } } = { posts: { edges: [] } } },
  } = await fetch("https://gql.hashnode.com/", {
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ query }),
    method: "POST",
    mode: "cors",
    credentials: "include",
  }).then((x) => x.json());
  return edges.map((edge) => {
    const {
      title,
      url: guid,
      brief: description,
      author: { name: author },
      tags,
      coverImage,
      reactionCount,
      publishedAt,
    } = edge.node;
    return {
      source: "HASHNODE",
      title,
      author,
      categories: tags?.map(({ name }) => name?.replace(/^#/, "")),
      description,
      guid,
      href: guid,
      updateAt: new Date(publishedAt).toLocaleDateString(),
      imageUrl: coverImage?.url || "",
      reactionCount,
    };
  });
};
export const getMediumFeeds = async () => {
  const today = new Date();
  const preDay = today;
  preDay.setHours(0, 0, 0, 0);
  if (!localStorage["blog-feeds"]) {
    localStorage["blog-feeds"] = JSON.stringify({
      items: [],
      lastUpdated: preDay.getTime() - 1,
    });
  }

  const blogFeeds = JSON.parse(localStorage["blog-feeds"]);

  if (preDay.getTime() > blogFeeds.lastUpdated) {
    info("getting freshed");
    let { items } = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@deepak-v",
    ).then((x) => x.json());
    items = items
      .filter((i) => i.categories.length)
      .map((feed) => {
        feed.imageUrl = feed.thumbnail;
        feed.href = feed.link;
        feed.description = getContent(feed.description);
        feed.updateAt = new Date(feed.pubDate).toLocaleDateString();
        return feed;
      });
    localStorage["blog-feeds"] = JSON.stringify({
      items,
      lastUpdated: Date.now(),
    });
    return items;
  } else {
    info("get cached");
    return blogFeeds.items;
  }
};

export const MAX_POEM_LINES = 8;

export const getPoems = async (tag) => {
  const poems = await fetch(`https://poetrydb.org/title,random/${tag};7`).then(
    (x) => x.json(),
  );
  return uniqueBy(poems, (a, b) => a.title === b.title).slice(0, 5);
};
