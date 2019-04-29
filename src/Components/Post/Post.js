import React, { Component } from 'react';
import './Post.css';
import { Link } from 'react-router-dom';


class Post extends Component {
    constructor() {
        super();

        this.state = {
            title: "",
            user: "",
            image: ""
        }

    }



    render() {
        console.log(this.state)
        return (
            <Link
                className="post-button post"
                // onClick={ () => this.getPostDetails()}
                to={`/post/${this.props.post.id}`}
            >

                    
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

            </Link>
        );


    }



}


export default Post;