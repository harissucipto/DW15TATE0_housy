import React from "react";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const listTypeOfRent = [
  {
    label: "Day",
    value: "day",
  },
  {
    label: "Month",
    value: "month",
  },
  {
    label: "Year",
    value: "year",
  },
];

const TypeOfRent = ({ selected, onSelected }) => {
  const handleChange = (value) => () => {
    if (value === selected) {
      onSelected("");
      return;
    }
    onSelected(value);
  };

  return (
    <div>
      <h3>Type of Rent</h3>
      <Grid container spacing={4}>
        {listTypeOfRent.map(({ label, value }) => (
          <Grid item key={value}>
            <Button
              variant="contained"
              onClick={handleChange(value)}
              color={value === selected ? "primary" : "default"}
            >
              {label}
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default TypeOfRent;
