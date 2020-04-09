import React from "react";
import Header from "../components/Header";
import Filter from "../components/Filter";
import PropertyList from "../components/PropertyList";

const Home = () => {
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
