import React from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const SearchLocation = () => {
  return (
    <div style={{ width: "400px", height: "50px" }}>
      <TextField
        variant="filled"
        placeholder="Tanggerang Selatan"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
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
