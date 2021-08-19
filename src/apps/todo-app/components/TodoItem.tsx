import React from "react";
import { useDispatch } from "react-redux";
import { TodoType } from "../store/todo-slice";
import {
  deleteTodo,
  toggleCompleted,
  togglePriority,
} from "../store/todo-actions";
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
    if (id) {
      dispatch(deleteTodo(id));
    }
  };

  const onTogglePriority = () => {
    if (id) {
      dispatch(togglePriority(id));
    }
  };

  const onToggleCompleted = () => {
    if (id) {
      dispatch(toggleCompleted(id));
    }
  };

  return (
    <li className={classes.listItem}>
      <p className={classes.itemTitle}>{title}</p>
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
