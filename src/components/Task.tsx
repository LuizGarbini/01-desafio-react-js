import React from "react";
import ReactDOM from "react-dom/client";

import stylesTask from "./Task.module.css";
import { Task as TaskType } from "../App";

type TaskProps = {
  task: TaskType;
  handleToggleTaskStatus: (id: number) => void;
  handleRemoveTask: (id: number) => void;
};

export function Task(props: TaskProps) {
  const {
    task: { title, id, isCompleted },
    handleToggleTaskStatus,
    handleRemoveTask,
  } = props;

  return (
    <div className={stylesTask.Content}>
      <div
        className={
          isCompleted ? stylesTask.ContentDivCompleted : stylesTask.ContentDiv
        }
      >
        <input
          type="checkbox"
          name="radio"
          onChange={() => handleToggleTaskStatus(id)}
        />

        <p>{title}</p>
        <button
          className={stylesTask.trash}
          onClick={() => handleRemoveTask(id)}
        >
          excluir
        </button>
      </div>
    </div>
  );
}
