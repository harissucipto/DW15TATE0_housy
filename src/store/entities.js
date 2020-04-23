import { combineReducers } from "redux";
import housesReducer from "./houses";

export default combineReducers({
  houses: housesReducer,
});
