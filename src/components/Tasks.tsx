import React from "react";
import ReactDOM from "react-dom/client";
import stylesTasks from "./Tasks.module.css";
import { App } from "../App";

import stylesApp from "./Tasks.module.css";

type TasksProps = {
  taskQuantity: number | undefined;
  tasksCompleted: number | undefined;
};

export function Tasks(props: TasksProps) {
  const { tasksCompleted, taskQuantity } = props;

  const hasTasks = Boolean(taskQuantity);

  return (
    <div className={stylesApp.tasksEmpty}>
      <div className={stylesApp.taskTopCenter}>
        <span className={stylesApp.tasksCreate}>
          Tarefas criadas <div>{taskQuantity ?? 0}</div>
        </span>
        <span className={stylesApp.tasksCompleted}>
          Concluídas
          {hasTasks ? (
            <div>
              {tasksCompleted} de {taskQuantity}
            </div>
          ) : (
            <div>0</div>
          )}
        </span>
      </div>
    </div>
  );
}
