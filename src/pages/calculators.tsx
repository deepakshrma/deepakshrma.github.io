import React from "react";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styled, { ThemeProvider } from "styled-components";
import { getColors } from "../components/theme";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import { SubTitle } from "../components/Typograpgy";
import { Temperature, Price } from "../components/calculators";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    maxWidth: 400,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  > div {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    margin-top: 20px;
  }
`;
const Calculators = () => {
  const classes = useStyles();
  const [theme, setTheme] = React.useState(getColors());

  const [type, setType] = React.useState("temperature");

  const handleChange = (event) => {
    setType(event.target.value);
  };
  return (
    <ThemeProvider theme={theme}>
      <Layout title="Calculators" description="Basic useful calculators">
        <Container>
          <FormControl className={classes.formControl}>
            <SubTitle>SELECT YOUR CALCULATOR</SubTitle>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              onChange={handleChange}
            >
              <MenuItem value={"temperature"}>Temperature</MenuItem>
              <MenuItem value={"price"}>Price Discount</MenuItem>
            </Select>
          </FormControl>
          {type === "temperature" ? <Temperature /> : <Price />}
        </Container>
      </Layout>
    </ThemeProvider>
  );
};
export default Calculators;
