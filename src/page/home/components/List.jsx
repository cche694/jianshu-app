import React, { PureComponent } from "react";
import { connect } from "react-redux";
import listStyle from "../style.module.scss";
import { ActionCreator } from "../store";
import { Link } from "react-router-dom";
class List extends PureComponent {
  contentlist = (list) => {
    return list.map((item) => {
      return (
        <Link to="/detail" key={item.id}>
          <div className={`${listStyle.listItem}`}>
            <div className={`${listStyle.wrapimg}`}>
              <img src={item.imgUrl} alt="123" />
            </div>
            <div className={`${listStyle.listInfo}`}>
              <h3 className={`${listStyle.listInfoTitle}`}>{item.title}</h3>
              <p className={`${listStyle.listInfoAbstract}`}>{item.pargraph}</p>
            </div>
          </div>
        </Link>
      );
    });
  };
  loding = () => {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  };
  render() {
    return (
      <div className={`${listStyle.listItemWarpper}`}>
        {this.props.list.length
          ? this.contentlist(this.props.list)
          : this.loding()}
        <div
          className={`${listStyle.loadMore}`}
          onClick={() => this.props.getMoreList(this.props.listPage)}
        >
          阅读更多
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    list: state.getIn(["home", "contentList"]),
    moreList: state.getIn(["home", "moreList"]),
    listPage: state.getIn(["home", "listPage"]),
  };
};
const mapDispatchToState = (dispatch) => {
  return {
    getMoreList(page) {
      const action = ActionCreator.getMoreList(page);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToState)(List);
