import React, { Component } from 'react';
import styles from './index.module.scss';

export default class Logo extends Component {
  render() {
    return (
      <div className={styles.container}>
        <a href="/" className={styles.logoText}>
          学习平台
        </a>
      </div>
    );
  }
}

