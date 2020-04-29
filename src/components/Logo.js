import React from "react";

import logoImage from "../images/logo.PNG";
import "../index.css";

const Logo = ({ onClick = (f) => f }) => {
  return (
    <div
      onClick={onClick}
      style={{
        width: "100%",
      }}
      className="logo-rumah"
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
