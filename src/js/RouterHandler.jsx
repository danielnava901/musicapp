
import React, {Component} from "react";
import { connect } from "react-redux";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link, Redirect
} from "react-router-dom";
import Login from "./components/container/LoginForm/LoginForm.jsx";
import Register from "./components/container/RegisterForm/RegisterForm.jsx";
import Dashboard from "./components/container/DashboardMain/DashboardMain.jsx";

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  /**
   * Revisa si existe token
   */
  return (
      <Route exact {...rest} render={props => {
          if(user.token) {
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
};
const RedirectRoute = ({ to, ...rest }) => {
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
};

const RouterHandlerMain = (props) => {
  
  return (
    <Router>
      <div style={{marginTop: 0}}>
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/login">DNV</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/login">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} user={props.user}/>
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};
const RouterHandler = connect(mapStateToProps, null)(RouterHandlerMain);
export default RouterHandler;