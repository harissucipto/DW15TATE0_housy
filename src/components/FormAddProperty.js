import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { TextField, MenuItem, Checkbox, Button } from "@material-ui/core";
import { HOME } from "../constants/routes";
import { houseCreate, houseCreateReceived, getHouses } from "../store/houses";
import Loading from "./Loading";

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

const listCities = [
  {
    value: 1,
    label: "Jakarta",
  },
  {
    value: 2,
    label: "Pekanbaru",
  },
  {
    value: 3,
    label: "Tanjung Balai Karimun",
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
  const dispatch = useDispatch();

  const checkCanSubmit = () => {
    const data = {
      name,
      cityId: city,
      address,
      price: Number(price),
      typeRent: typeOfRent,
      ameneties: Object.keys(amenities).filter((item) => amenities[item]),
      bathroom: baths,
      bedRoom: bedrooms,
    };
    if (isEveryValueFil(data)) {
      return true;
    }

    return false;
  };

  const isCanSubmit = checkCanSubmit();

  const handleSubmit = async () => {
    const data = {
      name,
      cityId: city,
      address,
      price: Number(price),
      typeRent: typeOfRent,
      ameneties: Object.keys(amenities).filter((item) => amenities[item]),
      bathroom: baths,
      bedRoom: bedrooms,
    };
    const { type, payload } = await dispatch(houseCreate(data));
    if (type === houseCreateReceived.type) {
      const { id } = payload;
      history.push(`/detail-property/${id}`);
    }
  };

  const { loading, message } = useSelector(getHouses);

  if (loading) return <Loading />;

  return (
    <div>
      <h1>Add Property</h1>
      <p>{message}</p>
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
            {listCities.map((city, index) => (
              <MenuItem value={city.value} key={city.value}>
                {city.label}
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
            {new Array(5).fill({}).map((_, index) => (
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
            {new Array(5).fill({}).map((_, index) => (
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
          disabled={!isCanSubmit}
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
