import React, { useState, useEffect } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { SingleBed, Bathtub } from "@material-ui/icons";

import PropertyImage from "../components/PropertyImage";
import HeaderDetail from "../components/HeaderDetail";
import BookNow from "../components/BookNow";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getHouseById, getHouses, loadHouseById } from "../store/houses";

const DetailProperty = () => {
  const { id } = useParams();
  const house = useSelector(getHouseById(id));
  const { loading } = useSelector(getHouses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadHouseById(id));
  }, [dispatch, id]);

  return (
    <div>
      <HeaderDetail />
      {loading && (
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
      )}
      {!loading && !house && <h3>Tidak Ada Rumah</h3>}

      {!loading && house && (
        <div style={styles.container}>
          <PropertyImage images={house.images} />
          <div style={styles.containerDetail}>
            <h1>{house.name}</h1>
            <Grid container>
              <Grid item md={8}>
                <h2>
                  Rp.{" "}
                  {new Intl.NumberFormat("id-ID", {
                    maximumSignificantDigits: 3,
                  }).format(house.price)}{" "}
                  / {house.typeRent}
                </h2>
                <p>{house.address}</p>
              </Grid>
              <Grid item md={4}>
                <Grid container>
                  <Grid item xs={4}>
                    <p>Bedrooms</p>
                    <div style={styles.feature}>
                      <b style={styles.textFeature}>{house.bedRoom}</b>{" "}
                      <SingleBed />
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    <p>Bathrooms</p>{" "}
                    <div style={styles.feature}>
                      <b style={styles.textFeature}>{house.bathroom}</b>
                      <Bathtub />
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    <p>Area</p>{" "}
                    <div>
                      <b style={styles.textFeature}>{house.area} </b>
                      <b>ft</b>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <div style={styles.description}>
              <h3>Description</h3>
              <p>{description}</p>
            </div>
            <div style={styles.action}>
              {/*
                <BookNow propertyID={id} />
                */}
            </div>
          </div>
        </div>
      )}
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

const description =
  "Voluptate deserunt adipisicing commodo sunt consectetur officia cillum enim velit ullamco consectetur ad cupidatat laborum. Magna quis ipsum nostrud exercitation excepteur sit dolor excepteur excepteur ullamco laboris id esse qui. Veniam incididunt et ea sit nulla dolore ipsum fugiat qui laborum. Dolor elit reprehenderit aliquip velit ullamco magna et minim voluptate minim dolore. Proident adipisicing non laboris incididunt.";

export default DetailProperty;
