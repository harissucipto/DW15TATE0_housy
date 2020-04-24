import { createSlice, createSelector } from "@reduxjs/toolkit";

import { apiCallBegan } from "./api";
import { getAuth, getConfigHeader } from "./auth";

const initialState = {
  list: [],
  loading: false,
  lastFetch: null,
  message: "",
};

const slice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    ordersRequested: (orders) => {
      orders.loading = true;
      orders.message = "";
    },
    ordersReceived: (orders, action) => {
      orders.list = action.payload;
      orders.loading = false;
      orders.lastFetch = Date.now();
    },
    ordersRequestFailed: (orders, action) => {
      orders.loading = false;
      orders.message = action.payload;
    },
    orderRequested: (orders) => {
      orders.loading = true;
      orders.message = "";
    },
    orderReceived: (orders, action) => {
      const { id, ...newData } = action.payload;

      orders.list = orders.list.length
        ? orders.list.map((item) =>
            item.id === id ? { ...item, ...newData } : item
          )
        : [action.payload];
      orders.loading = false;
      orders.lastFetch = Date.now();
    },
    orderRequestFailed: (orders, action) => {
      orders.loading = false;
      orders.message = action.payload;
    },
  },
});

export default slice.reducer;

export const {
  ordersRequested,
  ordersReceived,
  ordersRequestFailed,
  orderRequested,
  orderReceived,
  orderRequestFailed,
} = slice.actions;

const url = "/orders";

// Action Creators
export const loadOrders = (category) => (dispatch, getState) => {
  const { token } = getAuth(getState());
  const query = category ? `category=${category}` : "";

  return dispatch(
    apiCallBegan({
      url: `${url}?${query}`,
      ...getConfigHeader(token),
      onStart: ordersRequested.type,
      onSuccess: ordersReceived.type,
      onError: ordersRequestFailed.type,
    })
  );
};

export const loadOrderById = (id) => (dispatch, getState) => {
  const { token } = getAuth(getState());
  return dispatch(
    apiCallBegan({
      url: `/order/${id}`,
      ...getConfigHeader(token),
      onStart: orderRequested.type,
      onSuccess: orderReceived.type,
      onError: orderRequestFailed.type,
    })
  );
};

export const updateOrder = (id, data) => (dispatch, getState) => {
  const { token } = getAuth(getState());
  return dispatch(
    apiCallBegan({
      url: `/order/${id}`,
      ...getConfigHeader(token),
      method: "patch",
      data: data,
      onStart: orderRequested.type,
      onSuccess: orderReceived.type,
      onError: orderRequestFailed.type,
    })
  );
};

// Selector
export const getOrders = (state) => state.entities.orders;

export const getOrderById = (id) =>
  createSelector(getOrders, (orders) => {
    const order = orders.list.find((item) => String(item.id) === String(id));
    return order;
  });
