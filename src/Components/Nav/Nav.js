import React from 'react';
import dashboard from './images/dashboard.png';
import newpost from './images/newpost.png';
import logout from './images/logout.png';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../Nav/Nav.css';
import axios from 'axios';
import { setUser } from '../../redux/reducer';

function Nav (props) {
    return(
        
        <div className="dashboard-navbar">
        
            <div className="img-1">
                     <img 
                     className="profile"
                     src={`https://robohash.org/${props.user}`}
                     alt="profile"
                     />
            </div>
             
            <div className="username">
                <p className="user-name">{props.user}</p>
            </div>


<div className="nav-icons">
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
                <a href="javascript:void(0)" onClick={() => {
                    axios.get('/auth/logout')
                        .then(() => {
                            props.setUser('');
                            props.history.push('/');
                        })
                        .catch(err => {
                            console.warn(err);
                        });
                }}>
                    <img  
                        className="logout-nav"
                        src={logout}
                        alt="Log Out" />
                </a>
                    
           </div>
        </div>
        </div>
    );


}






export default withRouter(connect(state => state, { setUser })(Nav));