import React, { Component } from 'react';

import BuilderTable from './components/BuilderTable';

import styles from './index.scss';

import Fabric from 'fabric';

export default class Builder extends Component {
  static displayName = 'Builder';

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var canvas =new fabric.Canvas('main');

  }

  render() {
    return (
      <div>
        <h2>最简单的有机化合物——甲烷</h2>

      </div>
    );
  }
}
