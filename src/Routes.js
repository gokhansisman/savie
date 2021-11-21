import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import SignupPage from "./pages/SignupPage";
import LifeStyle from "./pages/LifeStyle";
import Housing from "./pages/Housing";
import ProfilePage from "./pages/ProfilePage";

import NavBar from "./components/Navbar";

import history from "./history";

const Routes = () => {
  const {isLogin} = useSelector(state => state.user);
  const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
      </Switch>
      <ProtectedRoute exact path="/" component={MainPage} />
      <ProtectedRoute exact path="/lifestyle" component={LifeStyle} />
      <ProtectedRoute exact path="/housing" component={Housing} />
      <ProtectedRoute exact path="/profile" component={ProfilePage} />
    </Router>
  );
};

export default Routes;
