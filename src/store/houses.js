import { createSlice, createSelector } from "@reduxjs/toolkit";

import { apiCallBegan } from "./api";
import { getFilterHousesParams } from "./filterHouses";
import { getAuth, getConfigHeader } from "./auth";

const slice = createSlice({
  name: "houses",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
    message: "",
  },
  reducers: {
    housesRequested: (houses) => {
      houses.loading = true;
      houses.message = "";
    },
    housesReceived: (houses, action) => {
      houses.list = action.payload;
      houses.loading = false;
      houses.lastFetch = Date.now();
    },
    housesRequestFailed: (houses, action) => {
      houses.loading = false;
      houses.message = action.payload;
    },
    houseRequested: (houses) => {
      houses.loading = true;
      houses.message = "";
    },
    houseReceived: (houses, action) => {
      const { id, ...newData } = action.payload;

      houses.list = houses.list.length
        ? houses.list.map((item) =>
            item.id === id ? { ...item, ...newData } : item
          )
        : [action.payload];
      houses.loading = false;
      houses.lastFetch = Date.now();
    },
    houseRequestFailed: (houses, action) => {
      houses.loading = false;
      houses.message = action.payload;
    },
    houseCreateRequested: (houses) => {
      houses.loading = true;
      houses.message = "";
    },
    houseCreateReceived: (houses, action) => {
      houses.list.push(action.payload);
      houses.loading = false;
      houses.lastFetch = Date.now();
    },
    houseCreateFailed: (houses, action) => {
      houses.loading = false;
      houses.message = action.payload;
    },
  },
});

export default slice.reducer;

export const {
  housesRequested,
  housesReceived,
  housesRequestFailed,
  houseRequested,
  houseReceived,
  houseRequestFailed,
  houseCreateRequested,
  houseCreateReceived,
  houseCreateFailed,
} = slice.actions;

const url = "/houses";

// Action Creators
export const loadHouses = (dispatch, getState) => {
  const query = getFilterHousesParams(getState());
  return dispatch(
    apiCallBegan({
      url: `${url}?${query}`,
      onStart: housesRequested.type,
      onSuccess: housesReceived.type,
      onError: housesRequestFailed.type,
    })
  );
};

export const loadHouseById = (id) => (dispatch) => {
  return dispatch(
    apiCallBegan({
      url: `house/${id}`,
      onStart: houseRequested.type,
      onSuccess: houseReceived.type,
      onError: houseRequestFailed.type,
    })
  );
};

export const houseCreate = (house) => (dispatch, getState) => {
  const { token } = getAuth(getState());
  return dispatch(
    apiCallBegan({
      url: `/house`,
      ...getConfigHeader(token),
      method: "post",
      data: house,
      onStart: houseCreateRequested.type,
      onSuccess: houseCreateReceived.type,
      onError: houseCreateFailed.type,
    })
  );
};

// Selector
export const getHouses = (state) => state.entities.houses;

export const getHouseById = (id) =>
  createSelector(getHouses, (houses) => {
    const house = houses.list.find((item) => String(item.id) === String(id));
    return house;
  });
