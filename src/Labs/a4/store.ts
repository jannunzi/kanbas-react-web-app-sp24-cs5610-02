import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../a4/helloReducer";
import counterReducer from "./CounterRedux/counterReducer";
import todosReducer from "./todos/todosReducer";
export interface LabState {
  helloReducer: {
    message: string;
  };
  counterReducer: {
    count: number;
  };
  todosReducer: {
    todos: { id: string; title: string }[];
    todo: { title: string };
  };
}
const store = configureStore({
  reducer: {
    helloReducer,
    counterReducer,
    todosReducer,
  },
});
export default store;
