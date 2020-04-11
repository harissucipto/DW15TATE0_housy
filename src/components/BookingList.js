import React, { useEffect, useState } from "react";
import BookingItem from "./BookingItem";
import { useStoreState, useStoreActions } from "easy-peasy";
import Loading from "./Loading";
import { Redirect } from "react-router-dom";

import { HOME } from "../constants/routes";

const BookingList = () => {
  const [loading, setLoading] = useState(true);
  const [listData, setData] = useState([]);
  const { getMyBooking } = useStoreActions(({ myBooking }) => myBooking);
  const { user } = useStoreState(({ users }) => users);

  useEffect(() => {
    if (user && user.id) {
      const respon = getMyBooking(user.id);
      setData(respon);
      setLoading(false);
    }
  }, [user, getMyBooking]);

  if (!Boolean(user)) return <Redirect to={HOME} />;

  return (
    <div>
      {!loading && !Boolean(listData.length) ? (
        <div>
          <h1>My Boking</h1>
          <hr />
          <h3>Tidak ada data</h3>
        </div>
      ) : null}
      {loading && <Loading />}
      {!loading &&
        listData.map((data) => (
          <BookingItem key={data.id} {...data} userStatus={user.status} />
        ))}
    </div>
  );
};

export default BookingList;
