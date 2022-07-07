import React, { useState } from "react";
import "./App.css";
import Activity from "./components/Activity";
import Favorites from "./components/Favorites";

function App() {
  const [favs, setFavs] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const handleFavsList = () => {
    setShowFavorites(!showFavorites);
    if (
      localStorage.getItem("favoriteActivities") == null ||
      localStorage.favoriteActivities.length === "[]"
    ) {
      window.alert("favorites list is empty");
      return;
    }
    setFavs(JSON.parse(localStorage.getItem("favoriteActivities")));
  };

  return (
    <div className="App">
      <Activity handleFavsList={handleFavsList} />
      {showFavorites && (
        <Favorites favs={favs} handleFavsList={handleFavsList} />
      )}
    </div>
  );
}

export default App;
