/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Grid } from "@material-ui/core";

import { OWNER } from "../constants/routes";
import { checkIsOwner } from "../store/auth";
import Header from "../components/Header";
import Filter from "../components/Filter";
import PropertyList from "../components/PropertyList";

const Home = () => {
  const isOwner = useSelector(checkIsOwner);
  if (isOwner) return <Redirect to={OWNER} />;

  return (
    <div className="rumah">
      <Header />
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Filter />
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <PropertyList />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
