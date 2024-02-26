import { uniqueBy } from "@deepakvishwakarma/ts-util";
var xml2js = require("xml2js");
var parser = new xml2js.Parser();
const sites = [
  "https://decipher.dev/30-seconds-of-typescript/sitemap.xml",
  "https://decipher.dev/deno-by-example/sitemap.xml",
  "https://decipher.dev/blockchain-introduction/sitemap.xml",
  "https://decipher.dev/ai-books-blockchain-basics/sitemap.xml",
];
export default async function sitemap() {
  let links = ["/", "/organize-me", "/about-me"].map((path) => ({
    url: `https://decipher.dev${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  }));
  let linkMap = {};
  for (let site of sites) {
    const json = await fetch(site).then((x) => x.text());
    const {
      urlset: { url, urls },
    } = await parser.parseStringPromise(json);
    for (let u of url || urls) {
      if (!linkMap[u.loc[0]]) {
        links.push({
          url: u.loc[0],
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 1,
        });
        linkMap[u.loc[0]] = true;
      }
    }
  }
  return uniqueBy(links, (a, b) => a.url.toLowerCase() == b.url.toLowerCase());
}
