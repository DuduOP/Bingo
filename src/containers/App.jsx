import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getOnlineUsers, pushOnlineUser } from '../actions/OnlineActions';

import Header from '../components/header';

class App extends Component {

  componentDidMount() {
    this.props.getOnlineUsers();
    window.getOnlineUsers = getOnlineUsers;
  }

  render() {
    return (
      <Header />
    );
  }
}

function mapStateToProps(state) {
  return {
    rooms: state.rooms,
    online: state.online
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getOnlineUsers,
    pushOnlineUser
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
