import React, { useState, useEffect } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { SingleBed, Bathtub } from "@material-ui/icons";

import PropertyImage from "../components/PropertyImage";
import HeaderDetail from "../components/HeaderDetail";
import BookNow from "../components/BookNow";
import { useParams } from "react-router-dom";
import { useStoreActions } from "easy-peasy";

const DetailProperty = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { getProperty } = useStoreActions(({ properties }) => properties);

  useEffect(() => {
    const data = getProperty(id);
    setData(data);
    setLoading(false);
  }, [getProperty, id]);

  return (
    <div>
      <HeaderDetail />
      {loading && !Boolean(data) ? (
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <CircularProgress />
        </div>
      ) : null}

      {Boolean(data) && !loading ? (
        <div style={styles.container}>
          <PropertyImage images={data.images} />
          <div style={styles.containerDetail}>
            <h1>{data.name}</h1>
            <Grid container>
              <Grid item md={8}>
                <h2>
                  Rp.{" "}
                  {new Intl.NumberFormat("id-ID", {
                    maximumSignificantDigits: 3,
                  }).format(data.price)}{" "}
                  / {data.typeOfRent}
                </h2>
                <p>{data.address}</p>
              </Grid>
              <Grid item md={4}>
                <Grid container>
                  <Grid item xs={4}>
                    <p>Bedrooms</p>
                    <div style={styles.feature}>
                      <b style={styles.textFeature}>{data.bedrooms}</b>{" "}
                      <SingleBed />
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    <p>Bathrooms</p>{" "}
                    <div style={styles.feature}>
                      <b style={styles.textFeature}>{data.baths}</b>
                      <Bathtub />
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    <p>Area</p>{" "}
                    <div>
                      <b style={styles.textFeature}>{data.area} </b>
                      <b>ft</b>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <div style={styles.description}>
              <h3>Description</h3>
              <p>{data.description}</p>
            </div>
            <div style={styles.action}>
              <BookNow propertyID={id} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1018px",
    margin: "0 auto",
  },
  containerDetail: {
    margin: "2em",
  },
  description: {
    marginTop: "10px",
  },
  action: {
    display: "flex",
    marginTop: "15px",
    justifyContent: "flex-end",
  },
  feature: {
    display: "flex",
    alignItems: "center",
  },
  textFeature: {
    paddingRight: "5px",
  },
};

export default DetailProperty;
