import React, { useState } from "react";
import { Avatar, Menu, MenuItem } from "@material-ui/core";
import {
  ExitToApp,
  PermIdentity,
  HomeOutlined,
  RestorePage,
} from "@material-ui/icons";

const Owner = () => {
  const [anchorEl, setAncorEl] = useState(null);
  const handleClick = (evt) => setAncorEl(evt.currentTarget);
  const handleClose = () => setAncorEl(null);

  return (
    <>
      <Avatar onClick={handleClick}>Owner</Avatar>
      <Menu
        style={{ marginTop: "55px" }}
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
          <HomeOutlined color="primary" />
          <span style={styles.titleIcon}>Add Property</span>
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

export default Owner;
