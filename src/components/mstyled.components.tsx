import { styled } from "@material-ui/core/styles";

import _Card from "@material-ui/core/Card";
import { Typography as _Typography, Button } from "@material-ui/core";

export const Typography = styled(_Typography)({
  textAlign: "center",
});
export const Card = styled(_Card)({
  minWidth: 345,
  marginTop: 20,
});

export const InvertedText = styled(Typography)({
  backgroundColor: "#fff",
  color: "var(--ifm-color-primary-lightest)",
});

export const SecondaryBtn = styled(Button)({
  backgroundColor: "#fff",
  ["&:hover"] :{ 
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  }
});
