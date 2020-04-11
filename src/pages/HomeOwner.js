import React from "react";
import { useStoreState } from "easy-peasy";
import { Redirect } from "react-router-dom";

import { HOME } from "../constants/routes";
import HeaderDetail from "../components/HeaderDetail";
import IncomingTransaction from "../components/IncomingTransaction";

const HomeOwner = () => {
  const { user } = useStoreState(({ users }) => users);
  if (!Boolean(user)) return <Redirect to={HOME} />;

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
