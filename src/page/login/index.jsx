import React, { Component } from "react";
import LoginStyle from "./style.module.scss";
import { Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { ActionCreator } from "./store";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { loginStatus } = this.props;
    if (!loginStatus) {
      return (
        <div className={`${LoginStyle.Wrapper}`}>
          <Input
            size="large"
            placeholder="Basic usage"
            prefix={<UserOutlined />}
            onChange={this.props.onAccountChange}
            value={this.props.account}
          />
          <Input
            size="large"
            placeholder="Basic usage"
            prefix={<LockOutlined />}
            type="password"
            onChange={this.props.onPasswordChange}
            value={this.props.password}
          />
          <Button
            type="primary"
            shape="round"
            style={{ width: "100%", marginTop: 20 }}
            onClick={() => {
              this.props.onSubmit(this.props.account, this.props.password);
            }}
          >
            login
          </Button>
        </div>
      );
    } else {
      return <Redirect to="/"></Redirect>;
    }
  }
}
const mapState = (state) => {
  return {
    account: state.getIn(["login", "account"]),
    password: state.getIn(["login", "password"]),
    loginStatus: state.getIn(["login", "loginStatus"]),
  };
};
const mapDispatch = (dispatch) => {
  return {
    onAccountChange(e) {
      const account = e.target.value;
      const action = ActionCreator.accountValueChange(account);
      dispatch(action);
    },
    onPasswordChange(e) {
      const password = e.target.value;
      console.log(password);
      const action = ActionCreator.passwordValueChange(password);
      dispatch(action);
    },
    onSubmit(account, password) {
      console.log(account, password);
      const action = ActionCreator.submit(account, password);
      dispatch(action);
    },
  };
};
export default connect(mapState, mapDispatch)(Login);
