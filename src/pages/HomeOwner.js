import React from "react";

import HeaderDetail from "../components/HeaderDetail";
import IncomingTransaction from "../components/IncomingTransaction";

const HomeOwner = () => {
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
