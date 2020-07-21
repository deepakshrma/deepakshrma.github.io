import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import styled from "styled-components"

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`
const Photos = styled.a`
  width: 30%;
  text-decoration: none;
  margin-right: 20px;
  img {
    width: 100%;
    object-fit: cover;
  }
`

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
  const [poems, setPoems] = React.useState([])
  React.useEffect(() => {
    fetch("https://raw.githubusercontent.com/deepakshrma/json_data/master/poems.json").then(x => x.json()).then(setPoems)
  },[])
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
          <p className={styles.poemsHeader}>
            Random Photos
          </p>
          <CardList>
            <Photos href="https://unsplash.com/@deepak_v" target="_blank">
              <img src="https://source.unsplash.com/user/deepak_v/600x400"></img>
            </Photos>
            <Photos href="https://unsplash.com/@deepak_v" target="_blank">
              <img src="https://source.unsplash.com/600x400/?light,dark"></img>
            </Photos>
            <Photos href="https://unsplash.com/@deepak_v" target="_blank">
              <img src="https://source.unsplash.com/600x400/?innovation,people"></img>
            </Photos>
          </CardList>
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
