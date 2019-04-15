import React, { Component } from 'react';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Auth.css";




class Auth extends Component {
    constructor(){
        super();

        this.state = {
            username: "",
            password: ""
        }
    }


    handleUsernameChange = (e) => {
          this.setState({
              username: e.target.value
          });
    }



    handlePasswordChange = (e) => {
        this.setState({
               password: e.target.value
        });
    }


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

    axios.post('/api/register', user)
    .then(response => {
      console.log(response.data)
         this.props.history.push('/');
    });
    this.resetState();
  };





render(){
    return(
        <div className='auth-container'>
            <div className="auth">
                <div className="logo">
                <img 
                className="img"
                src={logo} 
                alt="logo" />
                </div>
            
                <div className="title"> 
                    <h1 className="page-title">Helo</h1>
                </div>

                <div className="username">
                    <p className="username-title">Username:</p>
                    <input 
                    className="username-input"
                    type="text"
                    onChange={this.handleUsernameChange}
                    />
                </div>

                <div className="password">
                    <p className="password-title">Password:</p> 
                    <input 
                    className="password-input"
                    type="text"
                    onChange={this.handlePasswordChange}
                    />
                </div>

                <div className="buttons">
                    <Link 
                    className="login-button"
                    to="/Dashboard">
                      Login
                    </Link>
                    
                    <Link
                    className="register-button"
                    to="/Dashboard"
                    onClick={this.createUser}
                    >
                        Register
                    </Link>  
                </div>
            </div>
        </div>
    );


}



} 


export default Auth;