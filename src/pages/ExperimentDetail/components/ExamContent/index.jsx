import React from 'react';
import { Radio, Checkbox, Message, Dialog, Field } from '@alifd/next';

import IceContainer from '@icedesign/container/lib/IceContainer';

import styles from './index.module.scss';

export default class QuesList extends React.Component {
  field = new Field(this);

  renderSingleChooseQues = (ques, index) => {
    const { title, options, answer } = ques;

    return (
      <IceContainer className={styles.quesContainer}>
        <p className={styles.quesTitle}>{index + 1}. {title}</p>
        <div className={styles.optionsContainer}>
          <Radio.Group itemDirection="ver" {...this.field.init(`ques_${index}`, {
            rules: [
              {
                required: true,
                message: '必须选择一个答案'
              }
            ]
          })}>
            {options.map((option, index) => {
              return <Radio value={option.identifier}>{option.content}</Radio>;
            })}
          </Radio.Group>
        </div>
      </IceContainer>
    )
  }

  renderMultipleChooseQues = (ques, index) => {
    const { title, options, answer } = ques;

    return (
      <IceContainer className={styles.quesContainer}>
        <p className={styles.quesTitle}>{index + 1}. {title}</p>
        <div className={styles.optionsContainer}>
          <Checkbox.Group itemDirection="ver"  {...this.field.init(`ques_${index}`, {
            rules: [
              {
                required: true,
                message: '必须选择一个答案'
              }
            ]
          })} >
            {options.map((option, index) => {
              return (
                <Checkbox value={option.identifier}>{option.content}</Checkbox>
              );
            })}
          </Checkbox.Group>
        </div>
      </IceContainer>
    )
  }

  renderJudgeQues = (ques, index) => {
    const { title } = ques;

    return (
      <IceContainer className={styles.quesContainer}>
        <p className={styles.quesTitle}>{index + 1}. {title}</p>
        <div className={styles.optionsContainer}>
          <Radio.Group {...this.field.init(`ques_${index}`, {
            rules: [
              {
                required: true,
                message: '必须选择一个答案'
              }
            ]
          })}>
            <Radio value={true}>正确</Radio>
            <Radio value={false}>错误</Radio>
          </Radio.Group>
        </div>
      </IceContainer>
    )
  }

  renderQues = (ques, index) => {
    const { type } = ques;

    if (type === 'judge') {
      return this.renderJudgeQues(ques, index);
    }

    if (type === 'singleChoose') {
      return this.renderSingleChooseQues(ques, index);
    }

    if (type === 'multipleChoose') {
      return this.renderMultipleChooseQues(ques, index);
    }

    return null;
  }

  handleSubmit = () => {
    this.field.validate((errors, values) => {
      if (errors && errors.length) {
        Message.error('请完成所有试题后再提交');
      } else {
        const { examId, ques, ques_count } = this.props.examData;

        let score = 0;

        for (const quesKey in values) {
          const index = quesKey.substr(-1);
          let value = values[quesKey];

          if (Array.isArray(value)) {
            value = value.sort((a, b) => a - b);
          }

          if (value.toString() === ques[index].answer.toString()) {
            score += 100 / ques_count;
          }
        }

        this.props.handleSubmit({
          exam_id: examId,
          score
        });

        this.props.handleClose();
      }
    });
  }

  render() {
    const { exam_name, ques } = this.props.examData;

    return (
      <Dialog
        visible
        title={exam_name}
        onOk={this.handleSubmit}
        onClose={this.props.handleClose}
        onCancel={this.props.handleClose}
      >
        {ques.map((ques, index) => {
          return this.renderQues(ques, index);
        })}
      </Dialog>
    );
  }
}