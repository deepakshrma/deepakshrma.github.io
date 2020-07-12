import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

import Button from "../components/Button";
import { P, SubTitle, Section, UL } from "../components/Typograpgy";
import { Container, HR, Gutter } from "../components/Layout";

import theme, { GlobalStyle, props } from "../components/theme";
const ThemeController = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  height: 60px;
  border-top: 1px solid ${props("color_primary_darkest")};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const themes = [{ ...theme, bg_color: theme.bg_color_invert }, theme];
function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const [tm, setTm] = useState(themes[1]);
  return (
    <ThemeProvider theme={() => tm}>
      <GlobalStyle />
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description={`${siteConfig.tagline}`}
      >
        <Container>
          <ThemeController>
            <Button
              style={{ marginRight: 12 }}
              onClick={() => {
                setTm(themes[0]);
              }}
            >
              Tech
            </Button>
            <Button
              onClick={() => {
                setTm(themes[1]);
              }}
            >
              Non-Tech
            </Button>
          </ThemeController>

          <SubTitle>About Me</SubTitle>
          <HR />
          <Section>{siteConfig.tagline}</Section>
          <UL>
            <li>
              Polyglot Programmer Efficiently can work on UI/UX(Frontend),
              Backend and Mobile apps
            </li>
            <li>Mobile: Android, Flutter, React Native, Swift(Beginner)</li>
            <li>
              Frontend: React, Angular, Typescript, Object-Oriented JavaScript,
              ES2015 and above
            </li>
            <li>Backend: NodeJs, Kotlin, Go, SpringBoot, Rust</li>
            <li>
              DevOps: Proficient on scripting languages(Groovy, bash, nodejs),
              Jenkin
            </li>
            <li>
              Test-Driven Development using Jest, Karma-Jasmine, Protractor,
              Expresso, Mockito
            </li>
          </UL>
          <Link to={useBaseUrl("docs/resume")}>
            <Button> More{" >>>"} </Button>
          </Link>
          <Gutter />
          <SubTitle>Blogs</SubTitle>
          <HR />
          <UL>
            <Link to={useBaseUrl("/blog/one-for-all")}>
              <li>
                How to ditch WebPack, Jest to write TypeScript/NPM library just
                using Deno
              </li>
            </Link>
            <Link to={useBaseUrl("blog/welcome")}>
              <li>Welcome</li>
            </Link>
          </UL>
          <Link to={useBaseUrl("blog")}>
            <Button> More{" >>>"} </Button>
          </Link>
          <FooterContainer>
            <a href="https://www.linkedin.com/in/xdeepakv/" target="_blank">
              Linkedin
            </a>
            <a href="https://medium.com/@deepak_v" target="_blank">
              Medium
            </a>
            <a href="https://discord.com/channels/@deepakv" target="_blank">
              Discord
            </a>
            <a href="https://github.com/deepakshrma/" target="_blank">
              GitHub
            </a>
          </FooterContainer>
        </Container>
      </Layout>
    </ThemeProvider>
  );
}

export default Home;
