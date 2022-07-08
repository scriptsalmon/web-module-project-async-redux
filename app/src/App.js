import React, { useState } from "react";
import { connect } from "react-redux";

import "./App.css";
import Activity from "./components/Activity";
import Favorites from "./components/Favorites";

function App({activity}) {
  const [favs, setFavs] = useState([]);
  const [favsModule, setFavsModule] = useState(false);

  const handleFavsModule = () => {
    setFavsModule(!favsModule);
    if (localStorage.getItem("favoriteActivities") == null) {
      window.alert("favorites list is empty");
      return;
    }
    setFavs(JSON.parse(localStorage.getItem("favoriteActivities")));
  };

  const handleAddFavorite = (e) => {
    if (localStorage.getItem("favoriteActivities") == null) {
      localStorage.setItem("favoriteActivities", "[]");
    }

    let storedActivities = JSON.parse(
      localStorage.getItem("favoriteActivities")
    );
    storedActivities.push(activity.activity);

    localStorage.setItem(
      "favoriteActivities",
      JSON.stringify(storedActivities)
    );
    setFavs(JSON.parse(localStorage.getItem("favoriteActivities")));
  };

  const handleRemoveFavorite = (index) => {
    // grabbing data from storage and storing in execution context
    let storedActivities = JSON.parse(
      localStorage.getItem("favoriteActivities")
    );
    // parsed & stored array will be mutated now, removing item by index
    storedActivities.splice(index, 1);
    // re-set item to local storage
    localStorage.setItem(
      "favoriteActivities",
      JSON.stringify(storedActivities)
    );
    setFavs(JSON.parse(localStorage.getItem("favoriteActivities")));
  };

  return (
    <div className="App">
      <Activity handleFavsModule={handleFavsModule} handleAddFavorite={handleAddFavorite}/>
      {favsModule && (
        <Favorites favs={favs} handleRemoveFavorite={handleRemoveFavorite}  />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    activity: state.activity,
  };
};

export default connect(mapStateToProps)(App);
