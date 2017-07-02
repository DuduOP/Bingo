import React, { Component } from 'react';
import Header from './header';

import onlineApi from '../api/online';

export default class App extends Component {
  state = {
    username: null,
    showLogin: true
  }

  componentDidMount() {
    if (localStorage.user) {
      this.setState(JSON.parse(localStorage.user));
    }
  }

  handleChange(e) {
    this.setState({ username: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({  showLogin: false });
    localStorage.user = JSON.stringify({
      username: this.state.username,
      showLogin: false
    });
  }

  render() {
    return(
      <div className="appContainer">
        <Header currentUser={this.state.username} />
        {
          this.state.showLogin ?
            <form className="userForm" onSubmit={::this.handleSubmit}>
              <h3>Enter your username</h3>
              <input
                name="username"
                placeholder="username"
                value={this.state.username || ''}
                onChange={::this.handleChange}
              />
              <button type="submit">Join</button>
            </form>
          :
            null
        }
      </div>
    );
  }
}
