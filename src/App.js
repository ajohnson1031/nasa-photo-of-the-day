import React from "react";
import Picture from "./components/Picture";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>NASA Photo of the Day</h1>
      <div className="main-container">
        <Picture />
      </div>
    </div>
  );
}

export default App;
