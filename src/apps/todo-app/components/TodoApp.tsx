import React from "react";
import AddItem from "./AddItem";
import TodoList from "./TodoList";
import { Provider } from "react-redux";
import store from "../store";
import classes from "./TodoApp.module.css";

const TodoApp = () => {
  return (
    <Provider store={store}>
      <main className={classes.outerContainer}>
        <div className={classes.innerContainer}>
          <AddItem />
          <TodoList />
        </div>
      </main>
    </Provider>
  );
};

export default TodoApp;
