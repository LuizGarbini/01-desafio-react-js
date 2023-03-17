import { useState } from "react";
import "./App.css";
import img from "./logo.svg";
import { PlusCircle } from "@phosphor-icons/react";
import { Tasks } from "./Tasks";

import "./global.css";

export function App() {
  return (
    <div className="App">
      <header>
        <img src="../public/logo.svg" alt="" />
      </header>
      <div className="InputAndButton">
        <div className="InputSize">
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
    </div>
  );
}
