import { fromJS } from "immutable";
import * as ActionType from "./actionType";
const loginStatus = sessionStorage.getItem("loginStatus")
  ? JSON.parse(sessionStorage.getItem("loginStatus"))
  : false;
const defaultState = fromJS({
  loginStatus: loginStatus,
  account: "",
  password: "",
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACCOUNT_VALUE:
      return state.set("account", action.accountValue);
    case ActionType.CHANGE_PASSWORD_VALUE:
      return state.set("password", action.passwordValue);
    case ActionType.CHANGE_LOGIN_STATUS:
      sessionStorage.setItem("loginStatus", JSON.stringify(action.verify));
      return state.set("loginStatus", action.verify);
    case ActionType.LOG_OUT:
      sessionStorage.setItem("loginStatus", JSON.stringify(action.value));
      return state.set("loginStatus", action.value).set("password", "");
    default:
      return state;
  }
};
