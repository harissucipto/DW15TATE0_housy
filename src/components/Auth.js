import React from "react";
import { useStoreState } from "easy-peasy";

import Signin from "./Signin";
import Signup from "./Signup";
import User from "./User";
import Owner from "./Owner";

const Auth = () => {
  const { user } = useStoreState(({ users }) => users);
  const isLogin = Boolean(user);
  const isTenant = user ? user.status === "tenant" : "";

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
