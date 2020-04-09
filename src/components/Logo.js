import React from "react";
import logoImage from "../images/logo.PNG";

const Logo = () => {
  return (
    <div
      style={{
        width: "460px",
      }}
    >
      <img
        src={logoImage}
        alt="logo"
        style={{
          height: "80px",
        }}
      />
    </div>
  );
};

export default Logo;
