import React, { Component } from 'react';



class Post extends Component {
    


render(){
    return(
        <div>
            <div className="posts">
                <div className="post-title">
                    {this.props.post.title}
                </div>

                <div className="post-image">
                    <img src={this.props.post.imageurl} />
                </div>
                
                <div className="post-content">
                    {this.props.post.content}
                </div>
                
                
            </div>
            
        </div>
    );


}



} 


export default Post;