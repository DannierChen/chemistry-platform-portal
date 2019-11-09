/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import {
  Input,
  Button,
  Select,
  DatePicker,
  Radio,
  Message,
  Pagination
} from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import { withRouter } from 'react-router-dom';

import { Editor } from '@tinymce/tinymce-react';

import styles from './index.module.scss';

const { Option } = Select;
const { Group: RadioGroup } = Radio;

@withRouter
export default class New extends Component {
  static displayName = 'New';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        status: 'pending',
      },
    };
  }

  formChange = (value) => {
    console.log('value', value);
    this.setState({
      value,
    });
  };

  validateAllFormField = () => {
    this.refs.form.validateAll((errors, values) => {
      if (errors) {
        Message.error('请填写完整的信息');
        return;
      }
      Message.success('添加完成');
      this.props.history.push('/');
      console.log({ values });
    });
  };

  render() {
    return (
      <div className={styles['container']}>

        <div className={styles['pagination']}>
          <Pagination defaultCurrent={2} />
        </div>

        <div className={styles['section']}>
          <div className={styles['user-info']}>
            <img src="https://avatar.bbs.miui.com/images/noavatar_middle.gif" className={styles['user-avatar']} />
            <span className={styles['user-name']}>成同学</span>
          </div>
          <div className={styles['content-container']}>
            <h2>稀有难熔金属</h2>
            <div className={styles['content']}>
              <span>常见的稀有难熔金属都有哪些，能做一些简单的介绍吗？</span>
            </div>
          </div>
        </div>
        <div className={styles['section']}>
          <div className={styles['user-info']}>
            <img src="https://avatar.bbs.miui.com/images/noavatar_middle.gif" className={styles['user-avatar']} />
            <span className={styles['user-name']}>陈同学</span>
          </div>
          <div className={styles['content-container']}>
            <span className={styles['replay-time']}>回复时间： 5天前</span>
            <div className={styles['content']}>
            钼是一种坚硬的灰色金属，空气中会略微氧化。它性质不活泼，可以少量溶于浓硝酸，会钝化。红热时，钼粉与水蒸气或者氧气反应为MoO3。
            </div>
          </div>
        </div>

        <div className={styles['section']}>
          <Editor
          style={{width: 600}}
          init={{
            min_height: 200
          }} />
          <Button type="primary">回复</Button>
        </div>
      </div>
    )
  }
}


