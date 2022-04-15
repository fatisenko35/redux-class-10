import { createStore, combineReducers } from "redux";
import counterReducer from "./reducer/counterReducer";
import todoReducer from "./reducer/todoReducer";

const reducers = combineReducers({
  counterReducer: counterReducer,
  todoReducer : todoReducer
});
// create store
export const myStore = createStore(reducers);
