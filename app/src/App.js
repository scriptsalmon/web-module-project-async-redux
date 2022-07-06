import React from "react";
import "./App.css";
import Activity from "./components/Activity";
import Favorites from "./components/Favorites";

function App() {
  return (
    <div className="App">
      <Activity />
      <Favorites />
    </div>
  );
}

export default App;
