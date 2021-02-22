import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        borderRadius: 3,
        border: 0,
        color: "white",
        height: 48,
        padding: "0 30px",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      },
    },
  },
  typography: { useNextVariants: true },
});

function AboutMe() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <MuiThemeProvider theme={theme}>
      <Layout
        title={`About ${siteConfig.title}`}
        description={`${siteConfig.tagline}`}
      >
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
          <Typography variant="overline" display="block" gutterBottom>
            {siteConfig.tagline}
          </Typography>
        </header>
        <main></main>
      </Layout>
    </MuiThemeProvider>
  );
}

export default AboutMe;
