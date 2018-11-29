import {fetch as fetchPolyfill} from "whatwg-fetch";
import actionTypes from "./actionType";

export const goodsListAction = (dispatch) =>{
    dispatch({
        type:actionTypes.goodsAction,
        payload:new Promise((resolve)=>{
            fetchPolyfill("/index.php?r=index/ajaxnew&page=1")
            .then((res)=>res.json())
            .then((data)=>{
                resolve(data);
            })
        })
    })
}