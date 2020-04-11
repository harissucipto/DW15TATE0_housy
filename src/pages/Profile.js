import React from "react";
import { Card, CardContent, Grid } from "@material-ui/core";
import { useStoreState } from "easy-peasy";

import HeaderDetail from "../components/HeaderDetail";
import ProfileInfo from "../components/ProfileInfo";
import ProfileImage from "../components/ProfileImage";
import { Redirect } from "react-router-dom";
import { HOME } from "../constants/routes";

const Profile = () => {
  const { user } = useStoreState(({ users }) => users);

  if (!Boolean(user)) return <Redirect to={HOME} />;

  return (
    <div>
      <HeaderDetail />
      <div style={styles.container}>
        <Card variant="outlined" style={styles.profile}>
          <CardContent>
            <Grid container>
              <Grid item md={7}>
                <ProfileInfo {...user} />
              </Grid>
              <Grid item md={5}>
                <ProfileImage image={user.profileImage} status={user.status} />
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
