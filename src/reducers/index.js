import CountReducer from "./countReducer";
import TodoReducer from "./todoReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: CountReducer,
    todo: TodoReducer
});

export default allReducers;