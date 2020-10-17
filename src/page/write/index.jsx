import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Write extends Component {
  render() {
    const { loginStatus } = this.props;
    
    if (loginStatus) {
      return <div>write</div>
    } else {
      return <Redirect to="/login" />;
    }
  }
}
const mapState = (state) => {
  return {
    loginStatus: state.getIn(["login","loginStatus"]),
  };
};
export default connect(mapState, null)(Write);
