import React, { Component } from "react";
import Post from "../Post/Post";
import Nav from "../Nav/Nav";
import axios from "axios";
import { setUser } from "../../redux/reducer";
import { connect } from "react-redux";
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
      this.props.setUser(response.data);
    });
  }

  async componentDidMount() {
    // todo: delete me
    // if (!this.props.user) {
    //     await axios.post('/api/login', {username: 'Allan', password: '7507'})
    //     .then( response => {
    //         console.log(response)
    //         this.props.updateUsernameType(response.data.username);
    //         this.props.updateProfilePictureType()
    //     })
    // }
    this.setState({ username: this.props.username });
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
    const mappedPostsList = this.state.postsList.map((post, i) => {
      return <Post key={post.id} post={post} />;
    });
    return (
      <div className="dashboard">
        <Nav className="nav" user={this.state.username} />

        <div />

        {mappedPostsList}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { username, profilePicture } = state;
  return {
    username,
    profilePicture
  };
}

export default connect(
  mapStateToProps,
  { setUser}
)(Dashboard);
