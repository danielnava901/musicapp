import React, { Component } from "react";
import { connect } from "react-redux";
import {post} from '../../../utilities/request';
import {
  LOGIN
} from '../../../constants/api-routes';
import { setToken, loginUser } from "../../../actions/index";


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit(ev) {
    ev.preventDefault();
    let formData = new FormData();
    formData.append("email", this.state.email);
    formData.append("password", this.state.password);

    let resp = await post(LOGIN, formData);
    console.log(resp);
    if(Number(resp.code) === 200) {
      this.props.setToken(resp.jwt);
      this.props.loginUser(resp.user);
      this.props.history.push("/dashboard");
    }else {
      alert(resp.msg);
    }

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

const  mapDispatchToProps = (dispatch) => {
  return {
    setToken: token => dispatch(setToken(token)),
    loginUser: user => dispatch(loginUser(user))
  }
};

const Login = connect(null, mapDispatchToProps)(LoginForm);

export default Login;