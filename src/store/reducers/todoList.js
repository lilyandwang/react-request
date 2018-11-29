const defaultState = {
    goodsList:[]
}
export default (state=defaultState,action)=>{
    console.log(action)
    switch(action.type){
        case "GOODSLIST_PENDING":
            let loading = JSON.parse(JSON.stringify(state));
            loading.goodsList = "正在加载"
            return loading;
        case "GOODSLIST_FULFILLED":
            let ok = JSON.parse(JSON.stringify(state));
            ok.goodsList = action.payload.data.data;
            return ok;
    }
    return state;
}