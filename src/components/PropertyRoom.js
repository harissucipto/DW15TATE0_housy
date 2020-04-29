import React from "react";
import { Button, Grid } from "@material-ui/core";

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
        <Grid container spacing={4}>
          {listBedroom.map(({ label, value }) => (
            <Grid item key={value}>
              <Button
                disabled
                key={value}
                variant="contained"
                onClick={handleChangeBedroom(value)}
                color={value === bedroomSelected ? "primary" : "default"}
              >
                {label}
              </Button>
            </Grid>
          ))}
        </Grid>
      </div>

      <div>
        <p>Bathroom</p>
        <Grid container spacing={4}>
          {listBathroom.map(({ label, value }) => (
            <Grid item key={value}>
              <Button
                disabled
                variant="contained"
                onClick={handleChangeBaths(value)}
                color={value === bathroomSelected ? "primary" : "default"}
              >
                {label}
              </Button>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default PropertyRoom;
