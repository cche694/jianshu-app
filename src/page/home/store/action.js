import axios from "axios";
import {fromJS} from "immutable"
import * as ActionType from "./actionType";

const getHomeDataAction = (data) => ({
  type: ActionType.GET_HOME_DATA,
  topicList: data.taglist,
  contentList: data.contentList,
  recList: data.recList,
});
const getMoreListAction=(data,nextPage)=>({
  type:ActionType.GET_MORE_LIST,
  moreList:fromJS(data.moreList),
  nextPage:nextPage
})
export const getHomedata = () => {
  return (dispatch) => {
    const url =
      "https://www.fastmock.site/mock/96b7e89baa78750252e85c76d46d8cfe/list/api/topic";
    axios
      .get(url)
      .then((res) => {
        const data = res.data.data;
        const action = getHomeDataAction(data);
        dispatch(action);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const getMoreList = (page) => {
  return (dispatch) => {
    const url =
      `https://www.fastmock.site/mock/96b7e89baa78750252e85c76d46d8cfe/list/api/morelist?page=${page}`;
    axios
      .get(url)
      .then((res) => {
        const data = res.data.data;
        console.log(data.moreList)
        const action=getMoreListAction(data,page+1)
        dispatch(action)
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const changeScrollShow=(show)=>({
  type:ActionType.SHOW_SCROLL,
  show:show
})
