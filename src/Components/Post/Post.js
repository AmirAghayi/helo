import React, { Component } from 'react';
import axios from 'axios';
import './Post.css';
import { Link } from 'react-router-dom';


class Post extends Component {
    constructor (){
       super();

       this.state = {
          title: "",
          user: "",
          image: ""
       }

    }






render(){
    console.log(this.state)
    return(
        <div>
            <Link 
            className="post-button"
            // onClick={ () => this.getPostDetails()}
            to={`/post/${this.props.post.id}`}
            >
                <div className="posts">
                    <div className="post-title">
                        {this.props.post.title}
                    </div>


                    <div className="user-name-pic">
                        <p>{this.props.post.user.username}</p>
                    </div>

                    <div className="profie-img">
                        <img 
                            className="profile"
                            src={`https://robohash.org/${this.props.post.user.username}`}
                            alt="profile"
                        />
                    </div>

                    
                </div>
            
            </Link>
           
        </div>
    );


}



} 


export default Post;