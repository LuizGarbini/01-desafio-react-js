import { useState } from "react";
import "./App.css";
import img from "./public/rocket.svg";

import "./global.css";

function App() {
  return (
    <div className="App">
      <div>
        <img src="../public/rocket.svg" alt="" />
        <h1>
          To <span style="color:{purple}">Do</span>
        </h1>
      </div>
    </div>
  );
}

export default App;
