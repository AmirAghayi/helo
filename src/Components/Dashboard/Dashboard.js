import React, { Component } from 'react';
import Post from '../Post/Post';
import Nav from '../Nav/Nav';
import axios from 'axios';
import './Dashboard.css';



class Dashboard extends Component {
    constructor(){
        super();
    
        this.state = {
          postsList: []
        };
      }

componentDidMount(){
      this.getPosts();
} 



getposts = () => {
    axios.get('/api/posts')
    .then( response => {
        this.setState({
            postsList: response.data
        });
    });
}




render(){
    const mappedPostsList = this.state.postsList.map((post, i)=> {
        return (
           <Post
           key={post.id}
           post={Post}
           />
          );
  });
    return(
        <div className="dashboard">
        
           <Nav className="nav"/> 

           


        </div>
    );


}



} 


export default Dashboard;