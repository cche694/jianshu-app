import React, { Component } from "react";
import headerStyle from "./style.module.scss";
import { SearchOutlined, EditFilled } from "@ant-design/icons";
class Header extends Component {
  constructor(props){
    super(props)
    this.state={
      foucus:false
    }
  }
  render() {
    return (
      <div>
        <div className={headerStyle.headWarpper}>
          <a href="/" className={headerStyle.logo}></a>
          <ul className={headerStyle.Nav}>
            <li
              className={`${headerStyle.navitem} ${headerStyle.active} ${headerStyle.left} `}
            >
              首页
            </li>
            <li className={`${headerStyle.navitem} ${headerStyle.left}`}>
              下载APP
            </li>
            <li className={`${headerStyle.navitem} ${headerStyle.left}`}>
              <div className={`${headerStyle.searchWarpper}`}>
                <input className={`${headerStyle.search} ${this.state.foucus ? headerStyle.foucus:''}`  } placeholder="搜索" />
                <i className={`${this.state.foucus ? headerStyle.foucus && headerStyle.iconfont:headerStyle.iconfont}`}>
                  <SearchOutlined />
                </i>
              </div>
            </li>
            <li className={`${headerStyle.navitem} ${headerStyle.right}`}>
              登录
            </li>
            <li className={`${headerStyle.navitem} ${headerStyle.right}`}>
              Aa
            </li>
          </ul>
          <div className={`${headerStyle.addtion}`}>
            <button className={`${headerStyle.btn_rigister}`}>注册</button>
            <button className={`${headerStyle.btn_write}`}>
              <EditFilled />
              写文章
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
