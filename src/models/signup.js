import { action } from "easy-peasy";

const signnup = {
  open: false,
  setOpen: action((state, payload) => {
    state.open = payload;
  }),
};

export default signnup;
