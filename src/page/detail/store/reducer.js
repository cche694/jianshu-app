import { fromJS } from "immutable";
import * as actionType from "./actionType";
const defaultState = fromJS({
  title: "",
  content: "",
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionType.GET_DETAIL_CONTENT:
      return state.merge({
        title: action.title,
        content: action.content,
      });
    default:
      return state;
  }
};
