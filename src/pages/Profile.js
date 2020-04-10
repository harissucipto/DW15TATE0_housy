import React from "react";
import { Card, CardContent, Grid } from "@material-ui/core";

import HeaderDetail from "../components/HeaderDetail";
import ProfileInfo from "../components/ProfileInfo";
import ProfileImage from "../components/ProfileImage";

const Profile = () => {
  return (
    <div>
      <HeaderDetail />
      <div style={styles.container}>
        <Card variant="outlined" style={styles.profile}>
          <CardContent>
            <Grid container>
              <Grid item md={7}>
                <ProfileInfo />
              </Grid>
              <Grid item md={5}>
                <ProfileImage />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "785px",
    margin: "0 auto",
    marginTop: "68px",
  },
  profile: {
    padding: "30px",
  },
};

export default Profile;
