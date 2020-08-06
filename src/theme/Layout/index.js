/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useState, useEffect } from "react";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemeProvider from "@theme/ThemeProvider";
import UserPreferencesProvider from "@theme/UserPreferencesProvider";
import AnnouncementBar from "@theme/AnnouncementBar";
import Navbar from "@theme/Navbar";
import Footer from "@theme/Footer";

import { ThemeProvider as StyledThemeProvider } from "styled-components";
import "./styles.css";
import { getColors } from "../../components/theme";

function Providers({ children }) {
  return (
    <ThemeProvider>
      <UserPreferencesProvider>{children}</UserPreferencesProvider>
    </ThemeProvider>
  );
}

function Layout(props) {
  const { siteConfig = {} } = useDocusaurusContext();
  const {
    favicon,
    title: siteTitle,
    themeConfig: { image: defaultImage },
    url: siteUrl,
  } = siteConfig;
  const {
    children,
    title,
    noFooter,
    description,
    image,
    keywords,
    permalink,
    version,
    theme = getColors(),
  } = props;
  const metaTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const metaImage = image || defaultImage;
  const metaImageUrl = useBaseUrl(metaImage, {
    absolute: true,
  });
  const faviconUrl = useBaseUrl(favicon);
  const [tm, setTheme] = useState(theme);
  useEffect(() => {
    setTimeout(() => setTheme(theme), 100);
  }, [theme]);
  return (
    <Providers>
      <Head>
        {/* TODO: Do not assume that it is in english language */}
        <html lang="en" />

        {metaTitle && <title>{metaTitle}</title>}
        {metaTitle && <meta property="og:title" content={metaTitle} />}
        {favicon && <link rel="shortcut icon" href={faviconUrl} />}
        {description && <meta name="description" content={description} />}
        {description && (
          <meta property="og:description" content={description} />
        )}
        {version && <meta name="docsearch:version" content={version} />}
        {keywords && keywords.length && (
          <meta name="keywords" content={keywords.join(",")} />
        )}
        {metaImage && <meta property="og:image" content={metaImageUrl} />}
        {metaImage && <meta property="twitter:image" content={metaImageUrl} />}
        {metaImage && (
          <meta name="twitter:image:alt" content={`Image for ${metaTitle}`} />
        )}
        {permalink && <meta property="og:url" content={siteUrl + permalink} />}
        {permalink && <link rel="canonical" href={siteUrl + permalink} />}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <AnnouncementBar />
      <Navbar />
      <StyledThemeProvider theme={tm}>
        <div className="main-wrapper">{children}</div>
      </StyledThemeProvider>
      {!noFooter && <Footer />}
    </Providers>
  );
}

export default Layout;
