import React from "react";
import { Card, CardContent } from "@material-ui/core";
// import SampleImage from "../images/sample-property.PNG";

const PropertyItem = ({ images, price, typeOfRent, amenities }) => {
  const [image] = images;
  return (
    <Card
      style={{
        width: "100%",
        padding: "10px",
        boxSizing: "border-box",
        borderRadius: "5px",
      }}
      variant="outlined"
    >
      <div
        style={{
          backgroundImage: image && `url("${require(`../images/${image}`)}")`,
          width: "100%",
          height: "180px",
          backgroundSize: "cover",
          position: "relative",
          backgroundColor: "grey",
          borderRadius: "5px",
        }}
        alt="logo"
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "white",
            padding: "4px 11px",
            margin: 16,
            color: "black",
            fontWeight: "bold",
            borderRadius: "3px",
          }}
        >
          {amenities.join(", ")}
        </div>
      </div>
      <CardContent>
        <h2>
          Rp.{" "}
          {new Intl.NumberFormat("id-ID", {
            maximumSignificantDigits: 3,
          }).format(price)}{" "}
          / {typeOfRent}
        </h2>
        <h3>3 Beds, 2 Baths, 1.8000 sqft</h3>
        <p>Tanggerang Selatan, Padak Aren</p>
      </CardContent>
    </Card>
  );
};

export default PropertyItem;
