 /* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { Tag, Button, Select, Input, Message } from '@alifd/next';
import { FormBinderWrapper, FormBinder } from '@icedesign/form-binder';
import styles from './index.module.scss';

const SelectableTag = Tag.Selectable;

export default class TableFilter extends Component {
  state = {
    value: {},
  };

  handleSubmit = () => {
    const { validateFields } = this.refs.form;
    validateFields((errors, values) => {
      if (errors) {
        Message.error('查询参数错误');
        return;
      }
      this.props.handleSubmit(values);
    });
  };

  render() {

    return (
      <div className={styles['filter-container']}>
        <div className="filter-item">
          <span>年级</span>
          <SelectableTag type="primary">全部</SelectableTag>
          <SelectableTag type="primary">高一</SelectableTag>
          <SelectableTag type="primary">高二</SelectableTag>
          <SelectableTag type="primary">高三</SelectableTag>
        </div>

        <div className="filter-item">
          <span>类型</span>
          <SelectableTag type="primary">全部</SelectableTag>
          <SelectableTag type="primary">氧化反应</SelectableTag>
          <SelectableTag type="primary">有机物</SelectableTag>
          <SelectableTag type="primary">化学工业</SelectableTag>
        </div>
      </div>
    );
  }
}

