import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { todosActions, TodoState, TodoType } from "./todo-slice";
import { getFirestore, collection, doc, getDocs, addDoc, deleteDoc, updateDoc, getDoc } from "firebase/firestore";
import { app } from "../../firebase/config";  // Import the initialized Firebase app

// Initialize Firestore
const db = getFirestore(app);
const todoCollection = collection(db, "todoApp");

export const fetchTodos = () => {
  return async (dispatch: ThunkDispatch<TodoState, void, AnyAction>) => {
    const { docs } = await getDocs(todoCollection);
    const todos = docs.map((todo: any) => ({
      id: todo.id,
      ...todo.data(),
    }));
    dispatch(todosActions.loadTodos(todos));
  };
};

export const sendTodo = (todoData: TodoType) => {
  return async (dispatch: ThunkDispatch<TodoState, void, AnyAction>) => {
    await addDoc(todoCollection, todoData);
    const { docs } = await getDocs(todoCollection);
    const todos = docs.map((todo: any) => ({
      id: todo.id,
      ...todo.data(),
    }));
    dispatch(todosActions.loadTodos(todos));
  };
};

export const deleteTodo = (id: string) => {
  return async (dispatch: ThunkDispatch<TodoState, void, AnyAction>) => {
    await deleteDoc(doc(db, "todoApp", id));
    const { docs } = await getDocs(todoCollection);
    const todos = docs.map((todo: any) => ({
      id: todo.id,
      ...todo.data(),
    }));
    dispatch(todosActions.loadTodos(todos));
  };
};

export const toggleCompleted = (id: string) => {
  return async (dispatch: ThunkDispatch<TodoState, void, AnyAction>) => {
    const todoDoc = doc(db, "todoApp", id);
    const docSnapshot = await getDoc(todoDoc);

    if (docSnapshot.exists()) {
      const currentData = docSnapshot.data();
      await updateDoc(todoDoc, {
        isCompleted: !currentData?.isCompleted,
      });
      dispatch(todosActions.toggleCompleted(id));
    }
  };
};

export const togglePriority = (id: string) => {
  return async (dispatch: ThunkDispatch<TodoState, void, AnyAction>) => {
    const todoDoc = doc(db, "todoApp", id);
    const docSnapshot = await getDoc(todoDoc);

    if (docSnapshot.exists()) {
      const currentData = docSnapshot.data();
      await updateDoc(todoDoc, {
        highPriority: !currentData?.highPriority,
      });
      dispatch(todosActions.togglePriority(id));
    }
  };
};
