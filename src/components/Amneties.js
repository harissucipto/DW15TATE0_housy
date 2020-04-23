import React from "react";
import { Checkbox } from "@material-ui/core";

const listAmneties = [
  {
    label: "Furnished",
    value: "Furnished",
  },
  {
    label: "Pet Allowed",
    value: "Pet Allowed",
  },
  {
    label: "Shared Accomodation",
    value: "Shared Accomodation",
  },
];

const Amneties = ({ data, onChecked }) => {
  const handleChange = (prop) => (evt) => {
    onChecked({
      ...data,
      [prop]: evt.target.checked,
    });
  };
  return (
    <div>
      <h3>Amenities</h3>
      {listAmneties.map(({ label, value }) => (
        <div
          key={value}
          variant="contained"
          style={{
            marginRight: "25px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p>{label} </p>
          <Checkbox
            disabled
            color="primary"
            onChange={handleChange(value)}
            checked={data[value]}
          />
        </div>
      ))}
    </div>
  );
};

export default Amneties;
