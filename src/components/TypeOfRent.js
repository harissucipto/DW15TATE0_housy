import React from "react";
import { Button } from "@material-ui/core";

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
      {listTypeOfRent.map(({ label, value }) => (
        <Button
          key={value}
          variant="contained"
          onClick={handleChange(value)}
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
