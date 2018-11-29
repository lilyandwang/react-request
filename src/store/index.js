import {createStore, combineReducers,applyMiddleware} from "redux";
import numReducers from "./reducers/numReducers";
import todoList from "./reducers/todoList";
import reduxPromiseMiddleware from "redux-promise-middleware";

let reducers = combineReducers({
    numReducers,
    todoList
})
const store = createStore(reducers,applyMiddleware(reduxPromiseMiddleware()));
export default store;