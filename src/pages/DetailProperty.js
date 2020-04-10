import React from "react";
import { Grid } from "@material-ui/core";
import { SingleBed, Bathtub } from "@material-ui/icons";

import PropertyImage from "../components/PropertyImage";
import HeaderDetail from "../components/HeaderDetail";
import BookNow from "../components/BookNow";

const property = {
  images: new Array(10).fill(1),
  name: "House Astina",
  price: 9000000,
  bedrooms: 3,
  bathrooms: 3,
  area: 1800,
  address:
    "Jl. Elang IV Perum Permata Bintaro Residence, Pondok Aren,Tangerang Selatan",
  description:
    "Quis velit quis esse culpa ut esse tempor fugiat. Consequat dolore et qui ipsum voluptate. Pariatur enim aliqua consequat consectetur anim. Adipisicing quis qui laboris ipsum deserunt in anim duis nostrud Lorem esse incididunt. Reprehenderit minim id reprehenderit fugiat tempor amet deserunt ad laborum. Nisi anim culpa amet amet. Magna voluptate tempor labore sunt cupidatat fugiat deserunt in laborum sunt proident.",
};

const DetailProperty = () => {
  return (
    <div>
      <HeaderDetail />
      <div style={styles.container}>
        <PropertyImage images={property.images} />
        <div style={styles.containerDetail}>
          <h1>{property.name}</h1>
          <Grid container>
            <Grid item md={8}>
              <h2>Rp. 9.000.000 / Year</h2>
              <p>{property.address}</p>
            </Grid>
            <Grid item md={4}>
              <Grid container>
                <Grid item xs={4}>
                  <p>Bedrooms</p>
                  <div style={styles.feature}>
                    <b style={styles.textFeature}>{property.bedrooms}</b>{" "}
                    <SingleBed />
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <p>Bathrooms</p>{" "}
                  <div style={styles.feature}>
                    <b style={styles.textFeature}>{property.bathrooms}</b>
                    <Bathtub />
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <p>Area</p>{" "}
                  <div>
                    <b style={styles.textFeature}>{property.area} </b>
                    <b>ft</b>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div style={styles.description}>
            <h3>Description</h3>
            <p>{property.description}</p>
          </div>
          <div style={styles.action}>
            <BookNow />
          </div>
        </div>
      </div>
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
