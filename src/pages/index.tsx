import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styled from "styled-components";
import { Articles, Feature } from "../components/Article";
import { device } from "../components/device";
import { InvertedText, SecondaryBtn } from "../components/mstyled.components";
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

const Gallery = styled.div`
  padding: 20px;
  @media ${device.laptopL} { 
    width: 60%';
    margin: 0 auto;
    max-width: 800px;
  }
`;

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const [poems, setPoems] = React.useState([]);
  const [features, setFeatures] = React.useState([]);
  const [feeds, setFeeds] = React.useState([]);

  React.useEffect(() => {
    requestJSON(
      "https://raw.githubusercontent.com/deepakshrma/json_data/master/poems.json"
    ).then(setPoems);
    requestJSON(
      "https://raw.githubusercontent.com/deepakshrma/json_data/master/features.json"
    ).then(setFeatures);
    requestJSON(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@deepak_v"
    ).then((m: any) => {
      setFeeds(
        m.items
          .filter((i: any) => i.categories.length)
          .map((feed) => {
            feed.imageUrl = feed.thumbnail;
            feed.href = feed.guid;
            feed.imageUrl = feed.thumbnail;
            feed.updateAt = new Date(
              ...feed.pubDate.split(/[- :]/g).map(Number)
            ).toLocaleString("en-US");
            return feed;
          })
      );
    });
  }, []);
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className={clsx(styles.heroBanner)}>
        <div className={`${styles.container}`}>
          <InvertedText variant="h3">{siteConfig.title}</InvertedText>
          <InvertedText variant="subtitle1" gutterBottom>
            {siteConfig.tagline}
          </InvertedText>
          <SecondaryBtn
            variant="outlined"
            rel="noreferrer noopener"
            color="primary"
            href={useBaseUrl("blog/")}
          >
            Learn More
          </SecondaryBtn>
        </div>
      </header>
      <main className={styles.bgContent}>
        <section className={styles.features}>
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </section>
        <section>
          <p className={styles.poemsHeader}>Medium Feeds</p>
          <Articles items={feeds} flowable />
        </section>
        <section>
          <p className={styles.poemsHeader}>Random Photos</p>
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
        <section className={styles.poems}>
          <p className={styles.poemsHeader}>Poems</p>
          <Articles items={poems} flowable />
        </section>
      </main>
    </Layout>
  );
}

export default Home;
