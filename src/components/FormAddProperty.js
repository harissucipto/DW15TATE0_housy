import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStoreActions } from "easy-peasy";
import { TextField, MenuItem, Checkbox, Button } from "@material-ui/core";
import { HOME } from "../constants/routes";

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
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [typeOfRent, setTypeOfRent] = useState("");
  const [amenities, setAmenities] = useState({
    Furnished: false,
    "Pet Allowed": false,
    "Shared Accomodation": false,
  });
  const [baths, setBaths] = useState("");
  const [bedrooms, setBedrooms] = useState("");

  const checkedAmentites = (prop) => (evt) => {
    setAmenities({
      ...amenities,
      [prop]: evt.target.checked,
    });
  };

  const saveValue = (setState) => (evt) => setState(evt.target.value);
  const isEveryValueFil = (obj) =>
    Object.values(obj).every((item) => Boolean(item));

  const history = useHistory();
  const { onLogout } = useStoreActions(({ users }) => users);
  const { createProperty } = useStoreActions(({ properties }) => properties);

  const handleSubmit = () => {
    const data = {
      name,
      city,
      address,
      price: Number(price),
      typeOfRent,
      amenities: Object.keys(amenities).filter((item) => amenities[item]),
      baths,
      bedrooms,
    };
    if (!isEveryValueFil(data)) {
      console.log("data belum lengkap");
      return;
    }

    const resp = createProperty(data);
    if (resp) {
      onLogout();
      history.push(HOME);
    }
  };

  return (
    <div>
      <h1>Add Property</h1>
      <div style={{ margin: "2rem 2rem" }}>
        <div>
          <h2>Name Property</h2>
          <TextField
            variant="filled"
            fullWidth
            value={name}
            onChange={saveValue(setName)}
          />
          <h2>City</h2>
          <TextField
            variant="filled"
            fullWidth
            select
            value={city}
            onChange={saveValue(setCity)}
          >
            {new Array(10).fill({}).map((_, index) => (
              <MenuItem value={index} key={index}>
                Kota {index + 1}
              </MenuItem>
            ))}
          </TextField>
          <h2>Address</h2>
          <TextField
            multiline
            rows="4"
            variant="filled"
            fullWidth
            value={address}
            onChange={saveValue(setAddress)}
          />
          <h2>Price</h2>
          <TextField
            variant="filled"
            fullWidth
            value={price}
            onChange={saveValue(setPrice)}
          />
          <h2>Type of Rent</h2>
          <TextField
            variant="filled"
            fullWidth
            select
            value={typeOfRent}
            onChange={saveValue(setTypeOfRent)}
          >
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
                <Checkbox
                  color="primary"
                  checked={amenities[value]}
                  onChange={checkedAmentites(value)}
                />
                <h3>{label} </h3>
              </div>
            ))}
          </div>
          <h2>Bedroom</h2>
          <TextField
            variant="filled"
            fullWidth
            select
            value={bedrooms}
            onChange={saveValue(setBedrooms)}
          >
            {new Array(10).fill({}).map((_, index) => (
              <MenuItem value={index + 1} key={index}>
                {index + 1}
              </MenuItem>
            ))}
          </TextField>
          <h2>Bathroom</h2>
          <TextField
            variant="filled"
            fullWidth
            select
            value={baths}
            onChange={saveValue(setBaths)}
          >
            {new Array(10).fill({}).map((_, index) => (
              <MenuItem value={index + 1} key={index}>
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
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default FormAddProperty;
