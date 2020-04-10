import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { useStoreState } from "easy-peasy";

import PropertyItem from "./PropertyItem";

const PropertyList = () => {
  const { data } = useStoreState(({ properties }) => properties);

  return (
    <div
      style={{
        flex: 1,
        marginLeft: "50px",
        marginTop: "26px",
      }}
    >
      <Grid container>
        {data.map((property, index) => (
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
        ))}
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
