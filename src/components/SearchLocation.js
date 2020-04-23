import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import { getFilterHouses, filterHousesChange } from "../store/filterHouses";
import { loadHouses } from "../store/houses";

const SearchLocation = () => {
  const filter = useSelector(getFilterHouses);
  const [searchLocation, setSearchLocation] = useState(filter.searchLocation);

  const dispatch = useDispatch();
  const handleSearch = () => {
    const newData = { ...filter, searchLocation };
    dispatch(filterHousesChange(newData));
    dispatch(loadHouses);
  };

  return (
    <div style={{ width: "400px", height: "50px", boxSizing: "border-box" }}>
      <TextField
        disabled
        variant="filled"
        placeholder="Cari Lokasi"
        value={searchLocation}
        onKeyUp={(evt) => evt.key === "Enter" && handleSearch()}
        onChange={(evt) => setSearchLocation(evt.target.value)}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchLocation;
