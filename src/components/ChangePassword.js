import React from "react";
import { Dialog, Button, DialogContent, TextField } from "@material-ui/core";

const ChangePassword = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogContent>
        <h1
          style={{
            textAlign: "center",
            marginTop: "21px",
            marginBottom: "30px",
          }}
        >
          Change Password
        </h1>
        <div>
          <h2>Old Password</h2>
          <TextField variant="filled" fullWidth type="password" />
          <h2>Confirm Password</h2>
          <TextField variant="filled" fullWidth type="password" />
          <h2>New Password</h2>
          <TextField variant="filled" fullWidth type="password" />
        </div>
        <div
          style={{
            marginTop: "35px",
            marginBottom: "20px",
          }}
        >
          <Button color="primary" variant="contained" fullWidth size="large">
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChangePassword;
