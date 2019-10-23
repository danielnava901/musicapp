import React from "react";
import { connect } from "react-redux";
import {
  Route, Redirect
} from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export const PrivateRoute = connect(mapStateToProps, null)(({ component: Component, user, ...rest }) => {
  /**
   * Revisa si existe token
   */
  return (
      <Route exact {...rest} render={props => {
          if(sessionStorage.getItem("token") && sessionStorage.getItem("token") != "null") {
              return <Component {...props} />;
          }else {
              return <Redirect
                  to={{
                      pathname: "/login",
                      }}
                  />;
              }
          }}
      />
  );
});

export const RedirectRoute = connect(mapStateToProps, null)(({ to, ...rest }) => {
  /**
   * Revisa si existe token
   */
  return (
      <Redirect
          to={{
              pathname: to,
          }}
      />
  );
});
