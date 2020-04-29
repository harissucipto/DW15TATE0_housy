import React from "react";

import HeaderDetail from "../components/HeaderDetail";
import BookingList from "../components/BookingList";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { checkIsLogin } from "../store/auth";
import { HOME } from "../constants/routes";

const MyBooking = () => {
  const isLogin = useSelector(checkIsLogin);
  if (!isLogin) return <Redirect to={HOME} />;

  return (
    <div className="rumah">
      <HeaderDetail />
      <div clasName="sub-rumah">
        <BookingList />
      </div>
    </div>
  );
};

export default MyBooking;
