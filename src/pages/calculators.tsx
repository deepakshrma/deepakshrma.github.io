import { FormControl, makeStyles, MenuItem, Select } from "@material-ui/core";
import Layout from "@theme/Layout";
import React from "react";
import styled from "styled-components";
import { Price, Temperature } from "../components/calculators";
import { SubTitle } from "../components/Typograpgy";

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
  const [type, setType] = React.useState("temperature");
  const handleChange = (event) => {
    setType(event.target.value);
  };
  return (
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
  );
};
export default Calculators;
