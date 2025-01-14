import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import CustomTable from '../../../../components/CustomTable';
import styles from './index.module.scss';

const getData = (length = 10) => {
  return Array.from({ length }).map((item, index) => {
    return {
      id: index + 1,
      time: `${index + 1} 分钟前`,
      repo: 'alibaba/ice',
      username: '淘小宝',
      client: 'travis-ci',
      builder: '@ice/ice-scripts',
      builderTime: `1${index}s`,
      state: '成功',
    };
  });
};

export default class TaskTable extends Component {
  state = {
    isLoading: false,
    data: [],
  };

  componentDidMount() {
    this.fetchData(10);
  }

  mockApi = (len) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getData(len));
      }, 600);
    });
  };

  fetchData = (len) => {
    this.setState(
      {
        isLoading: true,
      },
      () => {
        this.mockApi(len).then((data) => {
          this.setState({
            data,
            isLoading: false,
          });
        });
      }
    );
  };

  handleSubmit = () => {
    this.fetchData(5);
  };

  renderState = (value) => {
    return (
      <div className={styles.state}>
        <span className={styles.stateText}>{value}</span>
      </div>
    );
  };

  renderOper = () => {
    return (
      <div className={styles.oper}>
        <a href="/">查看</a>
      </div>
    );
  };

  columnsConfig = () => {
    return [
      {
        title: '时间',
        dataIndex: 'time',
        key: 'time',
      },
      {
        title: '仓库',
        dataIndex: 'repo',
        key: 'repo',
      },
      {
        title: '用户',
        dataIndex: 'username',
        key: 'username',
      },
      {
        title: 'Client',
        dataIndex: 'client',
        key: 'client',
      },
      {
        title: '构建器',
        dataIndex: 'builder',
        key: 'builder',
      },
      {
        title: '构建时长',
        dataIndex: 'builderTime',
        key: 'builderTime',
      },
      {
        title: '状态',
        dataIndex: 'state',
        key: 'state',
        cell: this.renderState,
      },
      {
        title: '详情',
        dataIndex: 'detail',
        key: 'detail',
        cell: this.renderOper,
      },
    ];
  };

  render() {
    const { data, isLoading } = this.state;

    return (
      <IceContainer>
        <CustomTable
          columns={this.columnsConfig()}
          dataSource={data}
          isLoading={isLoading}
          onChange={this.fetchData}
        />
      </IceContainer>
    );
  }
}


