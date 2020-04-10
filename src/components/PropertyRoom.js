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

const PropertyRoom = ({
  bedroomSelected,
  onSelectedBedroom,
  bathroomSelected,
  onSelectedBaths,
}) => {
  const handleChangeBedroom = (value) => () => {
    if (value === bedroomSelected) {
      onSelectedBedroom(null);
      return;
    }
    onSelectedBedroom(value);
  };
  const handleChangeBaths = (value) => () => {
    if (value === bathroomSelected) {
      onSelectedBaths(null);
      return;
    }
    onSelectedBaths(value);
  };

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
            onClick={handleChangeBedroom(value)}
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
            onClick={handleChangeBaths(value)}
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
