/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import {
  Button,
  DatePicker,
  Radio,
  Message,
  Pagination,
  Upload,
  Form, Input, Select
} from '@alifd/next';

import { withRouter } from 'react-router-dom';
import Axios from 'axios';

import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';

import ExamContent from './components/ExamContent';

import styles from './index.module.scss';

const { Option } = Select;
const { Group: RadioGroup } = Radio;
const FormItem = Form.Item;

@withRouter
export default class New extends Component {
  static displayName = 'New';

  static propTypes = {};

  static defaultProps = {};

  state = {
    examData: {},
    experimentData: {},
    examContentVisible: false
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const experimentId = this.props.match.params.experimentId;

    Axios('/experiment/getExperimentData', {
      params: {
        experimentId
      }
    }).then(res => {
      res = res.data;

      this.setState({
        experimentData: res.data,
      });
    });

    Axios('/record/getRecord', {
      params: {
        origin: 'experiment',
        origin_id: experimentId
      }
    }).then(res => {
      res = res.data;

      if (res.success) {
        this.setState({
          score: res.data.score
        });
      }
    });
  }

  handleOpenExam = () => {
    Axios('/exam/getExamData', {
      params: {
        examId: this.state.experimentData.exam_id
      }
    }).then(res => {
      res = res.data;

      if (res.success) {
        if (res.data.ques.length) {
          for (let i = 0; i < res.data.ques.length; i++) {
            if (res.data.ques[i].options && typeof res.data.ques[i].options === 'string') {
              res.data.ques[i].options = JSON.parse(res.data.ques[i].options);
            }
          }
        }

        this.setState({
          examData: res.data,
          examContentVisible: true
        });
      }
    });
  }

  handleExamSubmit = (examRet) => {
    Axios.post('/record/saveRecord', Object.assign({}, examRet, {
      origin: 'experiment',
      origin_id: +this.props.match.params.experimentId
    }));
  }

  render() {
    const { score, examData, experimentData, examContentVisible } = this.state;

    return (
      <div className={styles['container']}>
        {
          score ? (
            <Message type="success" title="提示" style={{marginBottom: 12}}>
              请先完成预习试卷，才能进入实验流程
            </Message>
          ) : (
            <Message type="help" title="提示" style={{marginBottom: 12}}>
              请先完成预习试卷，才能进入实验流程
            </Message>
          )
        }

        <div className={styles['section']}>
         <div className={styles['content-container']}>
            <h2>{experimentData.experiment_title}</h2>
            <div className={styles['content']}>
              <div dangerouslySetInnerHTML={{ __html: experimentData.experiment_content}}></div>
            </div>
          </div>

          <div id="aaa" className={styles['user-info']}>
            {
              score ? null : (
                <div className={styles.mask} style={{height: document.querySelector('#aaa') && document.querySelector('#aaa').clientHeight}}>
                  <span onClick={this.handleOpenExam}>点击完成预习试卷</span>
                </div>
              )
            }

            <Form labelAlign="top" >
                  <FormItem label="实验报告">
                    <BraftEditor
                      style={{width: 600, border: '1px solid #333'}}

                    />
                  </FormItem>
                  <FormItem label="实验设计图">
                    <div className={styles['aaa']}>
                    <Upload.Card
                      listType="card"
                      action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
                      accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
                      defaultValue={[]}
                      limit={2}
                      name="a11yUpload"
                    >
                          设计图上传
                        </Upload.Card>
                        <Button type="primary" style={{marginLeft: 48}}>实验图设计</Button>
                        </div>
                    </FormItem>

                    <FormItem label="实验视频">
                    <Upload.Card
                            listType="card"
                            action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
                            accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
                            defaultValue={[]}
                            limit={2}
                            name="a11yUpload"
                        >
                          实验视频上传
                        </Upload.Card>
                    </FormItem>
                    <Button type="primary" style={{marginTop: 4}}>提交实验报告</Button>
                </Form>
          </div>

        </div>

        {examContentVisible ? (
          <ExamContent examData={examData} handleClose={() => {
            this.setState({
              examContentVisible: false
            })
          }} handleSubmit={this.handleExamSubmit} />
        ) : null}
      </div>
    )
  }
}


