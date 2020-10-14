import React, { Component } from "react";
import { connect } from "react-redux";
import listStyle from "../style.module.scss";
class List extends Component {
  render() {
    return (
      <div className={`${listStyle.listItemWarpper}`}>
        {this.props.list.length ? (
          this.props.list.map((item) => {
            return (
              <div className={`${listStyle.listItem}`} key={item.id}>
                <div className={`${listStyle.wrapimg}`}>
                  <img src={item.imgUrl} alt="123" />
                </div>

                <div className={`${listStyle.listInfo}`}>
                  <h3 className={`${listStyle.listInfoTitle}`}>{item.title}</h3>
                  <p className={`${listStyle.listInfoAbstract}`}>
                    {item.pargraph}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    list: state.getIn(["home", "contentList"]),
  };
};

export default connect(mapStateToProps, null)(List);
