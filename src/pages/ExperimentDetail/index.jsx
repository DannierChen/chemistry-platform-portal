/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import {
  Button,
  Radio,
  Dialog,
  Message,
  Upload,
  Form,
  Field,
  Select
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

  field = new Field(this);

  state = {
    examData: {},
    reportData: {},
    experimentData: {},
    examContentVisible: false,
    experimentDesignVisible: false
  }

  constructor(props) {
    super(props);
  }

  getRecord = (experimentId) => {
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

    this.getRecord(experimentId);

    Axios('/report/getReport', {
      params: {
        experiment_id: experimentId
      }
    }).then(res => {
      res = res.data;

      if (res.success) {
        this.setState({
          reportData: res.data
        });

        this.field.setValue('report_content', BraftEditor.createEditorState(res.data.report_content));

        this.field.setValue('report_capture', [
          {
            url: res.data.report_capture
          }
        ])
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
    const experimentId = +this.props.match.params.experimentId;

    Axios.post('/record/saveRecord', Object.assign({}, examRet, {
      origin: 'experiment',
      origin_id: experimentId
    })).then(res => {
      res = res.data;

      if (res.success) {
        this.getRecord(experimentId);
      }
    });
  }

  handleSubmit = () => {
    this.field.validate((errors, values) => {
      if (!errors) {
        if (values['report_content']) {
          values['report_content'] = values['report_content'].toHTML();
        }

        if (values['report_capture']) {
          values['report_capture'] = values['report_capture'][0].url;
        }

        if (values['report_video']) {
          values['report_video'] = values['report_video'][0].url;
        }

        Axios.post('/report/saveReport', Object.assign({}, values, {
          experiment_id: +this.props.match.params.experimentId
        })).then(res => {
          res = res.data;

          if (res.success) {
            Message.success({
              align: 'cc cc',
              content: '实验报告提交成功',
              hasMask: true
            });
          }
        });
      }
    });
  }

  render() {
    const { init, getValue } = this.field;

    const { score, examData, experimentData, examContentVisible, experimentDesignVisible } = this.state;

    return (
      <div className={styles['container']}>
        {
          score ? (
            <Message type="success" title="提示" style={{marginBottom: 12}}>
              你已通过试卷测试，请完成下面的实验报告
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
                  value={BraftEditor.createEditorState(getValue('report_content'))}
                  onChange={(editorState) => {
                    this.field.setValue('report_content', editorState);
                  }}
                />
              </FormItem>
              <FormItem label="实验设计图">
                <div className={styles['aaa']}>
                  <Upload.Card
                    listType="card"
                    action="/upload/upload"
                    accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
                    limit={1}
                    name="report_capture"
                    {...init('report_capture')}
                  >
                    设计图上传
                  </Upload.Card>
                  <Button onClick={() => {
                    this.setState({
                      experimentDesignVisible: true
                    })
                  }} type="primary" style={{marginLeft: 48}}>实验图设计</Button>
                  </div>
                </FormItem>

                <FormItem label="实验视频">
                  <Upload.Card
                    listType="card"
                    action="/upload/upload"
                    accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
                    limit={1}
                    name="report_video"
                    {...init('report_video')}
                  >
                    实验视频上传
                  </Upload.Card>
                </FormItem>
                <Button onClick={this.handleSubmit} type="primary" style={{marginTop: 4}}>提交实验报告</Button>
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

        {experimentDesignVisible ? (
          <Dialog
            visible
            isFullScreen
            className={styles['experiment-design-dialog']}
            style={{height: '800px', width: '1200px'}}
            footer={false}
            title="实验设计"
            onClose={() => {
              this.setState({
                experimentDesignVisible: false
              })
            }}
          >
            <iframe style={{width: '100%', height: '900px'}} src={`${location.origin}/canvas`} />
          </Dialog>
        ) : null}
      </div>
    )
  }
}


