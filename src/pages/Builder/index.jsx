import React, { Component } from 'react';

import BuilderTable from './components/BuilderTable';

import styles from './index.scss';

export default class Builder extends Component {
  static displayName = 'Builder';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>最简单的有机化合物——甲烷</h2>

      </div>
    );

    // return (
    //   <div className="article-list-page">
    //     <div className="article-container">
    //       <div className="article-content">
    //         <div className="sub-title">
    //           <span>专栏</span>
    //           <span>王老师</span>
    //           <span>1天前</span>
    //           <span>高一/有机物</span>
    //         </div>
    //         <p className="title">最简单的有机化合物——甲烷</p>
    //       </div>
    //       <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562498247578&di=6fcca3960dd37510740840d568c28e96&imgtype=jpg&src=http%3A%2F%2Fi3.shouyou.itc.cn%2Fv3%2Fcoc%2F2014%2F10%2F06%2F100611434030182001.jpg" width="60" height="60" />
    //     </div>
    //     <div className="article-container">
    //       <div className="article-content">
    //         <div className="sub-title">
    //           <span>专栏</span>
    //           <span>王老师</span>
    //           <span>1天前</span>
    //           <span>高一/有机物</span>
    //         </div>
    //         <p className="title">最简单的有机化合物——甲烷</p>
    //       </div>
    //       <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562498247578&di=6fcca3960dd37510740840d568c28e96&imgtype=jpg&src=http%3A%2F%2Fi3.shouyou.itc.cn%2Fv3%2Fcoc%2F2014%2F10%2F06%2F100611434030182001.jpg" width="60" height="60" />
    //     </div>
    //     <div className="article-container">
    //       <div className="article-content">
    //         <div className="sub-title">
    //           <span>专栏</span>
    //           <span>王老师</span>
    //           <span>1天前</span>
    //           <span>高一/有机物</span>
    //         </div>
    //         <p className="title">最简单的有机化合物——甲烷</p>
    //       </div>
    //       <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562498247578&di=6fcca3960dd37510740840d568c28e96&imgtype=jpg&src=http%3A%2F%2Fi3.shouyou.itc.cn%2Fv3%2Fcoc%2F2014%2F10%2F06%2F100611434030182001.jpg" width="60" height="60" />
    //     </div>
    //     <div className="article-container">
    //       <div className="article-content">
    //         <div className="sub-title">
    //           <span>专栏</span>
    //           <span>王老师</span>
    //           <span>1天前</span>
    //           <span>高一/有机物</span>
    //         </div>
    //         <p className="title">最简单的有机化合物——甲烷</p>
    //       </div>
    //       <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562498247578&di=6fcca3960dd37510740840d568c28e96&imgtype=jpg&src=http%3A%2F%2Fi3.shouyou.itc.cn%2Fv3%2Fcoc%2F2014%2F10%2F06%2F100611434030182001.jpg" width="60" height="60" />
    //     </div>

    //   </div>
    // );
  }
}
