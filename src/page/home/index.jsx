import React, { Component } from "react";
import homeStyle from "./style.module.scss";
import Topic from "./components/Topic";
import List from "./components/List";
import Writer from "./components/Writer";
import Recommend from "./components/Recommend";
import axios from "axios";
import Qs from "qs"
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const url ="https://www.fastmock.site/mock/96b7e89baa78750252e85c76d46d8cfe/list/api/topic";
    // const urltest =
    //   "https://www.fastmock.site/mock/96b7e89baa78750252e85c76d46d8cfe/list/api/test";
    // const data = Qs.stringify({ "username": "admin", "password": "123456" });
    // axios.post(urltest, data,{headers:{'Content-Type':'application/x-www-form-urlencoded'}}).then((res) => {
    //   console.log(res);
    // });
    axios.get(url).then(res=>{
      
      const data = res.data.data
      const action={
        type:"get_home_data",
        data:data
      }
      this.props.getHomeData(action)
    }).catch(err=>{
      console.log(err)
    })
  }
  render() {
    return (
      <div className={`${homeStyle.homeWrapper}`}>
        <div className={`${homeStyle.homeLeft}`}>
          <img
            src="https://upload.jianshu.io/admin_banners/web_images/5006/537c82a858e7b0739b26ccb64d318f5e2ba6fbab.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            className={`${homeStyle.bannerImg}`}
          />
          <Topic></Topic>
          <List></List>
        </div>
        <div className={`${homeStyle.homeRight}`}>
          <Recommend></Recommend>
          <Writer></Writer>
        </div>
      </div>
    );
  }
}
const mapDispatchToState = (dispatch) => {
  return {
    getHomeData(action) {
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToState)(Home);
