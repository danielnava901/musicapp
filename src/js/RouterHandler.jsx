
import React from "react";
import { connect } from "react-redux";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./components/container/Header/Header.jsx";
import Login from "./components/container/LoginForm/LoginForm.jsx";
import Register from "./components/container/RegisterForm/RegisterForm.jsx";
import Dashboard from "./components/container/DashboardMain/DashboardMain.jsx";
import Hello from "./components/container/Hello/Hello.jsx";

import {PrivateRoute, RedirectRoute} from "./components/container/PrivateRoutes/PrivateRoutes.jsx";
import { setToken } from "../js/actions/index";

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setToken: token => dispatch(setToken(token))
  }
}

const RouterHandlerMain = (props) => {
  console.log("porps", props);
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
          <Route exact path="/logout" component={(pros) => {
              props.setToken(null); 
              return <RedirectRoute to="/login"/>}
          } />
          <Route exact path="/" component={Hello}/>
        </Switch>
      </Router>
    </div>
  );
}


const RouterHandler = connect(mapStateToProps, mapDispatchToProps)(RouterHandlerMain);
export default RouterHandler;