import React, { useState, useEffect } from "react";
import { Avatar, Menu, MenuItem } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  ExitToApp,
  PermIdentity,
  HomeOutlined,
  RestorePage,
} from "@material-ui/icons";

import { PROFILE, ADD_PROPERTY, MY_HISTORY, HOME } from "../constants/routes";
import { getUser, userLogout, getInfoUserLogin } from "../store/auth";

const Owner = () => {
  const [anchorEl, setAncorEl] = useState(null);
  const handleClick = (evt) => setAncorEl(evt.currentTarget);
  const handleClose = () => setAncorEl(null);

  const history = useHistory();
  const handleNavigate = (path) => () => history.push(path);

  const user = useSelector(getUser);
  const titleAvatar =
    user &&
    user.fullName &&
    user.fullName
      .split(" ")
      .map((item) => item.slice(0, 1))
      .join("")
      .toUpperCase();

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userLogout);
    history.push(HOME);
  };

  useEffect(() => {
    dispatch(getInfoUserLogin);
  }, [dispatch]);

  return (
    <>
      <Avatar
        onClick={handleClick}
        style={{ backgroundColor: "blue", cursor: "pointer" }}
      >
        {titleAvatar}
      </Avatar>
      <Menu
        style={{ marginTop: "55px" }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        keepMounted
        onClose={handleClose}
      >
        <MenuItem onClick={handleNavigate(PROFILE)}>
          <PermIdentity color="primary" />
          <span style={styles.titleIcon}>Profile </span>
        </MenuItem>
        <MenuItem onClick={handleNavigate(ADD_PROPERTY)}>
          <HomeOutlined color="primary" />
          <span style={styles.titleIcon}>Add Property</span>
        </MenuItem>
        <MenuItem onClick={handleNavigate(MY_HISTORY)}>
          <RestorePage color="primary" />
          <span style={styles.titleIcon}>History</span>
        </MenuItem>
        <hr />
        <MenuItem onClick={handleLogout}>
          <ExitToApp color="primary" />
          <span style={styles.titleIcon}>Logout</span>
        </MenuItem>
      </Menu>
    </>
  );
};

const styles = {
  titleIcon: {
    fontWeight: "bold",
    paddingLeft: "10px",
  },
};

export default Owner;
