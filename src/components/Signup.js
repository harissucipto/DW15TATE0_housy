import React, { useState } from "react";
import {
  Dialog,
  Button,
  DialogContent,
  TextField,
  MenuItem,
} from "@material-ui/core";

const genders = [
  {
    label: "Male",
    value: "Male",
  },
  {
    label: "Female",
    value: "Female",
  },
];

const listAses = [
  {
    label: "Tenant",
    value: "Tenant",
  },
  {
    label: "Owner",
    value: "Owner",
  },
];

const Signup = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Sign up
      </Button>

      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogContent>
          <h1
            style={{
              textAlign: "center",
              marginTop: "21px",
              marginBottom: "50px",
            }}
          >
            Sign up
          </h1>
          <div>
            <h2>Full Name</h2>
            <TextField variant="filled" fullWidth />
            <h2>Username</h2>
            <TextField variant="filled" fullWidth />
            <h2>Email</h2>
            <TextField variant="filled" fullWidth type="email" />
            <h2>Password</h2>
            <TextField variant="filled" fullWidth type="password" />
            <h2>List As</h2>
            <TextField variant="filled" fullWidth select>
              {listAses.map(({ label, value }) => (
                <MenuItem value={value} key={value}>
                  {label}
                </MenuItem>
              ))}
            </TextField>
            <h2>Gender</h2>
            <TextField variant="filled" fullWidth select>
              {genders.map(({ label, value }) => (
                <MenuItem value={value} key={value}>
                  {label}
                </MenuItem>
              ))}
            </TextField>
            <h2>Phone</h2>
            <TextField variant="filled" fullWidth />
            <h2>Address</h2>
            <TextField multiline rows="6" variant="filled" fullWidth />
          </div>
          <div
            style={{
              margin: "35px 0",
            }}
          >
            <Button color="primary" variant="contained" fullWidth>
              Sign up
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Signup;
