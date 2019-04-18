import React, { Component } from 'react';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import {updateUsernameType} from '../../redux/reducer';
import "./Auth.css";




class Auth extends Component {
    constructor(){
        super();

        this.state = {
            username: "",
            password: "",
            error:"",
            registerMessage: ""
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
    }


createUser = () => {
    const { username, password } = this.state;
    const user = {
      username,
      password
    };
   let validation = this.renderAlert() 
   if(validation){
    axios.post('/api/register', user)
    .then(response => {
      console.log(response.data)
         this.props.history.push('/');
         this.resetState();
    }); 
    this.resetState();
    this.setState({
        registerMessage: "Registered Successfully!"
    })
  } else{
      this.setState({
         error: "Username and Password Required!" 
  })
}
  
  };


  renderAlert = () => {
     return this.state.username === "" || this.state.password === "" ? false : true 
  }

    
    loginUser = () => {
        const { username, password } = this.state;
        const user = {
            username,
            password
        };
        axios.post('/api/login', user)
        .then( response => {
            this.props.updateUsernameType(response.data.username);
        
        this.props.history.push('/Dashboard')
    }).catch(err => {
        console.log('this is error in login user', err.data)
        this.setState({
            error: err.data
        });
       
    });
  }






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

                {this.state.error ? <p className="error-message">{this.state.error.data}</p>  : <p>{this.state.registerMessage}</p> }


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
                    type="text"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                    />
                </div>

                <div className="buttons">
                    <button 
                    className="login-button"
                    onClick={() => this.loginUser()}
                    >
                      Login
                    </button>
                    
                    <Link
                    className="register-button"
                    to="/"
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

function mapStateToProps(state){
    const{UsernameType} = state;
    return {
        UsernameType
    }
}





export default connect(mapStateToProps, {updateUsernameType })(Auth);