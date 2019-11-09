import React, { Component } from 'react';
import TaskTable from './components/TaskTable';
import VideoFilter from './components/VideoFilter';

import { Icon, Button,Tag, Input } from '@alifd/next';

const { Group: TagGroup, Selectable: SelectableTag  } = Tag;

import styles from './index.module.scss';

const DOT = <span>·</span>

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
      <div className={styles['container']}>
        <div className = {styles['main-container']}>
          <div className={styles['article-area']}>
            <div className={styles['article-content']}>
              <h1 className={styles['article-title']}>打开原子世界的大门</h1>
              <p>
              让我们就简单地从原子模型的发展历史来正确的认识目前已知最准确的原子模型。在开始前，先提个小问题，你们知道下面五个原子模型哪个是最正确的吗？
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
                  aria-label="input max length 100"
                  className={styles['input']}
                  /><br /><br />
                  <div>
                  <Button type="primary" className={styles.testBtn}>提交感想</Button> 
                  </div>
                </div>
                
            </div> 

            <div className={styles['test']}>
              <div className={styles['info-title']}>相关试卷</div>
                <div className={styles['test-list']}>
                  <div style={{padding: " 12px 0 "}}>请先提交感想，然后点击按钮完成试卷</div>
                  <div>
                  <Button type="primary" className={styles.testBtn} disabled>自测试卷</Button> 
                  </div>
                </div>
                
            </div> 

            

          </div>
        </div>
      </div>
    );
  }
}
