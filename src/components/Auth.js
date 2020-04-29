import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

import { checkIsLogin, checkIsTenant } from "../store/auth";
import Signin from "./Signin";
import Signup from "./Signup";
import User from "./User";
import Owner from "./Owner";

const Auth = () => {
  const isLogin = useSelector(checkIsLogin);
  const isTenant = useSelector(checkIsTenant);

  return (
    <Grid container justify="flex-end" spacing={2}>
      {isLogin ? (
        isTenant ? (
          <Grid item>
            <User />
          </Grid>
        ) : (
          <Grid item>
            <Owner />
          </Grid>
        )
      ) : (
        <>
          <Grid item>
            <Signin />
          </Grid>
          <Grid item>
            <Signup />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Auth;
