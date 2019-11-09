import React, { Component } from 'react';
import TaskTable from './components/TaskTable';
import VideoFilter from './components/VideoFilter';

import { Icon, Button,Tag } from '@alifd/next';

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
      <div className={styles.container}>
        <div className={styles['article-filter']}>
          <div className={styles['filter-item']}>
            <span className={styles['filter-label']}>学期</span>
            <TagGroup>
              <SelectableTag checked className={styles['custom-tag']}>高一</SelectableTag>
              <SelectableTag className={styles['custom-tag']}>高二</SelectableTag>
              <SelectableTag className={styles['custom-tag']}>高三</SelectableTag>
            </TagGroup>
          </div>

          <div className={styles['filter-item']} style={{marginTop: 16}}>
            <span className={styles['filter-label']}>章节</span>
            <TagGroup>
              <SelectableTag checked className={styles['custom-tag']}>打开原子世界的大门</SelectableTag>
              <SelectableTag className={styles['custom-tag']}>开发海水中的卤素元素</SelectableTag>
              <SelectableTag className={styles['custom-tag']}>探索原子构建物质的奥秘</SelectableTag>
              <SelectableTag className={styles['custom-tag']}>剖析物质变化中的能量变化</SelectableTag>
              <SelectableTag className={styles['custom-tag']}>评说硫、氮的"功"与"过"</SelectableTag>
              <SelectableTag className={styles['custom-tag']}>揭示化学反应速率和平衡之谜</SelectableTag><br/><br/>
              <SelectableTag className={styles['custom-tag']}>探究电解质溶液的性质</SelectableTag>
            </TagGroup>
          </div>
        </div>

        <div className={styles['article-list']}>
          <article className={styles['article-content']}>
            <section className={styles['article-section']}>
              <header className={styles['article-info']}>
                <span>刘老师</span>
                {DOT}
                <span>7天前</span>
                {DOT}
                <span>打开原子世界的大门</span>
              </header>
              <div className={styles['article-title']}>
                <p>人类如何打开原子世界的大门？原子世界内有什么？</p>
              </div>
              <footer>
                <Button.Group  size = "small" className={styles['article-btn']}>
                    <Button >
                      <Icon type="attachment" />
                      2
                    </Button>
                    <Button>
                      <Icon type="edit" />
                      3
                    </Button>
                </Button.Group>
              </footer>
            </section>
          </article>

          <article className={styles['article-content']}>
            <section className={styles['article-section']}>
              <header className={styles['article-info']}>
                <span>刘老师</span>
                {DOT}
                <span>3天前</span>
                {DOT}
                <span>开发海水中的卤素元素</span>
              </header>
              <div className={styles['article-title']}>
                <p>地球上的盐是怎么来的？可以通过哪些方式获取呢？</p>
              </div>
              <footer>
                <Button.Group size = "small" className={styles['article-btn']}>
                    <Button>
                      <Icon type="attachment" />
                      1
                    </Button>
                    <Button>
                      <Icon type="edit" />
                      2
                    </Button>
                </Button.Group>
              </footer>
            </section>
          </article>

          <article className={styles['article-content']}>
            <section className={styles['article-section']}>
              <header className={styles['article-info']}>
                <span>刘老师</span>
                {DOT}
                <span>1天前</span>
                {DOT}
                <span>探索原子构建物质的奥秘</span>
              </header>
              <div className={styles['article-title']}>
                <p>干冰、水晶、石墨、金刚石，含有某种相同元素的物质为何性能各异呢？</p>
              </div>
              <footer>
                <Button.Group size = "small" className={styles['article-btn']}>
                    <Button>
                      <Icon type="attachment" />
                      0
                    </Button>
                    <Button>
                      <Icon type="edit" />
                      0
                    </Button>
                </Button.Group>
              </footer>
            </section>
          </article>
        </div>
      </div>
    );
  }
}
