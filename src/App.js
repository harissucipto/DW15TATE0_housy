import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  HOME,
  ADD_PROPERTY,
  OWNER,
  PROFILE,
  MY_BOOKING,
  MY_HISTORY,
} from "./constants/routes";
import Home from "./pages/Home";
// import HomeOwner from "./pages/HomeOwner";
// import Profile from "./pages/Profile";
import DetailProperty from "./pages/DetailProperty";
// import AddProperty from "./pages/AddProperty";
// import MyBooking from "./pages/MyBooking";
// import MyHistory from "./pages/MyHistory";

function App() {
  return (
    <Router>
      <Switch>
        {/*  <Route path={MY_HISTORY} component={MyHistory} />
        <Route path={MY_BOOKING} component={MyBooking} />
        <Route path={PROFILE} component={Profile} />
        <Route path={OWNER} component={HomeOwner} />
        <Route path={ADD_PROPERTY} component={AddProperty} />
        */}
        <Route path="/detail-property/:id" component={DetailProperty} />
        <Route path={HOME} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
