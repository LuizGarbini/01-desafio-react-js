import React from "react";
import ReactDOM from "react-dom/client";
import stylesTasks from "./Tasks.module.css";

import stylesApp from "./Tasks.module.css";

export function Tasks() {
  return (
    <div className={stylesApp.tasksEmpty}>
      <div className={stylesApp.taskTopCenter}>
        <span className={stylesApp.tasksCreate}>Tarefas criadas</span>
        <span className={stylesApp.tasksCompleted}>Concluídas</span>
      </div>
    </div>
  );
}
