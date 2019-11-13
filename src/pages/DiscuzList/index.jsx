/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import {
  Button,
  Select,
  Radio,
  Icon,
  Tag,
  Message,
} from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import { withRouter } from 'react-router-dom';

import styles from './index.module.scss';

const { Option } = Select;
const { Group: RadioGroup } = Radio;
const { Group: TagGroup, Selectable: SelectableTag } = Tag;
const DOT = <span>·</span>

@withRouter
export default class New extends Component {
  static displayName = 'New';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        status: 'pending',
      },
    };
  }

  formChange = (value) => {
    console.log('value', value);
    this.setState({
      value,
    });
  };

  validateAllFormField = () => {
    this.refs.form.validateAll((errors, values) => {
      if (errors) {
        Message.error('请填写完整的信息');
        return;
      }
      Message.success('添加完成');
      this.props.history.push('/');
      console.log({ values });
    });
  };

  render() {
    return (
      <div className={styles['container']}>

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

        <div style={{width: '80%', marginBottom: 20, display: 'flex', justifyContent: 'space-between'}}>
          <span style={{fontSize: '32px', fontWeight: '800'}}>问题列表</span>
          <Button type="primary">发布问题</Button>
        </div>

        <div className={styles['article-list']}>
          <article className={styles['article-content']} onClick={() => {
            this.props.history.push('/discuz/detail/2');
          }}>
            <section className={styles['article-section']}>
              <header className={styles['article-info']}>
                <span>陈同学</span>
                {DOT}
                <span>7天前</span>
                {DOT}
                <span>打开原子世界的大门</span>
              </header>
              <div className={styles['article-title']}>
                <p>汤姆生原子结构模型的缺陷是?</p>
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

        </div>
      </div>
    )
  }
}


