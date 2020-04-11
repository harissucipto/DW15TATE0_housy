import React from "react";
import { Grid } from "@material-ui/core";

const PropertyImage = ({ images = [] }) => {
  const [heroImage, ...restImages] = images;

  return (
    <div>
      <div
        style={{
          ...styles.heroImage,
          backgroundImage:
            Boolean(heroImage) && `url("${require(`../images/${heroImage}`)}")`,
        }}
      />
      <Grid container>
        {restImages.slice(0, 3).map((image, index) => (
          <Grid
            item
            key={index}
            xs={4}
            style={
              restImages.length > 3 && index === 2
                ? {
                    position: "relative",
                  }
                : {
                    paddingRight: "7px",
                  }
            }
          >
            <div
              style={{
                ...styles.restImages,
                backgroundImage:
                  Boolean(image) && `url("${require(`../images/${image}`)}")`,
              }}
            >
              {restImages.length > 3 && index === 2 ? (
                <div style={styles.moreImages}>
                  <h5>+{restImages.length - 3}</h5>
                </div>
              ) : null}
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const styles = {
  heroImage: {
    width: "100%",
    height: "362px",
    backgroundColor: "grey",
    backgroundSize: "cover",
    marginBottom: "7px",
  },
  restImages: {
    width: "100%",
    height: "168px",
    backgroundColor: "grey",
  },
  moreImages: {
    width: "100%",
    height: "168px",
    backgroundColor: "rgba(0, 0, 0, 10%)",
    position: "absolute",
    color: "white",
    fontSize: "3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default PropertyImage;
