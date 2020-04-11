import React from "react";
import { useStoreState } from "easy-peasy";
import { Redirect } from "react-router-dom";

import { OWNER } from "../constants/routes";
import Header from "../components/Header";
import Filter from "../components/Filter";
import PropertyList from "../components/PropertyList";

const Home = () => {
  const { user } = useStoreState(({ users }) => users);
  if (user && user.status === "owner") return <Redirect to={OWNER} />;

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
