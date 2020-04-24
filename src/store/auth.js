import { createSlice, createSelector } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    loading: false,
    message: "",
    user: null,
  },
  reducers: {
    userLogouted: (auth) => {
      auth.token = null;
      auth.user = null;
      auth.message = "";
      auth.loading = false;
    },
    userLoginRequested: (auth) => {
      auth.loading = true;
      auth.message = "";
    },
    userLoginReceived: (auth, action) => {
      const { token, username, role } = action.payload;
      auth.token = token;
      auth.user = { username, role };
      auth.loading = false;
      auth.lastFetch = Date.now();
    },
    userLoginRequestFailed: (auth, action) => {
      auth.loading = false;
      auth.message = action.payload;
    },
    userInfoRequested: (auth) => {
      auth.loading = true;
      auth.message = "";
    },
    userInfoReceived: (auth, action) => {
      auth.user = { ...auth.user, ...action.payload };
      auth.loading = false;
      auth.lastFetch = Date.now();
    },
    userInfoRequestFailed: (auth, action) => {
      auth.loading = false;
      auth.message = action.payload;
    },
    userRegisterRequested: (auth) => {
      auth.loading = true;
      auth.message = "";
    },
    userRegisterReceived: (auth, action) => {
      const { token, username, role } = action.payload;
      auth.token = token;
      auth.user = { username, role };
      auth.loading = false;
      auth.lastFetch = Date.now();
    },
    userRegisterRequestFailed: (auth, action) => {
      auth.loading = false;
      auth.message = action.payload;
    },
  },
});

export default slice.reducer;

export const {
  userLogouted,
  userLoginRequested,
  userLoginReceived,
  userLoginRequestFailed,
  userInfoRequested,
  userInfoReceived,
  userInfoRequestFailed,
  userRegisterRequested,
  userRegisterReceived,
  userRegisterRequestFailed,
} = slice.actions;

// Action Creator
export const userLogout = (dispatch) =>
  dispatch({
    type: userLogouted.type,
  });

export const userLogin = (user) => (dispatch) =>
  dispatch(
    apiCallBegan({
      url: "/signin",
      method: "post",
      data: user,
      onStart: userLoginRequested.type,
      onSuccess: userLoginReceived.type,
      onError: userLoginRequestFailed.type,
    })
  );

export const getInfoUserLogin = (dispatch, getState) => {
  const { token } = getAuth(getState());
  return dispatch(
    apiCallBegan({
      url: "/profile",
      method: "get",
      ...getConfigHeader(token),
      onStart: userInfoRequested.type,
      onSuccess: userInfoReceived.type,
      onError: userInfoRequestFailed.type,
    })
  );
};

export const userRegister = (user) => (dispatch) =>
  dispatch(
    apiCallBegan({
      url: "/signup",
      method: "post",
      data: user,
      onStart: userRegisterRequested.type,
      onSuccess: userRegisterReceived.type,
      onError: userRegisterRequestFailed.type,
    })
  );

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

export const getAuth = (state) => state.auth;

export const getConfigHeader = (token) => {
  if (!token) return {};
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};
