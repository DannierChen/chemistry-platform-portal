import React, { Component } from 'react';
import VideoFilter from './components/VideoFilter';

import Axios from 'axios';

import { Icon, Button, Tag } from '@alifd/next';

import { router } from 'react-router-dom';

const { Group: TagGroup, Selectable: SelectableTag } = Tag;

import styles from './index.module.scss';

const DOT = <span>·</span>

export default class ArticleList extends Component {
  static displayName = 'Task';

  static propTypes = {};

  static defaultProps = {};

  state = {
    termList: [],
    selectedTerm: -1,
    chapterList: [],
    articleList: [],
    selectedChapterId: undefined,
  }

  constructor(props) {
    super(props);
  }

  getList = (params = {}) => {
    Axios('/article/list', {
      params: params
    }).then(res => {
      res = res.data;

      if (res.success) {
        this.setState({
          articleList: res.data
        });
      }
    });
  }

  componentDidMount() {
    this.getList();

    Axios('/getTermList').then(res => {
      res = res.data;

      if (res.success) {
        this.setState({
          termList: res.data
        });
      }
    })
  }

  handleTermChange = (term) => {
    const { termList } = this.state;

    const selectedTerm = termList.filter(item => item.value === term.value)[0];

    this.setState({
      selectedTerm: term.value,
      selectedChapterId: undefined,
      chapterList: selectedTerm.children
    }, () => {
      this.getList({
        term_id: term.value
      });
    })
  }

  handleChapterChange = (chapter) => {
    this.setState({
      selectedChapterId: chapter
    }, () => {
      this.getList({
        term_id: this.state.selectedTerm,
        chapter_id: chapter
      });
    });
  }

  render() {
    const { termList, articleList, selectedTerm, chapterList, selectedChapterId } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles['article-filter']}>
          <div className={styles['filter-item']}>
            <span className={styles['filter-label']}>学期</span>
            <TagGroup>
              <SelectableTag checked={selectedTerm === -1} className={styles['custom-tag']}>全部</SelectableTag>
              {
                termList.map((term, index) => {
                  return <SelectableTag checked={selectedTerm === term.value} onChange={this.handleTermChange.bind(this, term, index)} className={styles['custom-tag']}>{term.label}</SelectableTag>
                })
              }
            </TagGroup>
          </div>

          {
            selectedTerm === -1 ? null : (
              <div className={styles['filter-item']} style={{ marginTop: 16 }}>
                <span className={styles['filter-label']}>章节</span>
                <TagGroup>
                  {
                    chapterList.map(chapter => {
                      return <SelectableTag onChange={this.handleChapterChange.bind(this, chapter.value)} checked={selectedChapterId === chapter.value} className={styles['custom-tag']}>{chapter.label}</SelectableTag>
                    })
                  }
                </TagGroup>
              </div>
            )
          }

        </div>

        <div className={styles['article-list']}>
          {
            articleList.map(article => {
              return (
                <article className={styles['article-content']} onClick={() => {
                  this.props.history.push(`/article/detail/${article.articleId}`)
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
                      <p>{article.article_title}</p>
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
