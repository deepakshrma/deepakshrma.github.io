import { createGlobalStyle } from "styled-components";

const theme = {
  color_primary: "#e54e79",
  color_primary_dark: "#e54e79",
  color_primary_darker: "#df265b",
  color_primary_darkest: "#bb1c49",
  color_primary_light: "#e9698d",
  color_primary_lighter: "#eb7697",
  color_primary_lightest: "#f19eb6",
  margin_md: "8px",
  margin_sm: "4px",
  margin_lg: "12px",
  bg_color: "#fff",
  bg_color_invert: "#000",
};
export const props = (prop: string) => (props: any) => props.theme[prop];
export const GlobalStyle = createGlobalStyle`
  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
`;
export default theme;
