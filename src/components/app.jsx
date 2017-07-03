import React, { Component } from 'react';

import Header from './header';
import OnlineList from './onlineList';

import UsersAPI from '../api/users';

export default class App extends Component {
  state = {
    shouldUpdateList: false,
    username: ''
  }

  componentDidMount() {
    if (localStorage.username && localStorage.username !== '') {
      this.setState({username: localStorage.username});
    }
  }

  clickJoin() {
    const username = this.usernameInput.value

    this.setState({username: username});
    localStorage.username = username;

    UsersAPI.pushOnlineUser.body = JSON.stringify({username: username});
    UsersAPI.pushOnlineUser.headers.append('Content-Type', 'application/json');

    console.log(UsersAPI.pushOnlineUser);

    fetch(UsersAPI.baseUrl, UsersAPI.pushOnlineUser)
      .then(response => response.json())
      .then(data => console.log(data.message))
      .catch(error => console.error(error));
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
