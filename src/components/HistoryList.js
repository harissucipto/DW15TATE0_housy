import React, { useEffect } from "react";
import BookingItem from "./BookingItem";
import Loading from "./Loading";
import { useSelector, useDispatch } from "react-redux";
import { getOrders, loadOrders } from "../store/orders";
import { checkIsLogin, getUser } from "../store/auth";
import { Redirect } from "react-router-dom";
import { HOME } from "../constants/routes";

const HistoryList = () => {
  const { list, loading, message } = useSelector(getOrders);
  const dispatch = useDispatch();
  const isLogin = useSelector(checkIsLogin);
  const { role } = useSelector(getUser);

  useEffect(() => {
    if (isLogin) {
      dispatch(loadOrders("history"));
    }
  }, [dispatch, isLogin]);

  if (!isLogin) return <Redirect to={HOME} />;

  return (
    <div>
      {!loading && !Boolean(list.length) ? (
        <div>
          <h1>My History</h1>
          <hr />
          {message ? <h3>{message}</h3> : <h3>Tidak ada data</h3>}
        </div>
      ) : null}
      {loading && <Loading />}
      {!loading && Boolean(list.length)
        ? list.map((data) => (
            <BookingItem key={data.id} {...data} userStatus={role} />
          ))
        : null}
    </div>
  );
};

export default HistoryList;
