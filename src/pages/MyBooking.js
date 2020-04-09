import React from "react";

import HeaderDetail from "../components/HeaderDetail";
import BookingList from "../components/BookingList";

const MyBooking = () => {
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
