import React from "react";

import HeaderDetail from "../components/HeaderDetail";
import HistoryList from "../components/HistoryList";
import { useSelector } from "react-redux";
import { checkIsLogin } from "../store/auth";
import { Redirect } from "react-router-dom";
import { HOME } from "../constants/routes";

const MyHistory = () => {
  const isLogin = useSelector(checkIsLogin);
  if (!isLogin) return <Redirect to={HOME} />;

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
