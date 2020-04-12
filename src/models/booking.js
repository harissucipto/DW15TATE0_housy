import { action, thunk } from "easy-peasy";
import shortid from "shortid";

const mappingDataOrder = (dataProperties) => (item) => {
  const property = dataProperties.find((p) => p.id === item.propertyID);
  const dataLengkap = {
    ...item,
    property,
  };
  return dataLengkap;
};

const mappingDataIncomingTransaction = (dataProperties, users) => (item) => {
  const property = dataProperties.find((p) => p.id === item.propertyID);
  const tenant = users.find((u) => u.id === item.tenantId);
  const dataLengkap = {
    ...item,
    property,
    tenant,
  };
  return dataLengkap;
};

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
        return (
          order.tenantId === payload &&
          ["waitingPayment", "pending"].some((o) => o === order.status)
        );
      })
      .map(mappingDataOrder(dataProperties));

    return myBooking;
  }),
  getMyHistory: thunk((_actions, payload, helpers) => {
    const { data } = helpers.getState();
    const {
      properties: { data: dataProperties },
      users: { user },
    } = helpers.getStoreState();

    const myHistory = data
      .map(mappingDataOrder(dataProperties))
      .filter((order) => {
        const isIHave =
          user.status === "tenant"
            ? order.tenantId === payload
            : order?.property?.ownerId === payload;
        const isStatus = ["approve", "pending", "cancel"].some(
          (o) => o === order.status
        );

        return isIHave && isStatus;
      });

    return myHistory;
  }),
  getMyIncomingTransaction: thunk((_actions, payload, helpers) => {
    const { data } = helpers.getState();
    const {
      properties: { data: dataProperties },
      users: { dataUsers },
    } = helpers.getStoreState();

    const myIncomingTransaction = data
      .map(mappingDataIncomingTransaction(dataProperties, dataUsers))
      .filter((item) => {
        return item?.property?.ownerId === payload;
      });

    return myIncomingTransaction;
  }),
  updateData: action((state, payload) => {
    state.data = payload;
  }),
  updateTrxFromOwner: thunk((actions, payload, helpers) => {
    const { data } = helpers.getState();

    const { trxId, status } = payload;

    const dataUpdated = data.map((item) => {
      if (item.id !== trxId) return item;

      return {
        ...item,
        status,
      };
    });
    actions.updateData(dataUpdated);

    return true;
  }),
};

export default MyBooking;
