import { useState, useEffect } from "react";
import img from "./logo.svg";
import { PlusCircle } from "@phosphor-icons/react";
import { Tasks } from "./components/Tasks";
import { Task } from "./components/Task";

import "./global.css";
import stylesTasks from "./components/Tasks.module.css";
import stylesApp from "./App.module.css";

const comments = [1, 2, 3];

export type Task = {
  id: number;
  title: string;
  isCompleted: boolean;
};

type Tasks = Array<Task>;

export function App() {
  const [tasks, setTasks] = useState<Tasks | null>(null);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  function handleAddTask() {
    if (!newTaskTitle) return;

    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      isCompleted: false,
    };

    setTasks(tasks ? [...tasks, newTask] : [newTask]);
    setNewTaskTitle("");
  }

  function handleToggleTaskStatus(id: number) {
    setTasks((prevTasks) =>
      prevTasks!.map((task) => {
        return {
          ...task,
          isCompleted: task.id === id ? !task.isCompleted : task.isCompleted,
        };
      })
    );
  }

  function handleRemoveTask(id: number) {
    setTasks((prevTasks) => prevTasks!.filter((task) => task.id !== id));
  }

  useEffect(() => {
    console.log({ tasks });
  }, [tasks]);

  return (
    <div className={stylesApp.content}>
      <header className={stylesApp.header}>
        <img src="../public/logo.svg" alt="" />
      </header>
      <div className={stylesApp.inputAndButton}>
        <div className={stylesApp.inputSize}>
          <input
            onChange={(event) => setNewTaskTitle(event.target.value)}
            value={newTaskTitle}
            type="text"
            placeholder="Adicione uma nova tarefa"
          />
          <button onClick={handleAddTask}>
            {" "}
            Criar <PlusCircle size={22} />{" "}
          </button>
        </div>
      </div>
      <div>
        <Tasks />
      </div>
      <div>
        {tasks?.map((task) => {
          return (
            <Task
              task={task}
              handleToggleTaskStatus={handleToggleTaskStatus}
              handleRemoveTask={handleRemoveTask}
              key={task.title}
            />
          );
        })}
      </div>
    </div>
  );
}
