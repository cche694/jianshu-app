import { fromJS } from "immutable";
import axios from "axios";
import * as ActionType from "./actionType";
const defaultState = fromJS({
  topicList: [],
  contentList: [],
  recList: [],
  moreList: [],
  listPage: 0,
  show: false,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionType.GET_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        contentList: fromJS(action.contentList),
        recList: fromJS(action.recList),
      });
    case ActionType.GET_MORE_LIST:
      return state.merge({
        contentList: state.get("contentList").concat(action.moreList),
        listPage: action.nextPage,
      });
    case ActionType.SHOW_SCROLL:
      return state.set("show", action.show);
    default:
      return state;
  }
};
