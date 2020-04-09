import React from "react";

import Logo from "./Logo";
import Auth from "./Auth";
import "./Header.css";

const HeaderDetail = () => {
  return (
    <div className="header">
      <Logo />
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "flex-end",
          flexWrap: "wrap",
          paddingLeft: "50px",
        }}
      >
        <Auth />
      </div>
    </div>
  );
};

export default HeaderDetail;
