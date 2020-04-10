import React, { useState } from "react";
import { Avatar, Menu, MenuItem } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {
  ExitToApp,
  PermIdentity,
  EventNote,
  RestorePage,
} from "@material-ui/icons";

import { PROFILE, MY_BOOKING, MY_HISTORY, HOME } from "../constants/routes";

const User = () => {
  const [anchorEl, setAncorEl] = useState(null);
  const handleClick = (evt) => setAncorEl(evt.currentTarget);
  const handleClose = () => setAncorEl(null);

  const history = useHistory();
  const handleNavigate = (path) => () => history.push(path);

  return (
    <>
      <Avatar onClick={handleClick}>HS</Avatar>
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
        <MenuItem onClick={handleNavigate(MY_BOOKING)}>
          <EventNote color="primary" />
          <span style={styles.titleIcon}>My Booking</span>
        </MenuItem>
        <MenuItem onClick={handleNavigate(MY_HISTORY)}>
          <RestorePage color="primary" />
          <span style={styles.titleIcon}>History</span>
        </MenuItem>
        <hr />
        <MenuItem onClick={handleNavigate(HOME)}>
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

export default User;
