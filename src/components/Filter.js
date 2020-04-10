import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useStoreActions, useStoreState } from "easy-peasy";

import TypeOfRent from "./TypeOfRent";
import DateFilter from "./DateFilter";
import PropertyRoom from "./PropertyRoom";
import Amneties from "./Amneties";
import Budget from "./Budget";

const Filter = () => {
  const { filter: dataFilter } = useStoreState(({ properties }) => properties);
  const [filter, setDataFilter] = useState({
    ...dataFilter,
  });
  const handleChangeFilter = (prop) => (value) =>
    setDataFilter({
      ...filter,
      [prop]: value,
    });

  const { changeFilter } = useStoreActions(({ properties }) => properties);
  const handleFilter = () => changeFilter(filter);

  return (
    <div style={{ width: "460px", paddingTop: "40px", paddingLeft: "50px" }}>
      <TypeOfRent
        selected={filter.typeOfRent}
        onSelected={handleChangeFilter("typeOfRent")}
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
        <Button variant="contained" color="primary" onClick={handleFilter}>
          APPLY
        </Button>
      </div>
    </div>
  );
};

export default Filter;
