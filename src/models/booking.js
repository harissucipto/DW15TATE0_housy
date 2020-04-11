import { action, thunk } from "easy-peasy";
import shortid from "shortid";

const MyBooking = {
  data: [],
  addData: action((state, payload) => {
    state.data.push(payload);
  }),
  addOrder: thunk((actions, payload, helpers) => {
    const {
      users: { user },
    } = helpers.getStoreState();
    const dataOrder = {
      id: shortid(),
      ...payload,
      tenantId: user.id,
    };
    actions.addData(dataOrder);
    return dataOrder;
  }),
};

export default MyBooking;
