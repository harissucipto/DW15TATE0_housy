import React from "react";
import { Button } from "@material-ui/core";

import TypeOfRent from "./TypeOfRent";
import DateFilter from "./DateFilter";
import PropertyRoom from "./PropertyRoom";
import Amneties from "./Amneties";
import Budget from "./Budget";

const Filter = () => {
  return (
    <div style={{ width: "460px", paddingTop: "40px", paddingLeft: "50px" }}>
      <TypeOfRent />
      <DateFilter />
      <PropertyRoom />
      <Amneties />
      <Budget />
      <div style={{ textAlign: "right", marginTop: "40px" }}>
        <Button variant="contained" color="primary">
          APPLY
        </Button>
      </div>
    </div>
  );
};

export default Filter;
