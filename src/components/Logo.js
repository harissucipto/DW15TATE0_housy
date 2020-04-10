import React from "react";

import logoImage from "../images/logo.PNG";

const Logo = ({ onClick = (f) => f }) => {
  return (
    <div
      onClick={onClick}
      style={{
        width: "460px",
      }}
    >
      <img
        src={logoImage}
        alt="logo"
        style={{
          height: "80px",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default Logo;
