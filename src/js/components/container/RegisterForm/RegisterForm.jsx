import React, { Component } from "react";
import { connect } from "react-redux";
import {post} from '../../../utilities/request';
import {
  LOGIN, REGISTER
} from '../../../constants/api-routes';

class RegisterForm extends Component {
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

  async handleSubmit(ev) {
    ev.preventDefault();
    console.log(this.state);
    let formData = new FormData();
    formData.append("email", this.state.email);
    formData.append("password", this.state.password);

    let respi = await post(LOGIN, formData);
    
  }

  async handleRegister(ev) {
    ev.preventDefault();
    console.log(this.state);
    let formData = new FormData();
    formData.append("email", this.state.email);
    formData.append("password", this.state.password);
    formData.append("username", this.state.username);

    let respi = await post(REGISTER, formData);
    
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
                <label htmlFor="username_">Usuario</label>
                <input
                  placeholder="Usuario"
                  type="text"
                  className="form-control"
                  name="username"
                  id="username_"
                  value={username}
                  onChange={this.handleChange}
                />
              </div>
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
            <button onClick={this.handleRegister} className="button button-success col-sm-12">
              Register
            </button>
            </div>
          </div>
        
        </form>
      
      </div>
    )
  }
}

const Register = connect(null, null)(RegisterForm);
export default Register;