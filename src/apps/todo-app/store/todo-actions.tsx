import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { todosActions, TodoState, TodoType } from "./todo-slice";

export const sendTodo = (todoData: TodoType) => {
  return async (dispatch: ThunkDispatch<TodoState, void, AnyAction>) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://resume-279909-default-rtdb.firebaseio.com/todos.json",
        { method: "POST", body: JSON.stringify(todoData) }
      );

      if (!response.ok) {
        throw new Error("Sending data failed.");
      }
    };

    try {
      await sendRequest();
      dispatch(fetchTodosData());
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchTodosData = () => {
  return async (dispatch: ThunkDispatch<TodoState, void, AnyAction>) => {
    const fetchTodos = async () => {
      const response = await fetch(
        "https://resume-279909-default-rtdb.firebaseio.com/todos.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch data!");
      }

      const data = await response.json();
      return data;
    };

    try {
      const todosData = await fetchTodos();
      const todos = todosData ? Object.values(todosData) : [];

      dispatch(todosActions.loadTodos(todos));
    } catch (error) {
      console.log(error);
    }
  };
};
