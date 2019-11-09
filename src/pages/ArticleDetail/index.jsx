import React, { Component } from 'react';

import { Icon, Button,Tag, Input } from '@alifd/next';

import Axios from 'axios';

import _ from 'lodash';

import ExamContent from './components/ExamContent';

const { Group: TagGroup, Selectable: SelectableTag  } = Tag;

import styles from './index.module.scss';

const DOT = <span>·</span>

export default class Task extends Component {
  static displayName = 'Task';

  static propTypes = {};

  static defaultProps = {};

  state = {
    score: undefined,
    thoughts: '',
    articleData: {},
    examContentVisible: false
  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const articleId = this.props.match.params.articleId;

    Axios('/article/getArticleData', {
      params: {
        articleId
      }
    }).then(res => {
      res = res.data;

      this.setState({
        articleData: res.data,
      });

      return res.data.exam_id;
    });

    Axios('/record/getRecord', {
      params: {
        origin: 'article',
        origin_id: articleId
      }
    }).then(res => {
      res = res.data;

      if (res.success) {
        this.setState({
          score: res.data.score,
          thoughts: res.data.thoughts
        });
      }
    });
  }

  handleOpenExam = () => {
    Axios('/exam/getExamData', {
      params: {
        examId: this.state.articleData.exam_id
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
      origin: 'article',
      origin_id: +this.props.match.params.articleId
    }));
  }

  render() {
    const { score, thoughts, articleData, examData, examContentVisible } = this.state;

    console.log(score);

    return (
      <div className={styles['container']}>
        <div className = {styles['main-container']}>
          <div className={styles['article-area']}>
            <div className={styles['article-content']}>
              <h1 className={styles['article-title']}>{articleData.article_title}</h1>
              <p dangerouslySetInnerHTML={{ __html: articleData.article_content }}>
              </p>
              <img src="//5b0988e595225.cdn.sohucs.com/images/20180523/e8a586d7216b4b6fbbe024f6344f6fa4.jpeg" className={styles['article-img']}/>
            </div>

            <div className={styles['comment-list-box']}>
              <div className={styles['comment-title']}>评论</div>

              <div className = {styles['comment-form']}>
                <div>
                  <img src = 'https://b-gold-cdn.xitu.io/v3/static/img/default-avatar.e30559a.svg' />
                </div>
                <div className = {styles['my-input']}>
                  <Input placeholder="请输入评论..." className={styles['my-input-class']} aria-label="custom my input class" />
                </div>
              </div>

              <div className = {styles['comment-item']}>
                <div>
                  <img src = 'https://b-gold-cdn.xitu.io/v3/static/img/default-avatar.e30559a.svg' className={styles['img']}/>
                </div>
                <div className = {styles['comment-info']}>
                  <div className={styles['comment-header']}>
                    <span style={{color: "#333333"}}>陈同学</span>
                    {DOT}
                    <span style={{color: "#8A9AA9"}}>1小时前</span>
                  </div>
                  <div className={styles['comment']}>
                    <p>受益匪浅！</p>
                  </div>
                  <div className = {styles['comment-footer']}>
                    <div>
                      点赞
                    </div>
                    {DOT}
                    <div>
                      回复
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles['other']}>
            <div className={styles['teacher-info']}>
              <div className={styles['info-title']}>关于发布</div>
              <div className= {styles['info-list']}>
                <div style={{margin: "0 12px 0 0"}}>
                  <img src = 'https://b-gold-cdn.xitu.io/v3/static/img/default-avatar.e30559a.svg' className={styles['img']} />
                </div>
                <div>
                  <div className={styles['teacher-name']}>刘老师</div>
                  <div className={styles['time']}>2019年9月25日</div>
                </div>
              </div>
            </div>

            <div className={styles['xinde']}>
              <div className={styles['info-title'] }>感想记录</div>
                <div className={styles['xinde-list']}>
                  <Input.TextArea
                  placeholder="请输入你的感想..."
                  maxLength={100}
                  rows={4}
                  hasLimitHint
                  onChange={thoughts => {
                    this.setState({
                      thoughts
                    });
                  }}
                  value={thoughts}
                  aria-label="input max length 100"
                  className={styles['input']}
                  /><br /><br />
                  <div>
                    <Button
                      type="primary"
                      onClick={() => {
                        this.handleExamSubmit({
                          thoughts
                        })
                      }}
                      className={styles.testBtn}
                    >
                      提交感想
                    </Button>
                  </div>
                </div>

            </div>

            <div className={styles['test']}>
              <div className={styles['info-title']}>相关试卷</div>
              <div className={styles['test-list']}>
                {
                  score ? (
                    <span>{`得分：${score}`}</span>
                  ) : (
                    <>
                      <div style={{padding: " 12px 0 "}}>请先提交感想，然后点击按钮完成试卷</div>
                      <div>
                        <Button disabled={score === undefined && !thoughts} type="primary" onClick={this.handleOpenExam} className={styles.testBtn}>自测试卷</Button>
                      </div>
                    </>
                  )
                }

              </div>
            </div>

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
    );
  }
}
