import React from "react";
import { Button } from "@material-ui/core";

const Auth = () => {
  return (
    <div>
      <Button
        style={{
          marginRight: "20px",
        }}
      >
        Sign in
      </Button>
      <Button variant="contained">Sign up</Button>
    </div>
  );
};

export default Auth;
