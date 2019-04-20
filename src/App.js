import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { setUser } from './redux/reducer';

class App extends Component {
  componentWillMount() {
    axios.get('/api/me')
      .then(response => {
        this.props.setUser(response.data.username);
      })
      .catch(err => {
        if (err.response && err.response.status == 401) {
          this.props.history.push('/');
        }

        console.warn(err);
      });
  }
  
  render() {
    return (
      <div className="App">
        {routes}
      </div>
    );
  }
}

export default withRouter(connect(state => state, { setUser })(App));
