import React, { useState } from "react";
import { Button, Dialog, DialogContent, TextField } from "@material-ui/core";

const BookNow = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <TextField type="date" fullWidth variant="filled" />
          <h3>Check-out</h3>
          <TextField type="date" fullWidth variant="filled" />
          <div style={{ margin: "50px 30%", marginBottom: "20px" }}>
            <Button size="large" fullWidth variant="contained" color="primary">
              Order
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BookNow;
