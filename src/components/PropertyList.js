import React from "react";
import { Grid } from "@material-ui/core";

import PropertyItem from "./PropertyItem";

const listData = Array(9).fill(1);

const PropertyList = () => {
  return (
    <div style={{ flex: 1, marginLeft: "50px", marginTop: "26px" }}>
      <Grid container>
        {listData.map((_, index) => (
          <Grid
            item
            md={6}
            xs={12}
            lg={4}
            key={index}
            style={{
              paddingRight: "27px",
              paddingBottom: "35px",
            }}
          >
            <PropertyItem />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PropertyList;
