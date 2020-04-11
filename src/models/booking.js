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
  getMyBooking: thunk((_actions, payload, helpers) => {
    const { data } = helpers.getState();
    const {
      properties: { data: dataProperties },
    } = helpers.getStoreState();

    const myBooking = data
      .filter((order) => {
        return order.tenantId === payload && order.status !== "approve";
      })
      .map((item) => {
        const property = dataProperties.find((p) => p.id === item.propertyID);
        return {
          ...item,
          property,
        };
      });

    return myBooking;
  }),
};

export default MyBooking;
