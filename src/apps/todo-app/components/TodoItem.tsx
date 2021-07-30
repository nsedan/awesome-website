import React from "react";
import { useDispatch } from "react-redux";
import { todosActions, TodoType } from "../store/todo-slice";
import classes from "./TodoItem.module.css";
import {
  FaRegFlag,
  FaFlag,
  FaCheckCircle,
  FaRegCircle,
  FaTrash,
} from "react-icons/fa";

const TodoItem = (props: TodoType) => {
  const { title, highPriority, isCompleted, id } = props;
  const dispatch = useDispatch();

  const onDeleteHandler = () => {
    dispatch(todosActions.removeTodo(id));
  };

  const onTogglePriority = () => {
    dispatch(todosActions.togglePriority(id));
  };

  const onToggleCompleted = () => {
    dispatch(todosActions.toggleCompleted(id));
  };

  return (
    <li className={classes.listItem}>
      <h3 className={classes.itemTitle}>{title}</h3>
      <div className={classes.itemActions}>
        <button onClick={onTogglePriority}>
          {highPriority ? (
            <FaFlag size="15" color={"red"} />
          ) : (
            <FaRegFlag size="15" />
          )}
        </button>
        <button onClick={onToggleCompleted}>
          {isCompleted ? (
            <FaCheckCircle size="15" color={"green"} />
          ) : (
            <FaRegCircle size="15" />
          )}
        </button>
        <button onClick={onDeleteHandler}>
          <FaTrash size="15" />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
