import { action, thunk } from "easy-peasy";
import shortId from "shortid";

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
  addData: action((state, payload) => {
    state.data.push(payload);
  }),
  createProperty: thunk((actions, payload, helpers) => {
    const {
      users: { user },
    } = helpers.getStoreState();

    const dataProperty = {
      ...payload,
      images: [""],
      profileImage: "",
      ownerId: user.id,
      id: shortId(),
      area: 120392,
      description:
        "Adipisicing adipisicing sit occaecat voluptate in veniam sint. Qui ipsum ullamco amet cillum voluptate do voluptate ullamco ea pariatur aute proident laborum proident. Id aliquip commodo commodo veniam dolor anim mollit enim. Minim ut consequat id amet velit laborum minim sunt labore aliquip ut. Laboris dolore laboris deserunt ipsum ea qui. Eu est minim excepteur proident. Ad dolor fugiat nulla deserunt consectetur proident incididunt.",
    };
    console.log(dataProperty);
    actions.addData(dataProperty);
    return dataProperty;
  }),
};

export default Properties;
