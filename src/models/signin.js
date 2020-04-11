import { action } from "easy-peasy";

const signin = {
  open: false,
  setOpen: action((state, payload) => {
    state.open = payload;
  }),
};

export default signin;
