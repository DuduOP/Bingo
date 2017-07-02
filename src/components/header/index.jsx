import React, { Component } from 'react';
import styles from './styles.scss';

export default (props) => {
  return(
    <header>
      <h3>Bingo! <span>builder</span></h3>
      <div className={styles.currentUser}>{props.currentUser}</div>
    </header>
  );
}
