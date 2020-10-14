import {fromJS} from "immutable"
import axios from "axios"
const defaultState=fromJS({
    topicList:[],
    contentList:[]
})

export default (state=defaultState,action)=>{
    switch(action.type){
        case "get_home_data":
            return state.set("topicList",action.data.taglist).set("contentList",action.data.contentList)
        default:
            return state
    }
    
}