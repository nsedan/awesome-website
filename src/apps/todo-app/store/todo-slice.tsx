import { createSlice } from "@reduxjs/toolkit";

export interface TodoType {
  id: string;
  title: string;
  highPriority: boolean;
  isCompleted: boolean;
}

export type TodoState = TodoType[];

const initialState: TodoState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = action.payload;
      state.push(newTodo);
      return state;
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      return state.filter((todo) => todo.id !== id);
    },
    removeAllTodo: (state) => {
      return (state = initialState);
    },
    togglePriority: (state, action) => {
      const id = action.payload;
      return state.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            highPriority: !todo.highPriority,
          };
        }
        return todo;
      });
    },
    toggleCompleted: (state, action) => {
      const id = action.payload;
      return state.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      });
    },
  },
});

export const todosActions = todoSlice.actions;
export default todoSlice;
