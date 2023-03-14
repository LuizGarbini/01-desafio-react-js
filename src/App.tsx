import { useState } from "react";
import "./App.css";
import img from "./logo.svg";

import "./global.css";

export function App() {
  return (
    <div className="App">
      <div>
        <img src="../public/logo.svg" alt="" />
      </div>
      <div className="InputBackground">
        <input type="text" />
        <button> Criar </button>
      </div>
    </div>
  );
}
