import styled from "styled-components";
import { props } from "./theme";

export const Container = styled.div`
  padding: 10px 20px;
  background: ${props("bg_color")};
  min-height: 100vh;
`;
export const HR = styled.div`
  height: 1px;
  background: ${props("color_primary")};
  margin: ${props("margin_sm")} 0 ${props("margin_md")} 0;
`;
export const Gutter = styled.div`
  height: ${props("margin_lg")};
`;