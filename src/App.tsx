import { useState } from "react";
import img from "./logo.svg";
import { PlusCircle } from "@phosphor-icons/react";
import { Tasks } from "./components/Tasks";
import { Comment } from "./components/Comment";

import "./global.css";
import stylesTasks from "./components/Tasks.module.css";
import stylesApp from "./App.module.css";

const comments = [1, 2, 3];

export function App() {
  return (
    <div>
      <header className={stylesApp.header}>
        <img src="../public/logo.svg" alt="" />
      </header>
      <div className={stylesApp.inputAndButton}>
        <div className={stylesApp.inputSize}>
          <input type="text" placeholder="Adicione um nova tarefa" />
          <button>
            {" "}
            Criar <PlusCircle size={22} />{" "}
          </button>
        </div>
      </div>
      <div>
        <Tasks />
      </div>
      <div>
        {comments.map((comment) => {
          return <Comment />;
        })}
      </div>
    </div>
  );
}
