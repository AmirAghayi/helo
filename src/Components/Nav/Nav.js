import React from 'react';
import circle from './images/circle.png';
import dashboard from './images/dashboard.png';
import newpost from './images/newpost.png';
import logout from './images/logout.png';
import { Link } from 'react-router-dom';
import '../Nav/Nav.css';



export default function Nav (props) {
    
    console.log(props.username)

    return(
        
        <div className="dashboard-navbar">
        
            <div className="img-1">
                     <img 
                     className="profile"
                     src={circle}
                     alt="profile"
                     />
            </div>
             
            <div className="username">
                <p className="user-name">username</p>
            </div>

            <div className='img-2'> 
                <Link to="/Dashboard">
                    <img 
                    className="dashboard-home-nav"
                    src={dashboard}
                    alt="dashboard-Home" 
                    /> 
                </Link>
                   
            </div>


            <div className="img-3">
                <Link to="/new">
                    <img 
                    className="newpost-nav"
                    src={newpost}
                    alt="New Post"
                    />
                </Link>
                   
            </div>

           <div className="img-4">
               <Link to="/">
                    <img  
                    className="logout-nav"
                    src={logout}
                    alt="Log Out"
                    />
               </Link>
                    
           </div>




        </div>
    );


}



