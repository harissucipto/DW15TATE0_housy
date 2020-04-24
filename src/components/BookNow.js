import React, { useState } from "react";
import { Button, Dialog, DialogContent, TextField } from "@material-ui/core";
import { format } from "date-fns";
import { useHistory } from "react-router-dom";

import { MY_BOOKING } from "../constants/routes";
import { useSelector, useDispatch } from "react-redux";
import { checkIsLogin, getUser } from "../store/auth";
import { signinOpen } from "../store/signin";

const BookNow = ({ propertyID }) => {
  const [open, setOpen] = useState(false);

  const isLogin = useSelector(checkIsLogin);
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const handleOpen = () => {
    if (isLogin) {
      setOpen(true);
      return;
    }

    dispatch(signinOpen);
  };
  const handleClose = () => setOpen(false);

  const formatDate = (date) => format(date, "yyyy-MM-dd");
  const [checkIn, setCheckIn] = useState(formatDate(new Date()));
  const [checkOut, setCheckOut] = useState(formatDate(new Date()));
  const saveValue = (setState) => (evt) => {
    setState(evt.target.value);
  };

  const history = useHistory();
  const addOrder = (f) => f;
  const handleBooking = () => {
    const data = {
      propertyID,
      checkIn: checkIn,
      checkOut: checkOut,
      date: formatDate(new Date()),
      longTimeRent: "1 Year",
      status: "waitingPayment",
    };

    const respOrder = addOrder(data);
    if (respOrder) {
      console.log("berhasil");
      handleClose();
      history.push(MY_BOOKING);

      return;
    }

    console.log("gagal");
  };

  if (user && user.role !== "tenant") return null;
  return (
    <>
      <Button
        onClick={handleOpen}
        variant="contained"
        size="large"
        color="primary"
      >
        BOOK NOW
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
        <DialogContent>
          <h1 style={{ margin: "30px 0", textAlign: "center" }}>
            How long you will stay
          </h1>
          <h3>Check-in</h3>
          <TextField
            type="date"
            fullWidth
            variant="filled"
            value={checkIn}
            onChange={saveValue(setCheckIn)}
          />
          <h3>Check-out</h3>
          <TextField
            type="date"
            fullWidth
            variant="filled"
            value={checkOut}
            onChange={saveValue(setCheckOut)}
          />
          <div style={{ margin: "50px 30%", marginBottom: "20px" }}>
            <Button
              size="large"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleBooking}
            >
              Order
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BookNow;
