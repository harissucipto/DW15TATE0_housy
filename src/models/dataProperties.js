import { action, thunk } from "easy-peasy";

import data from "../constants/data.json";

const Properties = {
  data: [...data],
  filter: {
    typeOfRent: "",
    searchLocation: "",
    bedrooms: null,
    baths: null,
    amenities: {
      Furnished: false,
      "Pet Allowed": false,
      "Shared Accomodation": false,
    },
    budget: undefined,
  },
  changeFilter: action((state, payload) => {
    state.filter = payload;
  }),
  getProperty: thunk((_, payload, helpers) => {
    const { data } = helpers.getState();
    const property = data.find((item) => item.id === payload);
    return property;
  }),
};

export default Properties;
