import { combineReducers } from "@reduxjs/toolkit";

import filterHousesReducer from "./filterHouses";
import signinReducer from "./signin";
import signupReducer from "./signup";

export default combineReducers({
  filterHouses: filterHousesReducer,
  signin: signinReducer,
  signup: signupReducer,
});
