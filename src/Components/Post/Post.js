import React, { Component } from 'react';



class Post extends Component {
    


render(){
    return(
        <div>
            {this.props.mappedPostsList}
        </div>
    );


}



} 


export default Post;