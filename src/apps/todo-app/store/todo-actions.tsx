import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { todosActions, TodoState, TodoType } from "./todo-slice";
import { store } from "../../firebase/config";

const db = store.collection("todoApp");

export const fetchTodos = () => {
  return async (dispatch: ThunkDispatch<TodoState, void, AnyAction>) => {
    const { docs } = await db.get();
    const todos = docs.map((todo) => ({
      id: todo.id,
      ...todo.data(),
    }));
    dispatch(todosActions.loadTodos(todos));
  };
};

export const sendTodo = (todoData: TodoType) => {
  return async (dispatch: ThunkDispatch<TodoState, void, AnyAction>) => {
    await db.add(todoData);
    const { docs } = await db.get();
    const todos = docs.map((todo) => ({
      id: todo.id,
      ...todo.data(),
    }));
    dispatch(todosActions.loadTodos(todos));
  };
};

export const deleteTodo = (id: string) => {
  return async (dispatch: ThunkDispatch<TodoState, void, AnyAction>) => {
    await db.doc(id.toString()).delete();
    const { docs } = await db.get();
    const todos = docs.map((todo) => ({
      id: todo.id,
      ...todo.data(),
    }));
    dispatch(todosActions.loadTodos(todos));
  };
};

export const toggleCompleted = (id: string) => {
  return async (dispatch: ThunkDispatch<TodoState, void, AnyAction>) => {
    await db
      .doc(id)
      .get()
      .then((doc) => {
        db.doc(id).update({
          isCompleted: !doc.data()!.isCompleted,
        });
      })
      .then(() => {
        dispatch(todosActions.toggleCompleted(id));
      });
  };
};

export const togglePriority = (id: string) => {
  return async (dispatch: ThunkDispatch<TodoState, void, AnyAction>) => {
    await db
      .doc(id)
      .get()
      .then((doc) => {
        db.doc(id).update({
          highPriority: !doc.data()!.highPriority,
        });
      })
      .then(() => {
        dispatch(todosActions.togglePriority(id));
      });
  };
};
