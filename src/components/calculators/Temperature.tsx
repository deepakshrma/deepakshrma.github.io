import {
  InputAdornment,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import clsx from "clsx";
import React from "react";
import theme from "../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const units = {
  f: "°F",
  c: "°C",
};
export default function Temperature(props: any) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    fromTemp: 30,
    toTemp: 0,
  });
  const handleChange = (prop) => (event) => {
    const val = event.target.value;
    let state: any = {
      [prop]: val,
    };
    if (prop === "fromTemp") {
      const calval = (9 * Number(val)) / 5 + 32 || 0;
      state.toTemp =
        Math.abs(calval - Math.round(calval)) > 0 ? calval.toFixed(1) : calval;
    } else {
      const calval = ((Number(val) - 32) * 5) / 9 || 0;
      state.fromTemp =
        Math.abs(calval - Math.round(calval)) > 0 ? calval.toFixed(1) : calval;
    }
    setValues({ ...values, ...state });
  };

  return (
    <div>
      <Typography gutterBottom variant="h2">
        Fever Calculator
      </Typography>
      <TextField
        label="Celsius"
        id="outlined-start-adornment"
        value={values.fromTemp}
        className={clsx(classes.margin, classes.textField)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{units.c}</InputAdornment>
          ),
        }}
        onChange={handleChange("fromTemp")}
        variant="outlined"
      />
      <TextField
        label="Fahrenheit"
        id="outlined-start-adornment"
        value={values.toTemp}
        className={clsx(classes.margin, classes.textField)}
        onChange={handleChange("toTemp")}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{units.f}</InputAdornment>
          ),
        }}
        variant="outlined"
      />
      <br />
      <br />
      {values.fromTemp >= 40 ? (
        <Alert severity="error" variant="filled">
          Please visit the nearest Hospital. Maybe you are sick.
        </Alert>
      ) : values.fromTemp >= 38 ? (
        <Alert severity="warning" variant="filled">
          Please watch your temperature for some time. You have a slight fever.
        </Alert>
      ) : values.fromTemp > 30 ? (
        <Alert severity="success" variant="filled">
          All looks good. You are fit and healthy.
        </Alert>
      ) : null}
    </div>
  );
}
