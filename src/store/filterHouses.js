import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filterHouses",
  initialState: {
    typeRent: "",
    searchLocation: "",
    bedrooms: null,
    baths: null,
    amenities: {
      Furnished: false,
      "Pet Allowed": false,
      "Shared Accomodation": false,
    },
    budget: "",
  },
  reducers: {
    filterHousesChanged: (_filterHouses, action) => {
      return action.payload;
    },
  },
});

export default slice.reducer;

export const { filterHousesChanged } = slice.actions;

// Action Creator
export const filterHousesChange = (payload) => (dispatch) =>
  dispatch({
    type: filterHousesChanged.type,
    payload,
  });

// Selector
export const getFilterHouses = (state) => state.ui.filterHouses;

export const getFilterHousesParams = (state) => {
  const { budget, typeRent } = state.ui.filterHouses;
  const params = { belowPrice: budget, typeRent };
  return paramsToQuery(params);
};

// utils

// Convert obj params to query string
const paramsToQuery = (params) => {
  const paramValid = Object.keys(params).filter((key) => params[key]);
  return paramValid.map((key) => `${key}=${params[key]}`).join("&");
};
