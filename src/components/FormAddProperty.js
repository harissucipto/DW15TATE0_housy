import React from "react";
import { TextField, MenuItem, Checkbox, Button } from "@material-ui/core";

const listAmneties = [
  {
    label: "Furnished",
    value: "Furnished",
  },
  {
    label: "Pet Allowed",
    value: "Pet Allowed",
  },
  {
    label: "Shared Accomodation",
    value: "Shared Accomodation",
  },
];

const FormAddProperty = () => {
  return (
    <div>
      <h1>Add Property</h1>
      <div style={{ margin: "2rem 2rem" }}>
        <div>
          <h2>Name Property</h2>
          <TextField variant="filled" fullWidth />
          <h2>City</h2>
          <TextField variant="filled" fullWidth select>
            {new Array(10).fill({}).map((_, index) => (
              <MenuItem value={index} key={index}>
                Kota {index + 1}
              </MenuItem>
            ))}
          </TextField>
          <h2>Address</h2>
          <TextField multiline rows="4" variant="filled" fullWidth />
          <h2>Price</h2>
          <TextField variant="filled" fullWidth />
          <h2>Type of Rent</h2>
          <TextField variant="filled" fullWidth select>
            {["day", "month", "year"].map((value, index) => (
              <MenuItem value={value} key={index}>
                {value}
              </MenuItem>
            ))}
          </TextField>
          <h2>Amenities</h2>
          <div style={{ display: "flex" }}>
            {listAmneties.map(({ label, value }) => (
              <div
                key={value}
                variant="contained"
                style={{
                  marginRight: "25px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <Checkbox color="primary" />
                <h3>{label} </h3>
              </div>
            ))}
          </div>
          <h2>Bedroom</h2>
          <TextField variant="filled" fullWidth select>
            {new Array(10).fill({}).map((_, index) => (
              <MenuItem value={index} key={index}>
                {index + 1}
              </MenuItem>
            ))}
          </TextField>
          <h2>Bathroom</h2>
          <TextField variant="filled" fullWidth select>
            {new Array(10).fill({}).map((_, index) => (
              <MenuItem value={index} key={index}>
                {index + 1}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>

      <div
        style={{
          width: "300px",
          margin: "0 auto",
          backgroundColor: "red",
          borderRadius: "5px",
          marginTop: "88px",
        }}
      >
        <Button variant="contained" color="primary" fullWidth>
          Save
        </Button>
      </div>
    </div>
  );
};

export default FormAddProperty;
