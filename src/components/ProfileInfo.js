import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import {
  AccountCircle,
  Email,
  Lock,
  House,
  Phone,
  Wc,
  Room,
} from "@material-ui/icons";
import ChangePassword from "./ChangePassword";

const profile = {
  fullName: "Haris Sucipto",
  email: "harisssucipto@gmail.com",
  status: "tenant",
  gender: "male",
  phone: "0895326993126",
  address: "Jl. lundang Panjang, Buru Karimun",
};

const _renderValueText = (text, firstUpperCase) =>
  text.length && firstUpperCase
    ? text.slice(0, 1).toUpperCase().concat(text.slice(1))
    : text;

const TextInfo = ({ title, value, Icon, onClick, firstUpperCase = true }) => (
  <>
    <Grid item xs={12}>
      <Grid container>
        <Grid style={styles.iconContainer} item xs={2}>
          <Icon style={styles.icon} />
        </Grid>
        <Grid item xs={10}>
          {Boolean(onClick) ? (
            <span
              onClick={onClick}
              style={{ ...styles.title, color: "skyBlue", cursor: "pointer" }}
            >
              {_renderValueText(value, firstUpperCase)}
            </span>
          ) : (
            <span style={styles.title}>
              {_renderValueText(value, firstUpperCase)}
            </span>
          )}
          <br />
          <span>{title}</span>
        </Grid>
      </Grid>
    </Grid>
  </>
);

const ProfileInfo = () => {
  const [openChangePassword, setOpenChangePassword] = useState(false);
  const handleCloseChangePassword = () => setOpenChangePassword(false);
  const handleOpenChangePassword = () => setOpenChangePassword(true);

  return (
    <div>
      <h2>Personal info</h2>
      <Grid container spacing={2}>
        <TextInfo
          title="Full name"
          value={profile.fullName}
          Icon={AccountCircle}
        />
        <TextInfo
          title="Email"
          value={profile.email}
          Icon={Email}
          firstUpperCase={false}
        />
        <TextInfo
          title="Password"
          value="Change Password"
          Icon={Lock}
          onClick={handleOpenChangePassword}
        />
        <TextInfo title="Status" value={profile.status} Icon={House} />
        <TextInfo title="Gender" value={profile.gender} Icon={Wc} />
        <TextInfo title="Mobile Phone" value={profile.phone} Icon={Phone} />
        <TextInfo title="Address" value={profile.address} Icon={Room} />
      </Grid>
      <ChangePassword
        open={openChangePassword}
        handleClose={handleCloseChangePassword}
      />
    </div>
  );
};

const styles = {
  iconContainer: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    fontSize: "40px",
    color: "grey",
  },
  title: {
    fontSize: "14px",
    fontWeight: "bold",
  },
};

export default ProfileInfo;
