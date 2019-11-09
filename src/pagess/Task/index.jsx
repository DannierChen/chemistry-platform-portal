import React, { Component } from 'react';
import TaskTable from './components/TaskTable';
import VideoFilter from './components/VideoFilter';

export default class Task extends Component {
  static displayName = 'Task';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <VideoFilter />
        <TaskTable />
      </div>
    );
  }
}
