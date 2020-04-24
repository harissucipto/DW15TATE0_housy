import React from "react";
import { Card, CardContent } from "@material-ui/core";
import { useHistory } from "react-router-dom";

// import SampleImage from "../images/sample-property.PNG";

const PropertyItem = ({
  id,
  images = [""],
  price,
  typeRent,
  ameneties,
  bedRoom,
  bathroom,
  area,
  address,
}) => {
  const history = useHistory();
  const handleNavigate = (id) => () => history.push(`/detail-property/${id}`);

  const [image] = images;

  return (
    <Card
      style={{
        width: "100%",
        padding: "10px",
        boxSizing: "border-box",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      variant="outlined"
      onClick={handleNavigate(id)}
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
            margin: 16,
            color: "black",
            fontWeight: "bold",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {ameneties &&
            ameneties.map((item) => (
              <span
                style={{
                  backgroundColor: "white",
                  marginRight: "5px",
                  marginBottom: "5px",
                  padding: "4px 11px",
                  borderRadius: "3px",
                }}
                key={item}
              >
                {item}
              </span>
            ))}
        </div>
      </div>
      <CardContent>
        <h2>
          Rp.{" "}
          {new Intl.NumberFormat("id-ID", {
            maximumSignificantDigits: 3,
          }).format(price)}{" "}
          / {typeRent}
        </h2>
        <h3>
          {" "}
          {bedRoom} Beds, {bathroom} Baths, {area} sqft
        </h3>
        <p>{address}</p>
      </CardContent>
    </Card>
  );
};

export default PropertyItem;
