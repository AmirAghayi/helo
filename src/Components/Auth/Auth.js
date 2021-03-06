import React, { Component } from "react";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "../../redux/reducer";
import "./Auth.css";

class Auth extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      error: "",
      registerMessage: ""
    };
  }

  handleUsernameChange = e => {
    this.setState({
      username: e.target.value
    });
  };

  handlePasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  };

  resetState = () => {
    this.setState({
      username: "",
      password: ""
    });
  };




  createUser = () => {
    const { username, password } = this.state;
    const user = {
      username,
      password
    };
    this.setState({
      error: ""
    });
    let validation = this.renderAlert();
    if (validation) {
      axios.post("/auth/register", user).then(response => {
        console.log(response.data);
        this.props.history.push("/");
        this.resetState();
      });
      this.resetState();
      this.setState({
        registerMessage: "Registered Successfully!"
      });
    } else {
      this.setState({
        error: { data: "Username and Password Required!" }
      });
    }
  };




  renderAlert = () => {
    return this.state.username === "" || this.state.password === ""
      ? false
      : true;
  };




  loginUser = () => {
    const { username, password } = this.state;
    const user = {
      username,
      password
    };
    this.setState({
      error: ""
    });
    let validation = this.renderAlert();
    if (validation) {
      axios.post("/auth/login", user)
        .then(response => {
            console.log('response',response.data)
          this.props.setUser(response.data.user.username);

          this.props.history.push("/Dashboard");
        })
        .catch(err => {
          console.log("this is error in login user", err);
          this.setState({
            error: {data:err.response.data.message}
          });
        });
    } else {
      this.setState({
        error: { data: "Username and Password Required!" }
      });
    }
  };




  render() {
    return (
      <div className="auth-container">
        <div className="auth">
          <div className="logo">
            <img  src={logo} alt="logo" />
          </div>

          <div className="title">
            <h1>Helo</h1>
          </div>

          {this.state.error ? (
            <p className="error-message">{this.state.error.data}</p>
          ) : (
            <p>{this.state.registerMessage}</p>
          )}

          <div className="username">
            <p className="username-title">Username:</p>
            <input
              className="username-input"
              type="text"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </div>

          <div className="password">
            <p className="password-title">Password:</p>
            <input
              className="password-input"
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </div>

          <div className="buttons">
            <button className="login-button" onClick={() => this.loginUser()}>
              Login
            </button>

            <Link className="register-button" to="/" onClick={this.createUser}>
              Register
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { UsernameType } = state;
  return {
    UsernameType
  };
}

export default connect(
  mapStateToProps,
  { setUser }
)(Auth);
