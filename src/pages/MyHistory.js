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
    <div className="rumah">
      <HeaderDetail />
      <div className="sub-rumah">
        <HistoryList />
      </div>
    </div>
  );
};

export default MyHistory;
