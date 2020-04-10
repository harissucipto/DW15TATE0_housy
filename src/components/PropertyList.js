import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";

import PropertyItem from "./PropertyItem";
import data from "../constants/data.json";

const listData = Array(9).fill(1);

const PropertyList = () => {
  const [properies, setProperties] = useState([]);
  useEffect(() => {
    setProperties(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      style={{
        flex: 1,
        marginLeft: "50px",
        marginTop: "26px",
      }}
    >
      <Grid container>
        {properies.map((property, index) => (
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
      </Grid>
    </div>
  );
};

export default PropertyList;
