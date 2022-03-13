import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthGuardRoute = ({ component: Component, ...rest }) => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const location = useLocation();
  console.log("location.pathname", location.pathname);
  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn === true ? <Component {...props} /> : <Redirect to="/login" />
      }
    ></Route>
  );
};

export default AuthGuardRoute;
