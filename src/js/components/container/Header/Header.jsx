import React from 'react';
import { connect } from "react-redux";
import {
  Link
} from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};



const HeaderPublic = (props) => {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <Link to="/">DNV</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </div>
  );
}

const HeaderDashboard = (props) => {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <Link to="/dashboard">DNV</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/app/user">Mis Listas</Link> 
        </li>
        <li>
          <Link to="/app/user">Mis Favoritas</Link> 
        </li>
        <li>
          <Link to="/logout">Salir</Link>
        </li>
      </ul>
    </div>
  );
}

const HeaderContainer = (props) => {

  return (
    <div>
        {
          sessionStorage.getItem("token") && sessionStorage.getItem("token") != "null" ? <HeaderDashboard /> : <HeaderPublic/>
        }
    </div>
  );
}

const Header = connect(mapStateToProps, null)(HeaderContainer);
export default Header;