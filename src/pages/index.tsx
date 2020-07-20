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

const links = [
  { label: "GitHub", href: "https://github.com/deepakshrma" },
  { label: "Medium", href: "https://medium.com/@deepak_v" },
  { label: "Twitter", href: "https://twitter.com/nalayakshrma" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/nalayaksharma_poetry/",
  },
];
const poems = [
  {
    title: "Light",
    href: "https://www.instagram.com/p/CAk-ycMpF2o/",
    body: `ɪᴛ ɪꜱ ᴛɪᴍᴇ ᴛᴏ ʟᴇᴀʀɴ ꜰʀᴏᴍ ᴛʜᴇ ᴘᴀꜱᴛ, ɪᴛ ɪꜱ ᴛɪᴍᴇ ᴛᴏ ᴡᴏʀᴋ ʀᴇᴀʟ ʜᴀʀᴅ, ᴛʜᴇ ᴍɪꜱᴛᴀᴋᴇ ɪꜱ ᴡʜᴀᴛ ᴡᴇ ʜᴀᴠᴇ ᴅᴏɴᴇ, ᴛʜᴇ ꜰᴜᴛᴜʀᴇ ɪꜱ ᴡʜᴀᴛ ᴍᴀᴋᴇꜱ ᴜꜱ ꜱᴛᴜɴɴᴇᴅ.
𝐼𝓉 𝒾𝓈 𝓉𝒾𝓂𝑒 𝓉𝑜 𝑔𝑜 𝓉𝑜 𝒷𝒶𝓈𝒾𝒸𝓈, 𝐼𝓉 𝒾𝓈 𝓉𝒾𝓂𝑒 𝓉𝑜 𝓉𝒽𝒾𝓃𝓀 𝓅𝑜𝓈𝒾𝓉𝒾𝓋𝑒, 𝒯𝒽𝑒 𝒻𝒾𝓇𝑒 𝓌𝑒 𝒽𝒶𝓋𝑒 𝒷𝓊𝓇𝓃𝑒𝒹, 𝒯𝒽𝑒 𝒻𝑒𝓃𝒸𝑒 𝓌𝑒 𝒽𝒶𝓋𝑒 𝒹𝓇𝒶𝓌𝓃.
ᴡᴇ ᴀʀᴇ ʟɪᴠɪɴɢ ɪɴ ᴛʜᴇ ᴡᴏʀʟᴅ ꜰᴜʟʟ ᴏꜰ ʜᴀᴛᴇꜱ, ᴡᴇ ᴀʀᴇ ʟɪᴠɪɴɢ ɪɴ ꜱᴏᴄɪᴇᴛʏ ᴡᴇᴀʀ ᴍᴀꜱᴋꜱ ᴏꜰ ꜰᴀᴋᴇ, ɪᴛ ɪꜱ ᴛɪᴍᴇ ᴛᴏ ʀɪᴘ ᴛʜᴏꜱᴇ ᴍᴀᴋᴇꜱ ᴏꜰꜰ, ɪᴛ ɪꜱ ᴛɪᴍᴇ ᴛᴏ ᴄʀᴇᴀᴛᴇ ᴀ ꜱᴇʟꜰ ᴡʜɪᴄʜ ᴡᴏʀᴛʜ.`,
  },
  {
    title:"Lady in the dark",
    href:"https://www.instagram.com/p/B7FHYKaJ6dR/",
    body: `Yesterday i was laying on body of some unknown,
Today i'm laying on the body of someone i hardy know.
Yesterday i had to smile fake on less knowing facts,
Today i'm smiling to talk i hardly interest at.
Yesterday i had to answer the questions that i hate,
Today i had to create questions to avoid debate.
Yesterday also i was conveniencing myself, May be today is last day of my sadness and pain
Today also i'm cheating everyone else including myself,
May be this is the last man on my bed.`
  },
  {
    title: "Waqt Ke Sath Sab Badal Gaya",
    href: "https://www.instagram.com/p/B6uWm3npR3V/",
    body:`वो उसे चाहते चाहते,
वक़्त के साथ अपना सब कुछ बदल दिया |
उस बदली दौर में उसे पता नहीं चला, कब उसने उसे अपने जान से किसी और में बदल दिया ||`,
  }
  
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
        <section className={styles.poems}>
          <p className={styles.poemsHeader}>Poems</p>
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
      <footer>
        <div className={styles.footer}>
          <div>
            <p className="link-header">Follow Me</p>
            {links.map((link: any, index: number) => {
              return (
                <a href={link.href} target="_blank" key={index}>
                  {link.label}
                </a>
              );
            })}
          </div>
          <img src="/img/logo_decipher.png" alt="" />
          <p>
            <span>
              <span>©</span>&nbsp;2020&nbsp;DeCipher.dev
            </span>
          </p>
        </div>
      </footer>
    </Layout>
  );
}

export default Home;
