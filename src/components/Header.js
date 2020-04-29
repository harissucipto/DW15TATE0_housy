import React from "react";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";

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
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Logo onClick={handleNavigate(HOME)} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <SearchLocation />
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <Auth />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
