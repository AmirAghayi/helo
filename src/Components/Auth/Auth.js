import React, { Component } from 'react';



class Auth extends Component {
    


render(){
    return(
        <div>
            <div className="logo">
               <img  />
            </div>
           
            <div className="title"> 
                <h1>Helo</h1>
            </div>

             <div className="username">
                 <p>Username:</p>
                 <input />
             </div>

            <div className="password">
                <p>Password:</p> 
                <input />
            </div>

            <div className="buttons">
                <button>Login</button>
                <button>Register</button>
            </div>



        </div>
    );


}



} 


export default Auth;