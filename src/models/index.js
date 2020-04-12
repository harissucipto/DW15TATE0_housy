import { persist } from "easy-peasy";
import MyBookingModel from "./booking";
import PropertiesModel from "./dataProperties";
import UsersModel from "./users";
import SignupModel from "./signup";
import SigninModel from "./signin";

const storeModel = {
  myBooking: persist(MyBookingModel),
  properties: persist(PropertiesModel),
  users: persist(UsersModel),
  signup: SignupModel,
  signin: SigninModel,
};

export default storeModel;
