import React from "react";
import { useHistory } from "react-router-dom";

import { HOME } from "../constants/routes";
import Logo from "./Logo";
import SearchLocation from "./SearchLocation";
import Auth from "./Auth";
import "./Header.css";

const Header = () => {
  const history = useHistory();
  const handleNavigate = (path) => () => history.push(path);

  return (
    <div className="header">
      <Logo onClick={handleNavigate(HOME)} />
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
