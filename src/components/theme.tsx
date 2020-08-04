import { indigo } from "@material-ui/core/colors";
import React from "react";
import { createGlobalStyle } from "styled-components";

export const getColors = (theme: any = { base: indigo }) => {
  return {
    margin_md: "8px",
    margin_sm: "4px",
    margin_lg: "12px",
    bg_color: "#fff",
    bg_color_invert: "#000",
    color_primary: theme.base[500],
    color_primary_dark: theme.base[600],
    color_primary_darker: theme.base[700],
    color_primary_darkest: theme.base[800],
    color_primary_light: theme.base[400],
    color_primary_lighter: theme.base[300],
    color_primary_lightest: theme.base[200],
  };
};

export const updatesColors = (colors: any) => {
  document.documentElement.style.setProperty(
    "--ifm-color-primary",
    colors.color_primary
  );
  document.documentElement.style.setProperty(
    "--ifm-color-primary-dark",
    colors.color_primary_dark
  );
  document.documentElement.style.setProperty(
    "--ifm-color-primary-darker",
    colors.color_primary_darker
  );
  document.documentElement.style.setProperty(
    "--ifm-color-primary-darkest",
    colors.color_primary_darkest
  );
  document.documentElement.style.setProperty(
    "--ifm-color-primary-light",
    colors.color_primary_light
  );
  document.documentElement.style.setProperty(
    "--ifm-color-primary-lighter",
    colors.color_primary_lighter
  );
  document.documentElement.style.setProperty(
    "--ifm-color-primary-lightest",
    colors.color_primary_lightest
  );
};

export const theme = getColors();
export const props = (prop: string) => (props: any) => props.theme[prop];
export const GlobalStyle = createGlobalStyle`
  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
`;
export default theme;

export const baseTheme: any = {
  base: indigo,
};

export const ThemeContext = React.createContext(baseTheme);
