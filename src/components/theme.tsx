import { indigo } from "@material-ui/core/colors";
import { storage } from "../util";
import { colors } from "./ThemeBox";

export const getColors = (theme?: any) => {
  // const [r, c] = (storage("theme-name") || "10").split("");
  const [r, c] = [1, 0];
  if (!theme) {
    theme = { base: colors[Number(r)][Number(c)] };
  }
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

export default {
  margin_md: "8px",
  margin_sm: "4px",
  margin_lg: "12px",
  bg_color: "#fff",
  bg_color_invert: "#000",
  color_primary: indigo[500],
  color_primary_dark: indigo[600],
  color_primary_darker: indigo[700],
  color_primary_darkest: indigo[800],
  color_primary_light: indigo[400],
  color_primary_lighter: indigo[300],
  color_primary_lightest: indigo[200],
};
