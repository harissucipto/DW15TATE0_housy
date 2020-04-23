import React from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import DateRangeIcon from "@material-ui/icons/DateRange";

const DateFilter = () => {
  return (
    <div>
      <h3>Date</h3>
      <TextField
        disabled
        variant="filled"
        type="date"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <IconButton size="medium">
                <DateRangeIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default DateFilter;
