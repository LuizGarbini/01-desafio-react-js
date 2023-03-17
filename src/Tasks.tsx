import React from "react";
import ReactDOM from "react-dom/client";
import "./Tasks.css";

export function Tasks() {
  return (
    <div className="tasksTop">
      <span id="tasksCreate">Tarefas criadas</span>
      <span id="tasksCompleted">Concluídas</span>
    </div>
  );
}
