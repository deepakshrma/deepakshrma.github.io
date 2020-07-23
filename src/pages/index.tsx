import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}
export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};
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
  @media ${device.laptop} { 
    width: 60%';
    margin: 0 auto;
    max-width: 800px;
  }
`
const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const Photos = styled.a`
  width: 30%;
  text-decoration: none;
  margin-right: 20px;
  img {
    width: 100%;
    object-fit: cover;
  }
  @media only screen and (max-width: 1281px) {
    width: 100%;
    padding: 20px;
    margin-right: 0px;
  }
`;

const features = [
  {
    title: <>Deno by Examples</>,
    imageUrl: "https://decipher.dev/deno-by-example/img/home_page_dino.jpg",
    description: <>Tutorial: Learn Web Programming in Deno by Examples</>,
    href: "/deno-by-example/",
  },
  {
    title: <>30 Seconds of Typescript</>,
    imageUrl:
      "https://raw.githubusercontent.com/deepakshrma/30-seconds-of-typescript/master/assets/icon_128x128.png",
    description: (
      <>
        Utility library,code snippets like lodash for typescript,
        typescriptreact(tsx) and deno [inspired by 30-seconds-of-code].
      </>
    ),
    href: "/30-seconds-of-typescript/",
  },
  {
    title: <>Googles Codelabs- Clone</>,
    imageUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAATXAJzZEtpMKWPkkfbpfdkBBsKlxsa5KsXr471zBg%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1",
    description: (
      <>Go Lang claat tool replica written in node js, using marked parser</>
    ),
    href: "/googles-codelabs/",
  },
];

function Feature({ imageUrl, title, description, href }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <a
      className={clsx("col col--4", styles.feature)}
      href={href}
      target="_blank"
    >
      <div>
        {imgUrl && (
          <div className="text--center">
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </div>
        )}
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const [poems, setPoems] = React.useState([]);
  React.useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/deepakshrma/json_data/master/poems.json"
    )
      .then((x) => x.json())
      .then(setPoems);
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
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <section>
          <p className={styles.poemsHeader}>Random Photos</p>
          <Gallery>
            <ImageGallery items={images}  autoPlay showThumbnails={false} onClick={() => window.open("https://unsplash.com/@deepak_v", '_blank')}/>
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
