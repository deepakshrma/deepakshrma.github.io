import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

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
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
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
      </main>
    </Layout>
  );
}

export default Home;
