import React, { Component } from "react";
import { connect } from "react-redux";
import {get} from '../../../utilities/request';

class LoginForm extends Component {
  constructor(props) {
    super();
    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(ev) {
    ev.preventDefault();
    console.log(this.state);

  }

  handleChange(ev) {
    ev.preventDefault();
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  render() {
  
    let {email, password} = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Login</label>
            <input
              placeholder="Email"
              type="text"
              className="form-control"
              name="email"
              id="email_"
              value={email}
              onChange={this.handleChange}
            />

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
          <button type="submit" className="btn btn-success btn-lg">
            SAVE
          </button>
        </form>
      </div>
    )
  }
}

const Login = connect(null, null)(LoginForm);
export default Login;