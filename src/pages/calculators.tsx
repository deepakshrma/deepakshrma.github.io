import { FormControl, makeStyles, MenuItem, Select } from "@material-ui/core";
import Layout from "@theme/Layout";
import React from "react";
import { Price, Temperature } from "../components/calculators";
import { SubTitle, CalcContainer } from "../components/Typograpgy";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    maxWidth: 400,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));

const Calculators = () => {
  const classes = useStyles();
  const [type, setType] = React.useState("temperature");
  const handleChange = (event) => {
    setType(event.target.value);
  };
  return (
    <Layout
      title="Calculators"
      description="Basic useful calculators(Fever Calculator, Invoice Genrator)"
    >
      <CalcContainer>
        <FormControl className={classes.formControl}>
          <SubTitle>SELECT YOUR CALCULATOR</SubTitle>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            onChange={handleChange}
          >
            <MenuItem value={"temperature"}>Temperature</MenuItem>
            <MenuItem value={"price"}>Invoice Genrator</MenuItem>
          </Select>
        </FormControl>
        {type === "temperature" ? <Temperature /> : <Price />}
      </CalcContainer>
    </Layout>
  );
};
export default Calculators;
