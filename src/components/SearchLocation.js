import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { useStoreState, useStoreActions } from "easy-peasy";
import SearchIcon from "@material-ui/icons/Search";

const SearchLocation = () => {
  const { filter } = useStoreState(({ properties }) => properties);
  const [searchLocation, setSearchLocation] = useState(filter.searchLocation);

  const { changeFilter } = useStoreActions(({ properties }) => properties);
  const handleSearch = () => changeFilter({ ...filter, searchLocation });

  return (
    <div style={{ width: "400px", height: "50px" }}>
      <TextField
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
