import React, { useState } from "react";

import Signin from "./Signin";
import Signup from "./Signup";
import User from "./User";

const Auth = () => {
  const [user] = useState({
    type: "user",
  });

  const isLogin = user.type;
  const isUser = user.type === "user";

  return (
    <div>
      {isLogin ? (
        isUser ? (
          <User />
        ) : null
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
