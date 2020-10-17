import axios from "axios";
import * as actionType from "./actionType"
import qs from "axios"
const getDetailAction=(content,title)=>({
    type:actionType.GET_DETAIL_CONTENT,
    content:content,
    title:title
})
export const getDetailData = (id) => {
  return (dispatch) => {
    const url =
      "https://www.fastmock.site/mock/96b7e89baa78750252e85c76d46d8cfe/list/api/detailcontent?id="+id;
    axios.get(url).then((res) => {
      console.log(res)
        const data=res.data.data
        console.log(data)
        const action =getDetailAction(data.content,data.title)
        dispatch(action)
    }).catch(err=>{
      console.log(err)
    });
  };
};
