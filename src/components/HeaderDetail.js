import React from "react";
import { useHistory } from "react-router-dom";

import { HOME } from "../constants/routes";
import Logo from "./Logo";
import Auth from "./Auth";
import "./Header.css";

const HeaderDetail = () => {
  const history = useHistory();
  const handleNavigate = (path) => () => history.push(path);

  return (
    <div className="header">
      <Logo onClick={handleNavigate(HOME)} />
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
