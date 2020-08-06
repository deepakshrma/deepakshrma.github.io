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
import { Tooltip } from "@material-ui/core";
import {
  PaletteBoxContainer,
  Row,
  PaddedContainer,
  ColorBox,
  Link,
} from "./Typograpgy";

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

export const PaletteBox = ({ onThemeToggle }: any) => {
  return (
    <PaddedContainer>
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
                    onClick={() => onThemeToggle(c, `${rowNum}${colNum}`)}
                    style={{ background: c[500], width: 40, height: 40 }}
                  />
                </Tooltip>
              ))}
            </Row>
          );
        })}
        <Link>Pick a Theme</Link>
      </PaletteBoxContainer>
    </PaddedContainer>
  );
};
