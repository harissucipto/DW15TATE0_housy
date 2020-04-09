import React from "react";
import Logo from "./Logo";
import SearchLocation from "./SearchLocation";
import Auth from "./Auth";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "space-between",
          flexWrap: "wrap",
          paddingLeft: "50px",
        }}
      >
        <SearchLocation />
        <Auth />
      </div>
    </div>
  );
};

export default Header;
