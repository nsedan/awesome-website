import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todosActions } from "../store/todo-slice";
import classes from "./AddItem.module.css";
import { v4 as uuid } from "uuid";

const AddItem = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const todo = {
    id: uuid(),
    title: title,
    highPriority: false,
    isCompleted: false,
  };

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(todosActions.addTodo(todo));
    setTitle("");
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <input
        className={classes.input}
        type="text"
        onChange={(e) => onChangeHandler(e)}
        value={title}
        placeholder="Insert a task..."
        required
      />
      <button className={classes.button}>Add</button>
    </form>
  );
};

export default AddItem;
