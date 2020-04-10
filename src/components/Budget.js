import React from "react";
import { Grid, TextField } from "@material-ui/core";

const Budget = ({ value, onChange }) => {
  const handleChange = (evt) => {
    const valueOfNumber = Number(evt.target.value) > 0 ? evt.target.value : "";
    onChange(valueOfNumber);
  };
  return (
    <div>
      <h3>Budget</h3>
      <Grid container spacing={1}>
        <Grid
          xs={4}
          item
          style={{
            justifyContent: "flex-end",
            display: "flex",
            alignItems: "center",
          }}
        >
          <h5>Less than IDR.</h5>
        </Grid>
        <Grid xs={8} item>
          <TextField
            value={value}
            onChange={handleChange}
            fullWidth
            variant="filled"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Budget;
