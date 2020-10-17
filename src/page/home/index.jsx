import React, { PureComponent } from "react";
import homeStyle from "./style.module.scss";
import Topic from "./components/Topic";
import List from "./components/List";
import Writer from "./components/Writer";
import Recommend from "./components/Recommend";
import { connect } from "react-redux";
import { ActionCreator } from "./store";
import { UpOutlined } from "@ant-design/icons";


class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getHomeData();
    this.bindEvent();
  }
  handleScrollTop() {
    window.scrollTo(0, 0);
  }
  bindEvent() {
    window.addEventListener("scroll", this.props.changeWindowScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeWindowScroll);
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
        {this.props.show ? (
          <div className={`${homeStyle.backToTopWrapper}`}>
            <div
              className={`${homeStyle.backToTop}`}
              onClick={this.handleScrollTop}
            >
              <UpOutlined />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    show: state.get("home").get("show"),
    loginStatus:state.get("login").get("loginStatus")
  };
};
const mapDispatchToState = (dispatch) => {
  return {
    getHomeData() {
      const action = ActionCreator.getHomedata();
      dispatch(action);
    },
    changeWindowScroll() {
      let top = document.documentElement.scrollTop;
      let show = false;
      if (top === 0) {
        show = false;
      } else if (top > 300) {
        show = true;
      }
      const action = ActionCreator.changeScrollShow(show);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToState)(Home);
