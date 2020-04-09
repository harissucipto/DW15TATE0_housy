import React, { useState } from "react";
import { Avatar, Menu, MenuItem } from "@material-ui/core";
import {
  ExitToApp,
  PermIdentity,
  EventNote,
  RestorePage,
} from "@material-ui/icons";

const User = () => {
  const [anchorEl, setAncorEl] = useState(null);
  const handleClick = (evt) => setAncorEl(evt.currentTarget);
  const handleClose = () => setAncorEl(null);

  return (
    <>
      <Avatar onClick={handleClick}>HS</Avatar>
      <Menu
        style={{ marginTop: "50px" }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        keepMounted
        onClose={handleClose}
      >
        <MenuItem>
          <PermIdentity color="primary" />
          <span style={styles.titleIcon}>Profile </span>
        </MenuItem>
        <MenuItem>
          <EventNote color="primary" />
          <span style={styles.titleIcon}>My Booking</span>
        </MenuItem>
        <MenuItem>
          <RestorePage color="primary" />
          <span style={styles.titleIcon}>History</span>
        </MenuItem>
        <hr />
        <MenuItem>
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
