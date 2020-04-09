import React from "react";
import { Button } from "@material-ui/core";

const listTypeOfRent = [
  {
    label: "Day",
    value: "Day",
  },
  {
    label: "Month",
    value: "Month",
  },
  {
    label: "Year",
    value: "Year",
  },
];

const TypeOfRent = ({ selected = "Year", onSelected = (f) => f }) => {
  return (
    <div>
      <h3>Type of Rent</h3>
      {listTypeOfRent.map(({ label, value }) => (
        <Button
          key={value}
          variant="contained"
          onClick={onSelected}
          style={{ marginRight: "37px" }}
          color={value === selected ? "primary" : "default"}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};

export default TypeOfRent;
