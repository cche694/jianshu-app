import React, { Component } from "react";
import DetailStyle from "./style.module.scss";
import { connect } from "react-redux";
import {ActionCreator} from "./store/index.js"
import {withRouter} from "react-router-dom"

class Detail extends Component {
  componentDidMount() {
      this.props.getDetailContent(this.props.match.params.id)
  }
  render() {
     const  {title,content}=this.props
    return (
      <div className={`${DetailStyle.detailWrapper}`}>
        <div className={`${DetailStyle.detailLeft}`}>
          <h1 className={`${DetailStyle.detailHeader}`}>
                    {title}
          </h1>
          <article className={`${DetailStyle.detailContent}`} dangerouslySetInnerHTML={{__html:content}}></article>
        </div>
        <div className={`${DetailStyle.detailRight}`}></div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
      title:state.getIn(["detail","title"]),
      content:state.getIn(["detail","content"])
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getDetailContent(id){
      const  action=ActionCreator.getDetailData(id)
        dispatch(action)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));
