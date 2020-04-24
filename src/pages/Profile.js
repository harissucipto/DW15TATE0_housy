import React, { useEffect } from "react";
import { Card, CardContent, Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import HeaderDetail from "../components/HeaderDetail";
import ProfileInfo from "../components/ProfileInfo";
import ProfileImage from "../components/ProfileImage";
import { Redirect } from "react-router-dom";
import { HOME } from "../constants/routes";
import { checkIsLogin, getUser, getInfoUserLogin } from "../store/auth";

const Profile = () => {
  const isLogin = useSelector(checkIsLogin);
  const user = useSelector(getUser);

  const dispatch = useDispatch();

  // fetch daa user if login
  useEffect(() => {
    if (isLogin) {
      dispatch(getInfoUserLogin);
    }
  }, [dispatch, isLogin]);

  if (!isLogin) return <Redirect to={HOME} />;

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
                <ProfileImage image={""} status={user.status} />
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
