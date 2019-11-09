import React, { Component } from 'react';
import VideoFilter from './components/VideoFilter';

import Axios from 'axios';

import { Icon, Button, Tag } from '@alifd/next';

import { router } from 'react-router-dom';

const { Group: TagGroup, Selectable: SelectableTag } = Tag;

import styles from './index.module.scss';

const DOT = <span>·</span>

export default class Task extends Component {
  static displayName = 'Task';

  static propTypes = {};

  static defaultProps = {};

  state = {
    experimentList: []
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Axios('/experiment/list').then(res => {
      res = res.data;

      if (res.success) {
        this.setState({
          experimentList: res.data
        });
      }
    })
  }

  render() {
    const { experimentList } = this.state;

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

          <div className={styles['filter-item']} style={{ marginTop: 16 }}>
            <span className={styles['filter-label']}>章节</span>
            <TagGroup>
              <SelectableTag checked className={styles['custom-tag']}>打开原子世界的大门</SelectableTag>
              <SelectableTag className={styles['custom-tag']}>开发海水中的卤素元素</SelectableTag>
              <SelectableTag className={styles['custom-tag']}>探索原子构建物质的奥秘</SelectableTag>
              <SelectableTag className={styles['custom-tag']}>剖析物质变化中的能量变化</SelectableTag>
              <SelectableTag className={styles['custom-tag']}>评说硫、氮的"功"与"过"</SelectableTag>
              <SelectableTag className={styles['custom-tag']}>揭示化学反应速率和平衡之谜</SelectableTag><br /><br />
              <SelectableTag className={styles['custom-tag']}>探究电解质溶液的性质</SelectableTag>
            </TagGroup>
          </div>
        </div>

        <div className={styles['article-list']}>
          {
            experimentList.map(article => {
              return (
                <article className={styles['article-content']} onClick={() => {
                  this.props.history.push(`/experiment/detail/${article.experimentId}`)
                }}>
                  <section className={styles['article-section']}>
                    <header className={styles['article-info']}>
                      <span>{article[`user.user_name`]}</span>
                      {DOT}
                      <span>{article.createdAt}</span>
                      {DOT}
                      <span>{article.chapterName}</span>
                    </header>
                    <div className={styles['article-title']}>
                      <p>{article.experiment_title}</p>
                    </div>
                    <footer>
                      <Button.Group size="small" className={styles['article-btn']}>
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
              )
            })
          }

        </div>
      </div>
    );
  }
}
