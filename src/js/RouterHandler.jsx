
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

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const PrivateRoute = connect(mapStateToProps, null)(({ component: Component, user, ...rest }) => {
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
});

const RedirectRoute = connect(mapStateToProps, null)(({ to, ...rest }) => {
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

const Header = connect(mapStateToProps, null)(({user}) => {
  return <div style={{marginTop: 0}}>
    
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
        {
          user.token ? <li><Link to="/app/user">Mis datos</Link></li> : <li>daniaaaa</li>
        }
      </ul>
    </div>
  </div>
})

const RouterHandlerMain = (props) => {
  
  return (
    <div>
      <Header />
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/dashboard" component={Dashboard}/>
          <PrivateRoute exact path="/app/user" component={Dashboard}/>
        </Switch>
      </Router>
    </div>
  );
}


const RouterHandler = connect(mapStateToProps, null)(RouterHandlerMain);
export default RouterHandler;