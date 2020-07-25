import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import Mediumfeeds from "../components/Mediumfeeds";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import "react-image-gallery/styles/css/image-gallery.css";
import { device } from "../components/device";
import { Container } from "../components/styled.components";
import { Typography, Card } from "../components/mstyled.components";

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
    original: "https://source.unsplash.com/user/deepak_v/1600x1200",
    // thumbnail: "https://source.unsplash.com/user/deepak_v/600x400",
  },
  {
    original: "https://source.unsplash.com/1600x1200/?water,life.kids",
    // thumbnail: "https://source.unsplash.com/600x400/?water,life,kids",
  },
  {
    original: "https://source.unsplash.com/1600x1200/?people,portrait,bubble",
    // thumbnail: "https://source.unsplash.com/600x400/?people,portrait,bubble",
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

  React.useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/deepakshrma/json_data/master/poems.json"
    )
      .then((x) => x.json())
      .then(setPoems);
    fetch(
      "https://raw.githubusercontent.com/deepakshrma/json_data/master/features.json"
    )
      .then((x) => x.json())
      .then(setFeatures);
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
              Get Started
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
          <Mediumfeeds />
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
          <div className={styles.products}>
            {poems.map((poem, index) => {
              return (
                <a href={poem.href} target="_blank">
                  <div className={styles.product} key={`poem_${index}`}>
                    <h4 className={styles.productHeader}>{poem.title}</h4>
                    <pre className={styles.productBody}>{poem.body}</pre>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
