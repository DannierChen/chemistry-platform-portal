import React, { Component } from 'react';
import TaskTable from './components/TaskTable';
import VideoFilter from './components/VideoFilter';

import { Grid, Icon, Button,Tag } from '@alifd/next';

const { Group: TagGroup, Selectable: SelectableTag  } = Tag;

const { Row, Col } = Grid;

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
      <div className={styles.container}>
        <div className={styles['article-filter']}>
          <div className={styles['filter-item']}>
            <span className={styles['filter-label']}>学期</span>
            <TagGroup>
              <SelectableTag className={styles['custom-tag']}>高一</SelectableTag>
              <SelectableTag className={styles['custom-tag']}>高二</SelectableTag>
              <SelectableTag className={styles['custom-tag']}>高三</SelectableTag>
            </TagGroup>
          </div>

          <div className={styles['filter-item']} style={{marginTop: 16}}>
            <span className={styles['filter-label']}>章节</span>
            <TagGroup>
              <SelectableTag className={styles['custom-tag']}>打开原子世界的大门</SelectableTag>
              <SelectableTag className={styles['custom-tag']}>开发海水中的卤素元素</SelectableTag>
              <SelectableTag className={styles['custom-tag']}>探索原子构建物质的奥秘</SelectableTag>
              <SelectableTag className={styles['custom-tag']}>剖析物质变化中的能量变化</SelectableTag>
              <SelectableTag className={styles['custom-tag']}>评说硫、氮的"功"与"过"</SelectableTag>
              <SelectableTag className={styles['custom-tag']}>揭示化学反应速率和平衡之谜</SelectableTag><br/><br/>
              <SelectableTag className={styles['custom-tag']}>探究电解质溶液的性质</SelectableTag>
            </TagGroup>
          </div>
        </div>

        <div className={styles['video-list']}>

          <div className={styles['video-content']} onClick={() => {
            this.props.history.push('/video/detail/2');
          }}>
            <div>
              <img src="http://pznrim6s8.bkt.clouddn.com/9f8350a22bac170255717fd1a1bb2f91d10e685c.jpg" className = {styles['video-img']}/>
            </div>

            <div className = {styles['video-info']}>
              <div className={styles['video-header']}>
                <span>刘老师</span>
                {DOT}
                <span>7天前</span>
                {DOT}
                <span>打开原子世界的大门</span>
              </div>
              <div className={styles['video-title']}>
                <p>原子到底是什么样子的？原子理论又经过了怎样的演变？</p>
                <span className={styles['video-intro']}>原子是元素能保持其化学性质的最小单位，让我们一起来了解一下原子模型的进化史吧！</span>
              </div>
              <div className = {styles['video-footer']}>
                <Button.Group  size = "small" className={styles['video-btn']}>
                    <Button >
                      <Icon type="attachment" />
                      2
                    </Button>
                    <Button>
                      <Icon type="edit" />
                      3
                    </Button>
                </Button.Group>
              </div>
            </div>
          </div>

          <div className={styles['video-content']} onClick={() => {
            this.props.history.push('/video/detail/3');
          }}>
            <div>
              <img src="http://pznrim6s8.bkt.clouddn.com/c1a37d2375aafc7c649a7cae2360662dc596a04f.jpg" className = {styles['video-img']}/>
            </div>

            <div className = {styles['video-info']}>
              <div className={styles['video-header']}>
                <span>刘老师</span>
                {DOT}
                <span>3天前</span>
                {DOT}
                <span>探索原子构建物质的奥秘</span>
              </div>
              <div className={styles['video-title']}>
                <p>连结你和宇宙万物，生命中有哪些元素？</p>
                <span className={styles['video-intro']}>我们的身体由约37万亿个细胞组成，这些细胞构成了人体近80个器官，支撑人类复杂的行为和情感。从化学元素的角度，我们身体约99.9%的重量来自于11种元素。本视频展示了11种元素单质的形态，视频中元素名称旁边的数字是该元素在人体中的质量百分比。</span>
              </div>
              <div className = {styles['video-footer']}>
                <Button.Group  size = "small" className={styles['video-btn']}>
                    <Button >
                      <Icon type="attachment" />
                      2
                    </Button>
                    <Button>
                      <Icon type="edit" />
                      3
                    </Button>
                </Button.Group>
              </div>
            </div>
          </div>

          <div className={styles['video-content']} onClick={() => {
            this.props.history.push('/video/detail/4');
          }}>
            <div>
              <img src="http://pznrim6s8.bkt.clouddn.com/e5affdb8e8d90236a1bb7a55cfa4346a858ffadf.jpg" className = {styles['video-img']}/>
            </div>

            <div className = {styles['video-info']}>
              <div className={styles['video-header']}>
                <span>刘老师</span>
                {DOT}
                <span>1天前</span>
                {DOT}
                <span>探究电解质溶液的性质</span>
              </div>
              <div className={styles['video-title']}>
                <p>食盐水：氯化钠在水中是如何电离的？</p>
                <span className={styles['video-intro']}>CG动画模拟氯化钠在水中的电离。</span>
              </div>
              <div className = {styles['video-footer']}>
                <Button.Group  size = "small" className={styles['video-btn']}>
                    <Button >
                      <Icon type="attachment" />
                      2
                    </Button>
                    <Button>
                      <Icon type="edit" />
                      3
                    </Button>
                </Button.Group>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
