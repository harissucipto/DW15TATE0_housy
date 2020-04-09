import React from "react";
import { Button } from "@material-ui/core";

import Signin from "./Signin";

const Auth = () => {
  return (
    <div>
      <Signin />
      <Button variant="contained">Sign up</Button>
    </div>
  );
};

export default Auth;
