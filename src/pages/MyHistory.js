import React from "react";

import HeaderDetail from "../components/HeaderDetail";
import HistoryList from "../components/HistoryList";

const MyHistory = () => {
  return (
    <div>
      <HeaderDetail />
      <div style={styles.container}>
        <HistoryList />
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1035px",
    margin: "0 auto",
  },
};

export default MyHistory;
