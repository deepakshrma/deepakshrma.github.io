const axios = require("axios");
const fs = require("fs");
async function main() {
  const urls = [
    "https://decipher.dev/sitemap.xml",
    "https://decipher.dev/30-seconds-of-typescript/sitemap.xml",
    "https://decipher.dev/deno-by-example/sitemap.xml",
  ];
  let urlStr = "";
  for (let index = 0; index < urls.length; index++) {
    const url = urls[index];
    const res = await axios.get(url);
    urlStr += res.data.match(/\<url\>[\W\w]*\<\/url\>/gi)[0];
  }
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    ${urlStr}
    </urlset>
    `;
  fs.writeFileSync("build/sitemap.xml", xml);
}

main();
