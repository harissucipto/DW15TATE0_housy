import React, { useState } from "react";

import Signin from "./Signin";
import Signup from "./Signup";
import User from "./User";
import Owner from "./Owner";

const Auth = () => {
  const [user] = useState({
    type: "user",
  });

  const isLogin = user.type;
  const isUser = user.type === "owner";

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
