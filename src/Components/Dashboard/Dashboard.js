import React, { Component } from "react";
import Post from "../Post/Post";
import Nav from "../Nav/Nav";
import axios from "axios";
import { setUser } from "../../redux/reducer";
import { connect } from "react-redux";
import search from './images/search.png';
import "./Dashboard.css";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      postsList: [],
      username: "",
      avatar: ""
    };
  }

  async componentDidMount() {
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
    this.getPosts();
  }

  getPosts = () => {
    axios.get("/api/posts").then(response => {
      this.setState({
        postsList: response.data
      });
    });
  };





  render() {
    const mappedPostsList = this.state.postsList.map((post, i) => {
      return <Post key={post.id} post={post} />;
    });
    return (
        
      <div className="dashboard">

           
                          <div className="nav-section">
                            <Nav className="nav" />
                          </div>

              <div className="dash-section">

                        <div className="search-box">
                              <div className="search-section"> 
                                    <div className="search-input">
                                        <input 
                                        className="input-box"
                                        type="text"
                                        placeholder="search by Title"
                                        />
                                    </div>

                                      <div className="search-button">
                                          <button className="search-btn">
                                            <img src={search} className="search-btn-sign"/>
                                          </button>
                                      </div>

                                      <div className="reset-button">
                                          <button
                                          className="reset-btn"
                                          >Reset</button>
                                      </div>
                                
                                </div>


                          <div className="check-Myposts">
                              <div className="check-box">
                                  <p>My Posts
                                      <input 
                                      type="checkbox"
                                      />
                                  </p> 
                              </div>
                          </div>

                            

                            
                        </div>

                          

                        
                


                        <div className="posts">
                              {mappedPostsList}
                        </div>
                
            </div>



        


      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user, profilePicture } = state;
  return {
    user,
    profilePicture
  };
}

export default connect(mapStateToProps)(Dashboard);
