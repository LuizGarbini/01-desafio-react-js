import React from "react";
import ReactDOM from "react-dom/client";
import "./Tasks.css";

export function Tasks() {
  return (
    <div className="tasksEmpty">
      <div className="task-top-center">
        <span id="tasksCreate">Tarefas criadas</span>
        <span id="tasksCompleted">Concluídas</span>
      </div>
    </div>
  );
}
