import React from "react";
import { Button } from "@material-ui/core";

const listBedroom = [
  {
    label: "1",
    value: 1,
  },
  {
    label: "2",
    value: 2,
  },
  {
    label: "3",
    value: 3,
  },
  {
    label: "4",
    value: 4,
  },
  {
    label: "5+",
    value: 5,
  },
];
const listBathroom = [
  {
    label: "1",
    value: 1,
  },
  {
    label: "2",
    value: 2,
  },
  {
    label: "3",
    value: 3,
  },
  {
    label: "4",
    value: 4,
  },
  {
    label: "5+",
    value: 5,
  },
];

const PropertyRoom = ({ bedroomSelected = 2, bathroomSelected = 3 }) => {
  return (
    <div>
      <h3>Property Room</h3>
      <div>
        <p>Bedroom</p>
        {listBedroom.map(({ label, value }) => (
          <Button
            key={value}
            variant="contained"
            style={{ marginRight: "25px" }}
            color={value === bedroomSelected ? "primary" : "default"}
          >
            {label}
          </Button>
        ))}
      </div>

      <div>
        <p>Bathroom</p>
        {listBathroom.map(({ label, value }) => (
          <Button
            key={value}
            variant="contained"
            style={{ marginRight: "25px" }}
            color={value === bathroomSelected ? "primary" : "default"}
          >
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default PropertyRoom;
