import React from "react";
import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  orange,
  amber,
  deepOrange,
} from "@material-ui/core/colors";
import styled from "styled-components";
import { Tooltip } from "@material-ui/core";

export const colors = [
  [red, pink, purple, deepPurple],
  [indigo, blue, lightBlue, cyan],
  [teal, green, lightGreen, lime],
  [yellow, orange, amber, deepOrange],
];
const colorsStrings = [
  ["red", "pink", "purple", "deepPurple"],
  ["indigo", "blue", "lightBlue", "cyan"],
  ["teal", "green", "lightGreen", "lime"],
  ["yellow", "orange", "amber", "deepOrange"],
];
const Row = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  padding: 20px;
`;
const PaletteBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
const ColorBox = styled.span`
  display: flex;
`;
const Link = styled.a`
  color: var(--ifm-color-primary-light);
  text-align: center;
`;

export const PaletteBox = ({ onThemeToggle }: any) => {
  return (
    <Container>
      <PaletteBoxContainer>
        {colors.map((row: any[], rowNum: number) => {
          return (
            <Row key={`rowNum_${rowNum}`}>
              {row.map((c, colNum) => (
                <Tooltip
                  title={colorsStrings[rowNum][colNum]}
                  aria-label={colorsStrings[rowNum][colNum]}
                  key={`colNum_${colNum}`}
                >
                  <ColorBox
                    onClick={() => {
                      onThemeToggle(c);
                      localStorage.setItem("baseTheme", `${rowNum}${colNum}`);
                    }}
                    style={{ background: c[500], width: 40, height: 40 }}
                  ></ColorBox>
                </Tooltip>
              ))}
            </Row>
          );
        })}
        <Link>Pick a Theme</Link>
      </PaletteBoxContainer>
    </Container>
  );
};
