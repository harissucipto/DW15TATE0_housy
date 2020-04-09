import React from "react";
import BookingItem from "./BookingItem";

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
  return (
    <div>
      {dataBookings
        .filter((data) => data.status === "approve")
        .map((data) => (
          <BookingItem key={data.id} {...data} />
        ))}
    </div>
  );
};

export default HistoryList;
