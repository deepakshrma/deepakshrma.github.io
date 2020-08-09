import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { device } from "./device";
export const props = (prop: string) => (props: any) => props.theme[prop];

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const FeatureContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  padding: 2rem;
  flex-wrap: wrap;
`;

export const Gallery = styled.div`
  padding: 20px;
  @media ${device.laptopL} {
    width: 60%;
    margin: 0 auto;
    max-width: 800px;
  }
`;

export const HeroBanner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  h1,
  h2,
  h3,
  h4 {
    text-align: center;
  }
  button,
  a {
    align-self: center;
    width: 300px;
  }
`;

export const P = styled.p`
  color: ${(props) => props.theme.color_primary};
`;
export const SubTitle = styled.h2`
  color: ${(props) => props.theme.color_primary};
`;
export const SectionTitle = styled.h4`
  color: ${(props) => props.theme.color_primary};
  font-weight: 600;
`;
export const UL = styled.ul`
  color: ${(props) => props.theme.color_primary_darker};
  list-style: square;
`;
export const Typography = ({ variant }: { variant: string }) => {
  switch (variant) {
    default:
      return null;
  }
};
export const ArticlesHeader = styled.h3``;

export const Button = styled.button`
  border: 1px solid ${props("color_primary_darker")};
  background: ${props("bg_color")};
  height: 40px;
  min-width: 100px;
  color: ${props("color_primary")};
  cursor: pointer;
  font-weight: 600;
  border-radius: ${props("margin_sm")};
  outline: none;
  box-shadow: none;
  font-size: 20px;
`;

export const FluidContainer = styled.div`
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

export const GlobalStyle = createGlobalStyle`
  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
`;
export const PaddedContainer = styled.div`
  padding: 20px;
`;
export const PaletteBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
export const ColorBox = styled.span`
  display: flex;
`;
export const Link = styled.a`
  color: var(--ifm-color-primary-light);
  text-align: center;
`;
export const CalcContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  > div {
    /* width: 80%; */
    margin: 0 auto;
    text-align: center;
    margin-top: 20px;
    width: 100%;
    @media ${device.laptopL} {
      padding: 20px 30px;
    }
    padding: 10px;
  }
`;

export const Main = styled.main``;
export const Section = styled.section`
  padding: 20px 40px;
`;
export const Header = styled.h2``;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 800px;
  * {
    margin-bottom: 10px;
  }
`;
