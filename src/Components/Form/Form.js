import React, { Component } from "react";
import Nav from "../Nav/Nav";
import { Link } from 'react-router-dom';
import './Form.css';
import axios from "axios";
import emptyImage from '../Form/images/empty-image.png';

class Form extends Component {
       constructor(){
         super();

         this.state = {
           title: "",
           imageUrl: "",
           content: ""
         };
       }

componentWillMount(){
        axios.get('/api/me')
        .then(response => {
          this.props.setUser(response.data.username);
        })
        .catch(err => {
          if (err.response && err.response.status == 401) {
            return this.props.history.push('/');
          }
  
          console.warn(err);
        });
       };


handleTitleChange = (event) => {
     this.setState({
       title: event.target.value
     });
}


handleUrlChange = (event) => {
  this.setState({
    imageUrl: event.target.value
  });
}


handleContentChange = (event) => {
  this.setState({
    content: event.target.value
  });
}



  createPost = () => {
    const { title, imageUrl, content } = this.state;
    const POST = { title, imageUrl, content };
 
    axios.post('/api/post', POST)
    .then( response => {
          this.props.history.push('/Dashboard');
      });
     this.resetState();
  };


  resetState = () => {
    this.setState({
      title: "",
      imageUrl: "",
      content: ""
    });
  };


  render() {
    return (
      <div className="form">
        <div className="nav-section">
          <Nav className="Nav" />
        </div>

        <div className="form-section">
          <div className="page-title">
            <h1 className="title">New Post</h1>
          </div>

          <div className="element-1">
              <p className="title-element">Title:</p>
              <input 
              className="title-input-box"
              type="text"
              onChange={this.handleTitleChange}
              />
          </div>

          <div className="image">
            <img
            className="img" 
            alt="profile"
            src={!this.state.imageUrl ? emptyImage  : this.state.imageUrl}
            />
          </div>

          <div className="element-2">
              <p className="img-element">Image URL:</p>
              <input 
              className="url-input-box"
              type="text"
              value={this.state.imageUrl}
              onChange={this.handleUrlChange}
              />
          </div>

          <div className="textarea">
              <p>Content:</p>
              <textarea 
              className="content-textarea-box"
              type="text"
              onChange={this.handleContentChange}/>
          </div>

             <div className="Post-button-section">
                <Link to="/Dashboard"
                onClick={this.createPost}
                > <button className="post-btn">Post</button>
                 </Link>
             </div>
        </div>
      </div>
    );
  }
}

export default Form;
