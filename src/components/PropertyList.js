import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import PropertyItem from "./PropertyItem";
import { getHouses, loadHouses } from "../store/houses";
import Loading from "./Loading";

const PropertyList = () => {
  const { list, loading, message } = useSelector(getHouses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadHouses);
  }, [dispatch]);

  if (loading) return <Loading />;

  if (message) return <h3>{message}</h3>;

  return (
    <div
      style={{
        flex: 1,
        marginLeft: "50px",
        marginTop: "26px",
      }}
    >
      <Grid container>
        {list.map((property) => (
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
        {list.length === 0 && (
          <div>
            <h3 style={{ textAlign: "center" }}>Tidak Ada Data</h3>
          </div>
        )}
      </Grid>
    </div>
  );
};

export default PropertyList;
