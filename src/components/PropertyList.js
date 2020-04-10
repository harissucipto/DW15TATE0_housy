import React from "react";
import { Grid } from "@material-ui/core";
import { useStoreState } from "easy-peasy";

import PropertyItem from "./PropertyItem";

const filterProperties = (
  data,
  { searchLocation = "", typeOfRent, bedrooms, amenities, budget }
) => {
  return data.filter((data) => {
    const isLocation = data.address
      .toLowerCase()
      .includes(searchLocation.toLowerCase());
    const isTypeOfRent = !Boolean(typeOfRent)
      ? true
      : data.typeOfRent === typeOfRent;
    const isBedroom = !Boolean(bedrooms) ? true : data.bedrooms === bedrooms;
    const isAmenities = Object.values(amenities).every((value) => !value)
      ? true
      : Object.keys(amenities)
          .filter((item) => amenities[item])
          .every((item) => data.amenities.includes(item));

    const isBudget = !Boolean(budget) ? true : data.price <= Number(budget);
    return isLocation && isTypeOfRent && isBedroom && isAmenities && isBudget;
  });
};

const PropertyList = () => {
  const { data, searchLocation, filter } = useStoreState(
    ({ properties }) => properties
  );

  return (
    <div
      style={{
        flex: 1,
        marginLeft: "50px",
        marginTop: "26px",
      }}
    >
      <Grid container>
        {filterProperties(data, { searchLocation, ...filter }).map(
          (property, index) => (
            <Grid
              item
              md={6}
              xs={12}
              lg={4}
              key={property.id}
              style={{
                paddingRight: "27px",
                paddingBottom: "35px",
              }}
            >
              <PropertyItem {...property} />
            </Grid>
          )
        )}
        {data.length === 0 && (
          <div>
            <h3 style={{ textAlign: "center" }}>Tidak Ada Data</h3>
          </div>
        )}
      </Grid>
    </div>
  );
};

export default PropertyList;
