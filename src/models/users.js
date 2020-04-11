import { action, thunk } from "easy-peasy";
import shortid from "shortid";

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
    state.dataUsers.push(payload);
  }),
  onSignup: thunk((actions, payload, helper) => {
    const { dataUsers: users } = helper.getState();
    const { username } = payload;
    // check uniq username
    const isUniqUsername = users.every((item) => item.username !== username);
    if (!isUniqUsername) {
      return null;
    }

    const dataUser = {
      ...payload,
      id: shortid(),
      profileImage: "",
    };
    actions.addUser(dataUser);
    actions.setUser(dataUser);
    return payload;
  }),
  onLogout: thunk((actions) => {
    actions.setUser(null);
    return true;
  }),
  updateUser: action((state, payload) => {
    const { user, dataUsers } = state;
    const dataUserUpdate = {
      ...user,
      ...payload,
    };
    const dataUsersUpdate = dataUsers.map((item) => {
      if (item.id !== user.id) return item;
      return {
        ...item,
        ...dataUserUpdate,
      };
    });

    state.user = dataUserUpdate;
    state.dataUsers = dataUsersUpdate;
  }),
  onChangePassword: thunk((actions, payload) => {
    actions.updateUser({
      password: payload,
    });

    return true;
  }),
};

export default users;
