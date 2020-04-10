import React from "react";
import { Card, CardContent } from "@material-ui/core";
import { useHistory } from "react-router-dom";

// import SampleImage from "../images/sample-property.PNG";
import { DETAIL_PROPERTY } from "../constants/routes";

const PropertyItem = () => {
  const history = useHistory();
  const handleNavigate = () => history.push(DETAIL_PROPERTY);

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
      onClick={handleNavigate}
    >
      <div
        style={{
          // backgroundImage: `url("${SampleImage}")`,
          width: "100%",
          height: "180px",
          backgroundSize: "cover",
          position: "relative",
          backgroundColor: "blue",
          borderRadius: "5px",
        }}
        alt="logo"
      >
        <div
          style={{
            position: "absolute",
            top: 16,
            left: 16,
            backgroundColor: "white",
            padding: "4px 11px",
            margin: 0,
            color: "black",
            fontWeight: "bold",
            borderRadius: "3px",
          }}
        >
          Furnished
        </div>
      </div>
      <CardContent>
        <h2>Rp. 9.0000.000 / Year</h2>
        <h3>3 Beds, 2 Baths, 1.8000 sqft</h3>
        <p>Tanggerang Selatan, Padak Aren</p>
      </CardContent>
    </Card>
  );
};

export default PropertyItem;
