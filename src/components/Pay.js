import React, { useState } from "react";
import { Button, Dialog, DialogContent } from "@material-ui/core";

import { useDispatch } from "react-redux";
import { updateOrder, orderReceived } from "../store/orders";

const Pay = ({ id }) => {
  const dispatch = useDispatch();
  const handlePay = async () => {
    const { type } = await dispatch(updateOrder(id, { status: "pending" }));
    if (type === orderReceived.type) {
      console.log("berhasil");
    }
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    handlePay();
  };

  return (
    <>
      <Button
        fullWidth
        color="primary"
        variant="contained"
        size="large"
        onClick={handleOpen}
      >
        Pay
      </Button>
      <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose}>
        <DialogContent style={styles.content}>
          <h3>
            Pembayaran Anda Akan di Konfirmasi dalam 1 x 24 Jam Untuk melihat
            pesanan Klik{" "}
            <span style={styles.link} onClick={handleClose}>
              Disini
            </span>{" "}
            Terimakasih
          </h3>
        </DialogContent>
      </Dialog>
    </>
  );
};

const styles = {
  content: {
    fontSize: "20px",
    color: "grey",
    textAlign: "center",
  },
  link: {
    textDecoration: "underline",
    fontWeight: "bold",
    color: "black",
    cursor: "pointer",
  },
};

export default Pay;
