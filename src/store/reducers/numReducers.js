const defaultState = {
    title:"lily"
}
export default (state=defaultState,action)=>{
    switch(action.type){
        case "MODIFY":
            let modify = JSON.parse(JSON.stringify(state));
            modify.title = action.value
            return modify;
    }
    return state
}