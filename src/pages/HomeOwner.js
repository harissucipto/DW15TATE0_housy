import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { HOME } from "../constants/routes";
import HeaderDetail from "../components/HeaderDetail";
import IncomingTransaction from "../components/IncomingTransaction";
import { checkIsOwner } from "../store/auth";

const HomeOwner = () => {
  const isOwner = useSelector(checkIsOwner);
  if (!isOwner) return <Redirect to={HOME} />;

  return (
    <div>
      <HeaderDetail />
      <div style={styles.container}>
        <IncomingTransaction />
      </div>
    </div>
  );
};

const styles = {
  container: {
    margin: "2rem 8.7rem ",
  },
};

export default HomeOwner;
