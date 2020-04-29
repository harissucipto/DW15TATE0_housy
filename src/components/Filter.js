import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import { getFilterHouses, filterHousesChange } from "../store/filterHouses";
import TypeOfRent from "./TypeOfRent";
import DateFilter from "./DateFilter";
import PropertyRoom from "./PropertyRoom";
import Amneties from "./Amneties";
import Budget from "./Budget";
import { loadHouses } from "../store/houses";

const Filter = () => {
  const dataFilter = useSelector(getFilterHouses);
  const [filter, setDataFilter] = useState({
    ...dataFilter,
  });
  const [buttonColorActive, setButtonColorActive] = useState(true);

  const dispatch = useDispatch();
  const handleChangeFilter = (prop) => (value) => {
    setDataFilter({
      ...filter,
      [prop]: value,
    });
    setButtonColorActive(false);
  };
  const handleFilter = () => {
    dispatch(filterHousesChange(filter));
    dispatch(loadHouses);
    setButtonColorActive(true);
  };

  return (
    <div style={{ width: "100%" }}>
      <TypeOfRent
        selected={filter.typeRent}
        onSelected={handleChangeFilter("typeRent")}
      />
      <DateFilter />
      <PropertyRoom
        bedroomSelected={filter.bedrooms}
        onSelectedBedroom={handleChangeFilter("bedrooms")}
        bathroomSelected={filter.baths}
        onSelectedBaths={handleChangeFilter("baths")}
      />
      <Amneties
        data={filter.amenities}
        onChecked={handleChangeFilter("amenities")}
      />
      <Budget value={filter.budget} onChange={handleChangeFilter("budget")} />
      <div style={{ textAlign: "right", marginTop: "40px" }}>
        <Button
          variant="contained"
          color={buttonColorActive ? "primary" : "default"}
          onClick={handleFilter}
        >
          APPLY
        </Button>
      </div>
    </div>
  );
};

export default Filter;
