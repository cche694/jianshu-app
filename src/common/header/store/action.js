import * as actionType from "./actionType.js";
import axios from "axios";
import { fromJS } from "immutable";
const changeList = (data, totalPage) => ({
  type: actionType.CHANGE_LIST,
  data: fromJS(data),
  totalPage: totalPage,
});
export const searchOnFocus = () => ({
  type: actionType.SEARCH_FOCUS,
});
export const searchOnBlur = () => ({
  type: actionType.SEARCH_ONBLUR,
});

export const mouseEnter = () => ({
  type: actionType.MOUSE_ENTER,
});
export const mouseLeave = () => ({
  type: actionType.MOUSE_LEAVE,
});
export const changePage = (page) => ({
  type: actionType.CHANGE_PAGE,
  page: page,
});
export const getList = () => {
  const url =
    "https://www.fastmock.site/mock/96b7e89baa78750252e85c76d46d8cfe/list/api/searchList";
  return (dispatch) => {
    axios
      .get(url)
      .then((res) => {
        const list = res.data.data.list;
        const action = changeList(list, list.length / 10);
        dispatch(action);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
