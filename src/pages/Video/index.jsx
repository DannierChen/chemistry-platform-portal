import React, { Component } from 'react';

import { Icon, Button,Tag, Input } from '@alifd/next';
import { Player } from 'video-react';
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
          <div className={styles['video-area']}>
            <div className={styles['video-content']}>
              <h1 className={styles['video-title']}>生命的元素，连结你和万物</h1>
              <Player
              playsInline
              poster="http://i0.hdslb.com/bfs/archive/c1a37d2375aafc7c649a7cae2360662dc596a04f.jpg@380w_240h_100Q_1c.webp"
              src="https://www.w3school.com.cn/example/html5/mov_bbb.mp4"
              />
               <div className={styles['video-intro']}>
                <p>我们的身体由约37万亿个细胞组成，这些细胞构成了人体近80个器官，支撑人类复杂的行为和情感。
                  从化学元素的角度，我们身体约99.9%的重量来自于11种元素。本视频展示了这11种元素单质的形态，另外元素名称旁边的数字是该元素在人体中的质量百分比。</p>
              </div>
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
                    <p>镜头下的各种元素十分震撼！</p>
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
            {/* <div className={styles['test']}>
              <div className={styles['info-title']}>相关试卷</div>
                <div className={styles['test-list']}>
                  <div style={{padding: " 12px 0 "}}>观看完毕后，请点击按钮完成试卷</div>
                  <div>
                  <Button type="primary" className={styles.testBtn}>自测试卷</Button>
                  </div>
                </div>

            </div>  */}
          </div>
        </div>
      </div>
    );
  }
}
