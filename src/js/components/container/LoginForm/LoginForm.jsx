import React, { Component } from "react";
import { connect } from "react-redux";
import {post} from '../../../utilities/request';
import {
  LOGIN, REGISTER
} from '../../../constants/api-routes';

class LoginForm extends Component {
  constructor(props) {
    super();
    this.state = {
      email: '',
      password: '',
      username: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(ev) {
    ev.preventDefault();
    console.log(this.state);
    let formData = new FormData();
    formData.append("email", this.state.email);
    formData.append("password", this.state.password);

    post(LOGIN, formData)
    .then(response => console.log("REs", response));
  }

  handleRegister(ev) {
    ev.preventDefault();
    console.log(this.state);
    let formData = new FormData();
    formData.append("email", this.state.email);
    formData.append("password", this.state.password);
    formData.append("username", this.state.username);

    post(REGISTER, formData)
    .then(response => console.log("REs reg", response));
  }

  handleChange(ev) {
    ev.preventDefault();
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  render() {
  
    let {email, password, username} = this.state;

    return (
      <div className="col col-sm-12">
        <form onSubmit={this.handleSubmit} className="row">
          <div className="col col-sm-6 col-sm-offset-3">
            <div className="row">
              <div className="form-control" className="col col-sm-12">  
                <label htmlFor="email_">Correo</label>
                <input
                  placeholder="Email"
                  type="text"
                  className="form-control"
                  name="email"
                  id="email_"
                  value={email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-control" className="col col-sm-12">  
              <label htmlFor="password_">Contraseña</label>
              <input
                placeholder="Password"
                type="text"
                className="form-control"
                name="password"
                id="password_"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            
            </div>
            <div className="row">
              <button type="submit" className="button-success col-sm-12">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const Login = connect(null, null)(LoginForm);
export default Login;