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

  componentWillMount() {
    axios.get("/api/me").then(response => {
    //   this.props.setUser(response.data);
    });
  }

  async componentDidMount() {
    // this.setState({ username: this.props.username });
    this.getPosts();
    console.log(this.props, this.state);
  }

  getPosts = () => {
    axios.get("/api/posts").then(response => {
      this.setState({
        postsList: response.data
      });
    });
  };





  render() {
    console.log(this.props)
    const mappedPostsList = this.state.postsList.map((post, i) => {
      return <Post key={post.id} post={post} />;
    });
    return (
        
      <div className="dashboard">

           
            <div className="nav-section">
               <Nav className="nav" user={this.props.user} />
            </div>

            <div className="dash-section">
                <div className="search-input">
                    <input 
                    className="input-box"
                    type="text"
                    placeholder="search by Title"
                    />
                </div>

                <div className="search-button">
                    <button className="search-btn">
                       <img src={search} />
                    </button>
                </div>

                <div className="reset-button">
                    <button
                    className="reset-btn"
                    >Reset</button>
                </div>

                <div className="text">
                    <p>My Posts
                        <input 
                        type="checkbox"
                        />
                    </p> 
                </div>
                


                
            </div>


       

        {mappedPostsList}


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

export default connect(
  mapStateToProps,
  { setUser}
)(Dashboard);
