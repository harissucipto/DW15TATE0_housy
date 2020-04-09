import React, { useState } from "react";
import { Dialog, Button, DialogContent, TextField } from "@material-ui/core";

const Signin = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button
        style={{
          marginRight: "20px",
        }}
        onClick={handleOpen}
      >
        Sign in
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth="true">
        <DialogContent>
          <h1 style={{ textAlign: "center" }}>Sign in</h1>
          <div s>
            <h2>Login</h2>
            <TextField variant="filled" fullWidth />
            <h2>Password</h2>
            <TextField variant="filled" fullWidth type="password" />
          </div>
          <div
            style={{
              marginTop: "35px",
            }}
          >
            <Button color="primary" variant="contained" fullWidth>
              Sign in
            </Button>
            <p style={{ textAlign: "center" }}>
              Dont have an account ? klik <b>here</b>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Signin;
