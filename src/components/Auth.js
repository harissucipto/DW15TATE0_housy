import React from "react";
import { useSelector } from "react-redux";

import { checkIsLogin, checkIsTenant } from "../store/auth";
import Signin from "./Signin";
import Signup from "./Signup";
import User from "./User";
import Owner from "./Owner";

const Auth = () => {
  const isLogin = useSelector(checkIsLogin);
  const isTenant = useSelector(checkIsTenant);

  return (
    <div>
      {isLogin ? (
        isTenant ? (
          <User />
        ) : (
          <Owner />
        )
      ) : (
        <>
          <Signin />
          <Signup />
        </>
      )}
    </div>
  );
};

export default Auth;
