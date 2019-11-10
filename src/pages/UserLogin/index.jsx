/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Input, Button, Message } from '@alifd/next';
import IceIcon from '@icedesign/foundation-symbol';
import axios from 'axios';
import Cookies from 'js-cookie';
import styles from './index.module.scss';

@withRouter
class UserLogin extends Component {
  static displayName = 'UserLogin';

  static propTypes = {};

  static defaultProps = {};


  constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: '',
    };
  }

  onUserChange = (username) => {
    this.setState({
      username,
    });
  };

  onPwdChange = (password) => {
    this.setState({
      password,
    });
  };



  handleSubmit = (e) => {
    if (this.state.username =="" || this.state.password==""){
       Message.error('error');
       return;
    }

    axios.post('/user/login', {
      userName: this.state.username,
      userPass: this.state.password,
    }, {
      withCredentials: true
    }).then((response) => {
      let data = response.data;
      console.log(data);
      if (data.success) {
        Cookies.set('userId', data.data.userId);
        Cookies.set('userName', data.data.userName);

        window.location.href = '/portal/#/dashboard';
      } else {
       Message.error(data.message);
      }
    }).catch((error) => {
      console.log(error);
    });
  };



  render() {
   const canClick = () => {
      let flag = true;
      if (this.state.username !=="" && this.state.password !=="") {
        flag = false;
      }
      return flag;
    }
    return (
      <div className={styles.container}>
        <h4 className={styles.title}>登 录</h4>

        <div className={styles.formItem}>
          <Input
            innerBefore={<IceIcon type="person" className={styles.inputIcon}/>}
            placeholder="用户名或邮箱"
            value={this.state.username}
            aria-label="input with config of innerBefore"
            onChange={this.onUserChange.bind(this)}
            className={styles.inputCol}
          />
        </div>
        <div className={styles.formItem}>
          <Input
            innerBefore={<IceIcon type="lock" className={styles.inputIcon}/>}
            placeholder="密码"
            value={this.state.password}
            aria-label="input with config of innerBefore"
            onChange={this.onPwdChange}
            htmlType="password"
            className={styles.inputCol}
          />
        </div>

        <Button type="primary" onClick={this.handleSubmit.bind(this)} disabled={canClick()} className={styles.submitBtn}>登录</Button>

      <div className={styles.tips}>
         <Link to="/user/register" >立即注册</Link>
      </div>
      </div>
    );
  }
}



export default UserLogin;
