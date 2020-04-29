import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { SingleBed, Bathtub } from "@material-ui/icons";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getHouseById, getHouses, loadHouseById } from "../store/houses";
import PropertyImage from "../components/PropertyImage";
import HeaderDetail from "../components/HeaderDetail";
import BookNow from "../components/BookNow";
import Loading from "../components/Loading";

const DetailProperty = () => {
  const { id } = useParams();
  const house = useSelector(getHouseById(id));
  const { loading, message } = useSelector(getHouses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadHouseById(id));
  }, [dispatch, id]);

  return (
    <div className="rumah">
      <HeaderDetail />
      {loading && <Loading />}
      {!loading && !house && <h3>Tidak Ada Rumah</h3>}
      {message && <h3>{message}</h3>}

      {!loading && house && (
        <div className="sub-rumah">
          <PropertyImage images={new Array(7).fill("")} />
          <div style={styles.containerDetail}>
            <h1>{house.name}</h1>
            <Grid container>
              <Grid item xs={12} sm={8} md={8}>
                <h2>
                  Rp.{" "}
                  {new Intl.NumberFormat("id-ID", {
                    maximumSignificantDigits: 3,
                  }).format(house.price)}{" "}
                  / {house.typeRent}
                </h2>
                <p>{house.address}</p>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <Grid container spacing={2}>
                  <Grid item>
                    <p>Bedrooms</p>
                    <div style={styles.feature}>
                      <b style={styles.textFeature}>{house.bedRoom}</b>{" "}
                      <SingleBed />
                    </div>
                  </Grid>
                  <Grid item>
                    <p>Bathrooms</p>{" "}
                    <div style={styles.feature}>
                      <b style={styles.textFeature}>{house.bathroom}</b>
                      <Bathtub />
                    </div>
                  </Grid>
                  <Grid item>
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
              <BookNow id={house.id} typeRent={house.typeRent} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
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
