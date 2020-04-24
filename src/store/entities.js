import { combineReducers } from "redux";
import housesReducer from "./houses";
import ordersReducer from "./orders";

export default combineReducers({
  houses: housesReducer,
  orders: ordersReducer,
});
