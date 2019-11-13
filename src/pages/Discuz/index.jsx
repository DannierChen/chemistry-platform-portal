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

import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';

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
      content: BraftEditor.createEditorState(null),
      answerList: []
    };
  }


  handleSubmit = () => {
    const answerList = this.state.answerList;

    answerList.push({
      name: '刘老师',
      time: '2019-11-1 12:24:35',
      content: this.state.content.toHTML()
    });

    this.setState({
      content: BraftEditor.createEditorState(null),
      answerList
    });
  }

  render() {
    return (
      <div className={styles['container']}>

        <div className={styles['section']}>
          <div className={styles['user-info']}>
            <img src="https://avatar.bbs.miui.com/images/noavatar_middle.gif" className={styles['user-avatar']} />
            <span className={styles['user-name']}>陈同学</span>
          </div>
          <div className={styles['content-container']}>
            <h2>汤姆生原子结构模型的缺陷是?</h2>
            <div className={styles['content']}>
              <span>求解答，谢谢</span>
            </div>
          </div>
        </div>
        {
          this.state.answerList.map(answer => {
            return (
              <div className={styles['section']}>
                <div className={styles['user-info']}>
                  <img src="https://avatar.bbs.miui.com/images/noavatar_middle.gif" className={styles['user-avatar']} />
                  <span className={styles['user-name']}>{answer.name}</span>
                </div>
                <div className={styles['content-container']}>
                  <span className={styles['replay-time']}>回复时间： {answer.time}</span>
                  <div className={styles['content']} dangerouslySetInnerHTML={{ __html: answer.content }}></div>
                </div>
              </div>
            );
          })
        }

        <div className={styles['section']} style={{display: 'flex', flexDirection: 'column', marginTop: 20}}>
          <BraftEditor
            value={this.state.content}
            style={{height: '200 !important', width: '100%', border:'1px solid #eee'}}
            onChange={(editorState) => {
              this.setState({
                'content': editorState
              });
            }}
          />
        </div>
        <Button onClick={this.handleSubmit} style={{float: 'right', width: '100px', marginTop: 20 }} type="primary">回复</Button>
      </div>
    )
  }
}


