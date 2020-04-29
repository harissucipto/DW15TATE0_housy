import React, { useState } from "react";
import { Dialog, Button, DialogContent, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { HOME, OWNER } from "../constants/routes";
import { useSelector, useDispatch } from "react-redux";
import { getSigninIsOpen, signinOpen, signinClose } from "../store/signin";
import { signupOpen } from "../store/signup";
import Loading from "./Loading";
import {
  userLogin,
  getAuth,
  userLoginReceived,
  clearMessage,
} from "../store/auth";

const Signin = () => {
  const open = useSelector(getSigninIsOpen);
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(clearMessage);
    dispatch(signinOpen);
  };
  const handleClose = () => dispatch(signinClose);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const handleUsername = (evt) => setUsername(evt.target.value);
  const handlePassword = (evt) => setPassword(evt.target.value);
  const handleLogin = async () => {
    const data = { username, password };
    const { type, payload } = await dispatch(userLogin(data));
    if (type === userLoginReceived.type) {
      const { role } = payload;
      handleClose();
      if (role === "tenant") {
        history.push(HOME);
      }
      if (role === "owner") {
        history.push(OWNER);
      }
    }
  };

  const handleOpenSignupModal = () => {
    dispatch(clearMessage);
    dispatch(signinClose);
    dispatch(signupOpen);
  };

  const { loading, message } = useSelector(getAuth);

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
          <p>{message}</p>
          {loading && <Loading />}
          {!loading && (
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
          )}
          <div
            style={{
              marginTop: "35px",
            }}
          >
            <Button
              disabled={loading}
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
