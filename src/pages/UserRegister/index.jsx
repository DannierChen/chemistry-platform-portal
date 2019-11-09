/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Input, Button, Message, Select } from '@alifd/next';
import { FormBinderWrapper as IceFormBinderWrapper, FormBinder as IceFormBinder, FormError as IceFormError } from '@icedesign/form-binder';
import IceIcon from '@icedesign/foundation-symbol';
import styles from './index.module.scss';

const Option = Select.Option;

@withRouter
export class UserRegister extends Component {
  static displayName = 'UserRegister';
  
  static propTypes = {};
  
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
        characterSelect:'',
        username: '',
        email:'',
        passwd: '',
        rePasswd: '',
        childName: '',
    };
  }
 

  handleSubmit = (e) => {
    if (this.state.username =="" || this.state.password==""){
       Message.error('error');
       return;
    }

    axios.post('http://192.168.31.44:7001/user/login', {
      username: this.state.username,
      password: this.state.password,
    }, {
      withCredentials: true 
    }).then((response) => {
      let data = response.data;
      console.log(data);
      if (data.success) {
        Cookies.set('userId', data.data.userId);
        window.location.href = window.location.origin + '/#/dashboard';
      } else {
       Message.error(data.message);        
      }
    }).catch((error) => {
      console.log(error);
    });
  };

  onSelectChange = (value) => {
   this.setState({
     characterSelect: value,
   })
  }

  renderSelect = () => {
    if (this.state.characterSelect == "parent") {
      return (
        <div id = "childName" className={styles.childName}>
          <Input 
            innerBefore={<IceIcon type="person" className={styles.inputIcon}/>}
            placeholder="孩子姓名"
            aria-label="input with config of innerBefore"
            className={styles.inputCol}
          />
        </div> 
      );
    } else {
      return null;
    }
    
  }

 

  render() {
    return (
      <div className={styles.container}>
        <h4 className={styles.title}>注 册</h4>
        <IceFormBinderWrapper value={this.state.value} onChange={this.formChange} ref="form">
          <div className={styles.formItems}>
            <div className={styles.formItem}>
              <Select 
                id="characterSelect" 
                onChange={this.onSelectChange} 
                defaultValue="注册角色" 
                aria-label="character is" 
                showSearch 
                hasClear
              >
                <Option value="teacher">教师</Option>
                <Option value="student">学生</Option>
                <Option value="parent">家长</Option>
              </Select>
            </div>

            <div className={styles.formItem}>
              <Input 
                innerBefore={<IceIcon type="person" className={styles.inputIcon}/>}
                placeholder="用户名"
                aria-label="input with config of innerBefore"
                className={styles.inputCol}
              />
            </div>

            <div className={styles.formItem}>
              <Input 
                innerBefore={<IceIcon type="mail" className={styles.inputIcon}/>}
                placeholder="邮箱"
                aria-label="input with config of innerBefore"
                className={styles.inputCol}
              />
            </div>

            <div className={styles.formItem}>
              <Input
                innerBefore={<IceIcon type="lock" className={styles.inputIcon}/>}
                placeholder="密码"
                aria-label="input with config of innerBefore"
                htmlType="password"
                className={styles.inputCol}
              />
            </div>

            <div className={styles.formItem}>
              <Input
                innerBefore={<IceIcon type="lock" className={styles.inputIcon}/>}
                placeholder="密码确认"
                aria-label="input with config of innerBefore"
                htmlType="password"
                className={styles.inputCol}
              />
            </div>

            {this.renderSelect()}

            <div className="footer">
              <Button type="primary" onClick={this.handleSubmit} className={styles.submitBtn} size="large">
                注 册
              </Button>

              <Link to="/user/login" className={styles.tips}>
                使用已有账户登录
              </Link>
            </div>
          </div>
        </IceFormBinderWrapper>
      </div>
    );
  }
}

export default UserRegister;
