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
    <div>
      <HeaderDetail />
      <div style={styles.container}>
        <BookingList />
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

export default MyBooking;
