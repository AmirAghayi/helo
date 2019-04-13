import React, { Component } from "react";
import Nav from "../Nav/Nav";
import './Form.css';

class Form extends Component {
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
            <input />
          </div>

          <div>
            <img alt="profile" />
          </div>

          <div className="element-2">
            <p className="img-element">Image URL:</p>
          </div>

          <div className="url-input">
            <input />
          </div>

          <div>
            <p>Content:</p>
          </div>

          <div className="textarea">
            <textarea />
          </div>

          <div>
            <button>Post</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
