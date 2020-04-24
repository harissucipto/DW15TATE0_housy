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
import HomeOwner from "./pages/HomeOwner";
import Profile from "./pages/Profile";
import DetailProperty from "./pages/DetailProperty";
import MyHistory from "./pages/MyHistory";
import MyBooking from "./pages/MyBooking";

// import AddProperty from "./pages/AddProperty";

function App() {
  return (
    <Router>
      <Switch>
        {/* 
       
       
        <Route path={ADD_PROPERTY} component={AddProperty} />
        */}
        <Route path={MY_BOOKING} component={MyBooking} />
        <Route path={MY_HISTORY} component={MyHistory} />
        <Route path={OWNER} component={HomeOwner} />
        <Route path={PROFILE} component={Profile} />
        <Route path="/detail-property/:id" component={DetailProperty} />
        <Route path={HOME} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
