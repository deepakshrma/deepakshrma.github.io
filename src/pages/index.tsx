import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { device } from "../components/device";
import { Typography, Card } from "../components/mstyled.components";
import { requestJSON } from "../util";
import { Articles } from "../components/Article";

import "react-image-gallery/styles/css/image-gallery.css";

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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const openUrl = (href: string) => window.open(href, "_blank");
function Feature({ imageUrl, title, description, href }) {
  const imgUrl = useBaseUrl(imageUrl);
  const classes = useStyles();
  return (
    <a
      className={clsx("col col--4", styles.feature)}
      href={href}
      target="_blank"
    >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={imgUrl} title={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={() => openUrl(href)}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </a>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const [poems, setPoems] = React.useState([]);
  const [features, setFeatures] = React.useState([]);
  const [feeds, setFeeds] = React.useState([]);

  React.useEffect(() => {
    requestJSON(
      "https://raw.githubusercontent.com/deepakshrma/json_data/master/poems.json"
    )
      .then((x) => {
        return x.map((y, i) => {
          y.imageUrl = (images[i] || images[0]).original;
          return y;
        });
      })
      .then(setPoems);
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
        <div className={`container ${styles.container}`}>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("blog/")}
            >
              Learn More
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            {features.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </section>
        )}
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
        <p className={styles.poemsHeader}>Poems</p>
        <section className={styles.poems}>
          <Articles items={poems} />
        </section>
      </main>
    </Layout>
  );
}

export default Home;
