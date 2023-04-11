import { useState } from "react";
import Card from "./components/card";
// Scss.js
import React from "react";
import "./App.scss";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;
