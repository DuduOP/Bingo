import React, { Component } from 'react';

import Header from './header';
import OnlineList from './onlineList';
import JoinForm from './joinForm';

import onlineApi from '../api/online';

export default class App extends Component {
  state = {
    shouldUpdateList: false,
    username: ''
  }

  componentDidMount() {
    if (localStorage.username !== '') {
      this.setState({username: localStorage.username});
    }
  }

  clickJoin() {
    this.setState({username: this.usernameInput.value});
    localStorage.username = this.usernameInput.value;
  }

  render() {
    return(
      <div className="appContainer">
        <Header
          currentUser={this.state.username}
          shouldUpdateList={this.state.shouldUpdateList}
        />
        {
          this.state.username !== '' ?
            null
          :
          <div className="joinInput">
            <h3>Enter username</h3>
            <input
              type="text"
              name="username"
              ref={input => this.usernameInput = input}
            />
            <button onClick={::this.clickJoin}>Join</button>
          </div>
        }
      </div>
    );
  }
}
