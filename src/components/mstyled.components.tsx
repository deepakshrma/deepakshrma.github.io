import { styled as mstyled } from "@material-ui/core/styles";

import _Card from "@material-ui/core/Card";
import { Typography as _Typography } from "@material-ui/core";

export const Typography = mstyled(_Typography)({
  textAlign: "center",
});
export const Card = mstyled(_Card)({
  minWidth: 345,
  marginTop: 20,
});