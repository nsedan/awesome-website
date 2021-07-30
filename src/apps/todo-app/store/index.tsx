import { configureStore } from "@reduxjs/toolkit";
import todoSlice, { TodoState } from "./todo-slice";

export interface AppState {
  todos: TodoState;
}

const store = configureStore({
  reducer: { todos: todoSlice.reducer },
});

export default store;
