import React, { useState, useEffect } from "react";
import BookingItem from "./BookingItem";
import { useStoreState, useStoreActions } from "easy-peasy";
import Loading from "./Loading";

const dataBookings = [
  {
    id: "ad2r23",
    property: {
      name: "House Astina",
      address:
        "Jl. Elang IV Perum Permata Bintaro Residence, Pondok Aren,Tangerang Selatan",
      amenities: ["Furnished"],
      typeOfRent: "Year",
    },
    checkIn: "30 March 2020",
    checkOut: "31 March 2021",
    date: "Saturday, 30 March 2020",
    longTimeRent: "1 Year",
    status: "approve",
    invoiceImage: "sks",
    invoiceNumber: "TCK010",
    dateInvoice: "Sunday, 31 March 2020",
  },
];

const HistoryList = () => {
  const [loading, setLoading] = useState(true);
  const [listData, setData] = useState([]);
  const { getMyHistory } = useStoreActions(({ myBooking }) => myBooking);
  const { user } = useStoreState(({ users }) => users);

  useEffect(() => {
    if (user && user.id) {
      const respon = getMyHistory(user.id);
      setData(respon);
      setLoading(false);
    }
  }, [user, getMyHistory]);

  return (
    <div>
      {!loading && !Boolean(listData.length) ? (
        <div>
          <h1>My History</h1>
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

export default HistoryList;
