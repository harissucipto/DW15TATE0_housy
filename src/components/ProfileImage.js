import React from "react";
import { Button } from "@material-ui/core";

const ProfileImage = ({ image }) => {
  return (
    <div>
      <div
        style={{
          ...styles.image,
          backgroundImage: `url("${image}")`,
        }}
      />
      <Button fullWidth variant="contained" color="primary">
        Change Photo Profile
      </Button>
    </div>
  );
};
const styles = {
  image: {
    width: "100%",
    height: "345px",
    backgroundColor: "grey",
    backgroundSize: "cover",
    repeat: "no-repeat",
    marginBottom: "13px",
  },
};

export default ProfileImage;
