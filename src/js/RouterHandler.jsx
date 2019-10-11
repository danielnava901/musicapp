
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./components/container/LoginForm/LoginForm.jsx";
import Register from "./components/container/RegisterForm/RegisterForm.jsx";


export default function RouterHandler() {
  return (
    <Router>
      <div style={{marginTop: 0}}>
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/">DNV</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
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
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
}