import React from "react";
import { useHistory } from "react-router-dom";

import { HOME } from "../constants/routes";
import Logo from "./Logo";
import Auth from "./Auth";
import "./Header.css";
import { Grid } from "@material-ui/core";

const HeaderDetail = () => {
  const history = useHistory();
  const handleNavigate = (path) => () => history.push(path);

  return (
    <div className="header" style={{ marginBottom: "20px" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Logo onClick={handleNavigate(HOME)} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Auth />
        </Grid>
      </Grid>
    </div>
  );
};

export default HeaderDetail;
