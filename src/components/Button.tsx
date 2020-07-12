import styled from "styled-components";
import { props } from "./theme";

const Button = styled.button`
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
`;

export default Button;
