import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { todosActions, TodoState, TodoType } from "./todo-slice";

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

export const deleteTodo = (id: string) => {
  return async (dispatch: ThunkDispatch<TodoState, void, AnyAction>) => {
    const fetchRequest = async () => {
      const response = await fetch(
        "https://resume-279909-default-rtdb.firebaseio.com/todos.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch data!");
      }

      const data = await response.json();
      return data;
    };

    // Option A: Query the database twice?? 1 get all data, 2 load new data without the deleted todo
    // Option B: Query by ID or firebase ID with a DELETE method
    // Option C: Delete todo in state and send all todos to firebase with a PUT method

    const putRequest = async (newArray: TodoState) => {
      const response = await fetch(
        "https://resume-279909-default-rtdb.firebaseio.com/todos.json",
        {
          method: "PUT",
          body: JSON.stringify(newArray),
        }
      );

      if (!response.ok) {
        throw new Error("Sending new data failed.");
      }

      const data = await response.json();
      return data;
    };

    try {
      const todosData: TodoState = await fetchRequest();
      const todos = todosData ? Object.values(todosData) : [];
      const newArray = todos.filter((todo: TodoType) => todo.id !== id);
      await putRequest(newArray);
      dispatch(todosActions.loadTodos(newArray));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteAllTodos = () => {
  return async (dispatch: ThunkDispatch<TodoState, void, AnyAction>) => {
    const deleteAllRequest = async () => {
      const response = await fetch(
        "https://resume-279909-default-rtdb.firebaseio.com/todos.json",
        { method: "DELETE" }
      );

      if (!response.ok) {
        throw new Error("Delete all data failed.");
      }
    };

    try {
      await deleteAllRequest();
      dispatch(fetchTodosData());
    } catch (error) {
      console.log(error);
    }
  };
};
