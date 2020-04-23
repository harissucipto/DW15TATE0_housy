import { createSlice, createSelector } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    user: null,
  },
  reducers: {
    userLogouted: (auth) => {
      auth.token = null;
      auth.user = null;
    },
  },
});

export default slice.reducer;

const { userLogouted } = slice.actions;

// Action Creator
export const userLogout = (dispatch) =>
  dispatch({
    type: userLogouted.type,
  });

// Selector
export const checkIsLogin = createSelector(
  (state) => state.auth.token,
  (token) => token
);

export const checkIsRole = (role) =>
  createSelector(
    (state) => state.auth.user,
    (user) => user?.role === role
  );

export const checkIsOwner = checkIsRole("owner");
export const checkIsTenant = checkIsRole("tenant");

export const getUser = (state) => state.auth.user;

export const getUserRole = (state) => state.auth?.user?.role;
