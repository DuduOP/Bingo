import React, { Component } from 'react';
import UsersAPI from '../../api/users';
import styles from './styles.scss';

export default class OnlineList extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    console.log(onlineApi);
  }

  render() {
    return (
      <aside>
        <h3>Users online:</h3>
      </aside>
    );
  }
}
