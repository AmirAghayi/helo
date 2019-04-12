import React, { Component } from 'react';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';
import "./Auth.css";




class Auth extends Component {
    


render(){
    return(
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
                 />
             </div>

            <div className="password">
                <p className="password-title">Password:</p> 
                <input 
                className="password-input"
                />
            </div>

            <div className="buttons">
                <Link 
                className="login-btn"
                to="/Dashboard">
                    <button
                    className="login-btn"
                    >Login</button>
                </Link>
                
                <Link
                className="register-btn"
                >
                    <button
                    className="register-btn"
                    >Register</button>
                </Link>
                
            </div>



        </div>
    );


}



} 


export default Auth;