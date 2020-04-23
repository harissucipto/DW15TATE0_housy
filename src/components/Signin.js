import React, { useState } from "react";
import { Dialog, Button, DialogContent, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { HOME, OWNER } from "../constants/routes";
import { useSelector, useDispatch } from "react-redux";
import { getSigninIsOpen, signinOpen, signinClose } from "../store/signin";
import { signupOpen } from "../store/signup";

const Signin = () => {
  const open = useSelector(getSigninIsOpen);
  const dispatch = useDispatch();
  const handleOpen = () => dispatch(signinOpen);
  const handleClose = () => dispatch(signinClose);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onLogin = (u) => u;

  const history = useHistory();
  const handleUsername = (evt) => setUsername(evt.target.value);
  const handlePassword = (evt) => setPassword(evt.target.value);
  const handleLogin = () => {
    const user = onLogin({ username, password });
    if (Boolean(user)) {
      const { status } = user;
      handleClose();
      if (status === "tenant") {
        history.push(HOME);
      }
      if (status === "owner") {
        history.push(OWNER);
      }
    }
  };

  const handleOpenSignupModal = () => {
    dispatch(signinClose);
    dispatch(signupOpen);
  };

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
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogContent>
          <h1
            style={{
              textAlign: "center",
              marginTop: "21px",
              marginBottom: "20px",
            }}
          >
            Sign in
          </h1>
          <div>
            <h2>Username</h2>
            <TextField
              value={username}
              variant="filled"
              fullWidth
              onChange={handleUsername}
            />
            <h2>Password</h2>
            <TextField
              value={password}
              variant="filled"
              fullWidth
              type="password"
              onChange={handlePassword}
            />
          </div>
          <div
            style={{
              marginTop: "35px",
            }}
          >
            <Button
              color="primary"
              variant="contained"
              fullWidth
              onClick={handleLogin}
            >
              Sign in
            </Button>
            <p style={{ textAlign: "center" }}>
              Dont have an account ? klik{" "}
              <b
                style={{
                  cursor: "pointer",
                }}
                onClick={handleOpenSignupModal}
              >
                here
              </b>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Signin;
