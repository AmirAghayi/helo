import React, { Component } from "react";
import Nav from "../Nav/Nav";
import { Link } from 'react-router-dom';
import './Form.css';
import axios from "axios";

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
          <div className="-page-title">
            <h1 className="title">New Post</h1>
          </div>

          <div className="element-1">
            <p className="title-element">Title:</p>
          </div>

          <div className="title-input">
            <input 
            className="title-input-box"
            type="text"
            onChange={this.handleTitleChange}
            />
          </div>

          <div>
            <img alt="profile" />
          </div>

          <div className="element-2">
            <p className="img-element">Image URL:</p>
          </div>

          <div>
            <img src={this.state.imageUrl}/>
          </div>



          <div className="url-input">
            <input 
            className="url-input-box"
            type="text"
            value={this.state.imageUrl}
            onChange={this.handleUrlChange}
            />
          </div>

          <div>
            <p>Content:</p>
          </div>

          <div className="textarea">
            <textarea 
            className="content-textarea-box"
            type="text"
            onChange={this.handleContentChange}/>
          </div>

          <div>
              <Link to="/Dashboard"
              onClick={this.createPost}
              >
                   Post
            </Link>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
