import { action, thunk } from "easy-peasy";

import listUser from "../constants/users.json";

const users = {
  dataUsers: [...listUser],
  user: null,
  setUser: action((state, payload) => {
    state.user = payload;
  }),
  onLogin: thunk((actions, payload, helper) => {
    const { username, password } = payload;
    const { dataUsers: users } = helper.getState();
    const user = users.find((user) => {
      return user.username === username && user.password === password;
    });
    if (Boolean(user)) {
      actions.setUser(user);
      return user;
    }

    return null;
  }),
  addUser: action((state, payload) => {
    state.users = [...state.dataUsers, payload];
  }),
  onSignup: thunk((actions, payload, helper) => {
    const { dataUsers: users } = helper.getState();
    const { username } = payload;
    // check uniq username
    const isUniqUsername = users.every((item) => item.username !== username);
    if (!isUniqUsername) {
      return null;
    }

    actions.addUser(payload);
    actions.setUser(payload);
    return payload;
  }),
};

export default users;
