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
};

export default users;
