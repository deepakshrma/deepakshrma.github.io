import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Articles, Feature } from "../components/Article";
import Button from "../components/Button";
import { Gallery, HeroBanner } from "../components/styled.components";
import { getColors, updatesColors } from "../components/theme";
import { PaletteBox } from "../components/ThemeBox";
import { SectionTitle, SubTitle } from "../components/Typograpgy";
import useInitApp, { useFetchRecords } from "../hooks/useFirebaseDB";
import { requestJSON } from "../util";
import styles from "./styles.module.css";

const images = [
  {
    original: "https://source.unsplash.com/1600x1200/?light,imagination",
    // thumbnail: "https://source.unsplash.com/600x400/?light,dark",
  },
  {
    original: "https://source.unsplash.com/1600x1200/?innovation,fire",
    // thumbnail: "https://source.unsplash.com/600x400/?innovation,batman",
  },
  {
    original: "https://source.unsplash.com/1600x1200/?colors,nature",
    // thumbnail: "https://source.unsplash.com/600x400/?colors,nature",
  },
  {
    original: "https://source.unsplash.com/1600x1200/?water,life.kids",
    // thumbnail: "https://source.unsplash.com/600x400/?water,life,kids",
  },
  {
    original: "https://source.unsplash.com/1600x1200/?people,portrait,bubble",
    // thumbnail: "https://source.unsplash.com/600x400/?people,portrait,bubble",
  },
  {
    original: "https://source.unsplash.com/user/deepak_v/1600x1200",
    // thumbnail: "https://source.unsplash.com/user/deepak_v/600x400",
  },
];
const getContent = (innerHTML: string) => {
  const d = document.createElement("div");
  d.innerHTML = innerHTML;
  return d.textContent.split("\n").slice(0, 10).join("\n");
};
function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const [poems, setPoems] = React.useState([]);
  const [features, setFeatures] = React.useState([]);
  const [feeds, setFeeds] = React.useState([]);
  const [theme, setTheme] = React.useState(getColors());
  useInitApp();
  const records = useFetchRecords("notes");
  React.useEffect(() => {
    requestJSON(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@deepak_v"
    ).then((m: any) => {
      setFeeds(
        m.items
          .filter((i: any) => i.categories.length)
          .map((feed) => {
            feed.imageUrl = feed.thumbnail;
            feed.href = feed.guid;
            feed.description = getContent(feed.description);
            feed.updateAt = new Date(
              ...feed.pubDate.split(/[- :]/g).map(Number)
            ).toLocaleString("en-US");
            return feed;
          })
      );
    });
  }, []);
  React.useEffect(() => {
    setFeatures(records.filter((x) => x.type === "feature"));
    setPoems(records.filter((x) => x.type === "poem"));
  }, [records]);
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HeroBanner>
        <SubTitle>{siteConfig.title}</SubTitle>
        <SectionTitle>{siteConfig.tagline}</SectionTitle>
        <Button
          variant="outlined"
          rel="noreferrer noopener"
          color="primary"
          href={useBaseUrl("blog/")}
        >
          Learn More
        </Button>
        <PaletteBox
          onThemeToggle={(colorPallete: any, name: string) => {
            setTheme(getColors({ base: colorPallete }));
            updatesColors(getColors({ base: colorPallete }));
          }}
        />
      </HeroBanner>
      <main className={styles.bgContent}>
        <SubTitle>Showcase</SubTitle>
        <section className={styles.features}>
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </section>
        <section>
          <SubTitle>Medium Feeds</SubTitle>
          <Articles items={feeds} flowable />
        </section>
        <section>
          <SubTitle>Poems</SubTitle>
          <Articles items={poems} flowable />
        </section>
        <section>
          <SubTitle>Random Photos</SubTitle>
          <Gallery>
            <ImageGallery
              items={images}
              autoPlay
              showThumbnails={false}
              onClick={() =>
                window.open("https://unsplash.com/@deepak_v", "_blank")
              }
            />
          </Gallery>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
