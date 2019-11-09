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
import styles from './index.module.scss';

const { Option } = Select;
const { Group: RadioGroup } = Radio;
const FormItem = Form.Item;
import { Editor } from '@tinymce/tinymce-react';


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
        <Message type="help" title="提示" style={{marginBottom: 12}}>
          请先完成预习试卷，才能进入实验流程
        </Message>
        <div className={styles['section']}>
         <div className={styles['content-container']}>
            <h2>铜与硫的反应</h2>
            <div className={styles['content']}>
              <span>通过初中阶段的学习我们可以了解到，铜的活动性顺序是在氢之后的，但是为什么铜可以和浓硫酸反应，而不能和稀硫酸反应呢？</span>
            </div>
          </div>

          <div id="aaa" className={styles['user-info']}>
            <div className={styles.mask} style={{height: 740}}>
              点击完成预习试卷
            </div>
            <Form labelAlign="top" >
                  <FormItem label="实验报告">
                    <Editor
                    style={{width: 600}}
                    init={{
                      min_height: 300
                    }} />
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
      </div>
    )
  }
}


