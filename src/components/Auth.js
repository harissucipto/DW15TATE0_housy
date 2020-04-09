import React, { useState } from "react";

import Signin from "./Signin";
import Signup from "./Signup";
import User from "./User";
import Owner from "./Owner";

const Auth = () => {
  const [user] = useState({
    type: "owner",
  });

  const isLogin = user.type;
  const isUser = user.type === "user";

  return (
    <div>
      {isLogin ? (
        isUser ? (
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
