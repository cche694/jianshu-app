import * as ActionType from "./actionType";
import axios from "axios";
const changeLoginStatus = (verify) => ({
  type: ActionType.CHANGE_LOGIN_STATUS,
  verify: verify,
});
export const accountValueChange = (account) => ({
  type: ActionType.CHANGE_ACCOUNT_VALUE,
  accountValue: account,
});
export const passwordValueChange = (password) => ({
  type: ActionType.CHANGE_PASSWORD_VALUE,
  passwordValue: password,
});
export const logout = () => ({
  type: ActionType.LOG_OUT,
  value: false,
});
export const submit = (account, password) => {
  return (dispatch) => {
    const url =
      "https://www.fastmock.site/mock/96b7e89baa78750252e85c76d46d8cfe/list/api/login";
    axios
      .post(url, {
        username: account,
        password: password,
      })
      .then((res) => {
        const data = res.data.data;
        if (!data.verifySuccess) {
          alert("账号密码错误");
          dispatch(changeLoginStatus(data.verifySuccess));
        }
        dispatch(changeLoginStatus(data.verifySuccess));
      });
  };
};
