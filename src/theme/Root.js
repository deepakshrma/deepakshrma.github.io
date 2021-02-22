import React, { useEffect } from "react";
import { getColors } from "../components/theme";
import { ThemeProvider } from "styled-components";

// Default implementation, that you can customize
function Root({ children }) {
  const theme = getColors();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Root;
