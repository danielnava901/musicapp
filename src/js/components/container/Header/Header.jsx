import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const HeaderPublic = (props) => {
  return (
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
  );
}

const HeaderDashboard = (props) => {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <Link to="/login">DNV</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/app/user">Mis datos</Link> 
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
          props.user.token ? <HeaderDashboard /> : <HeaderPublic/>
        }
    </div>
  );
}

const Header = connect(mapStateToProps, null)(HeaderContainer);
export default Header;