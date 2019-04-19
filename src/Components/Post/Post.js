import React, { Component } from 'react';



class Post extends Component {
    


render(){
    return(
        <div>
            <div className="posts">
                <div className="post-title">
                    {this.props.post.title}
                </div>


                <div className="user-name-pic">
                      <p>{this.props.user}</p>
                </div>

                <div className="profie-img">
                     <img 
                     className="profile"
                     src={`https://robohash.org/${this.props.user}`}
                     alt="profile"
                     />
                </div>

                {/* <div className="post-image">
                    <img src={this.props.post.imageurl} alt="profile"/>
                </div> */}
                
                {/* <div className="post-content">
                    {this.props.post.content}
                </div> */}
                
                
            </div>
            
        </div>
    );


}



} 


export default Post;