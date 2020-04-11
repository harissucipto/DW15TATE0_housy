import React, { useState } from "react";
import {
  Dialog,
  Button,
  DialogContent,
  TextField,
  MenuItem,
} from "@material-ui/core";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useHistory } from "react-router-dom";

import { HOME, OWNER } from "../constants/routes";

const genders = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
];

const listAses = [
  {
    label: "Tenant",
    value: "tenant",
  },
  {
    label: "Owner",
    value: "owner",
  },
];

const Signup = () => {
  const { open } = useStoreState(({ signup }) => signup);
  const { setOpen } = useStoreActions(({ signup }) => signup);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const saveValue = (setState) => (evt) => setState(evt.target.value);
  const isEveryValueFil = (obj) =>
    Object.values(obj).every((item) => Boolean(item));
  const { onSignup } = useStoreActions(({ users }) => users);
  const history = useHistory();

  const handleSignup = () => {
    const newUser = {
      fullName,
      username,
      email,
      password,
      status,
      gender,
      phone,
      address,
    };
    if (!isEveryValueFil(newUser)) {
      console.log("data belum lengkap");
      return "";
    }

    const user = onSignup(newUser);
    console.log(user);
    if (!Boolean(user)) {
      console.log("data bermasalah");
      return;
    }

    if (status === "tenant") {
      setOpen(false);
      history.push(HOME);
    }

    if (status === "owner") {
      setOpen(false);
      history.push(OWNER);
    }
  };

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
            <TextField
              variant="filled"
              fullWidth
              value={fullName}
              onChange={saveValue(setFullName)}
            />
            <h2>Username</h2>
            <TextField
              variant="filled"
              fullWidth
              value={username}
              onChange={saveValue(setUsername)}
            />
            <h2>Email</h2>
            <TextField
              variant="filled"
              fullWidth
              type="email"
              value={email}
              onChange={saveValue(setEmail)}
            />
            <h2>Password</h2>
            <TextField
              variant="filled"
              fullWidth
              type="password"
              value={password}
              onChange={saveValue(setPassword)}
            />
            <h2>List As</h2>
            <TextField
              variant="filled"
              fullWidth
              select
              value={status}
              onChange={saveValue(setStatus)}
            >
              {listAses.map(({ label, value }) => (
                <MenuItem value={value} key={value}>
                  {label}
                </MenuItem>
              ))}
            </TextField>
            <h2>Gender</h2>
            <TextField
              variant="filled"
              fullWidth
              select
              value={gender}
              onChange={saveValue(setGender)}
            >
              {genders.map(({ label, value }) => (
                <MenuItem value={value} key={value}>
                  {label}
                </MenuItem>
              ))}
            </TextField>
            <h2>Phone</h2>
            <TextField
              variant="filled"
              fullWidth
              value={address}
              onChange={saveValue(setAddress)}
            />
            <h2>Address</h2>
            <TextField
              multiline
              rows="6"
              variant="filled"
              fullWidth
              value={phone}
              onChange={saveValue(setPhone)}
            />
          </div>
          <div
            style={{
              margin: "35px 0",
            }}
          >
            <Button
              color="primary"
              variant="contained"
              fullWidth
              onClick={handleSignup}
            >
              Sign up
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Signup;
