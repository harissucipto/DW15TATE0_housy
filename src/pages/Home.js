/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { OWNER } from "../constants/routes";
import { checkIsOwner } from "../store/auth";
import Header from "../components/Header";
import Filter from "../components/Filter";
import PropertyList from "../components/PropertyList";

const Home = () => {
  const isOwner = useSelector(checkIsOwner);
  if (isOwner) return <Redirect to={OWNER} />;

  return (
    <div>
      <Header />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Filter />
        <PropertyList />
      </div>
    </div>
  );
};

export default Home;
