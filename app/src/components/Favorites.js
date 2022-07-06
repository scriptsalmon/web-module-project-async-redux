import React, { useState } from "react";

const Favorites = () => {
  const [favs, setFavs] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const handleShowModule = () => {
    setShowFavorites(!showFavorites);
    setFavs(JSON.parse(localStorage.getItem("favoriteActivities")));
  };

  return (
    <div className="Favorites">
      <div
        className="favoritesListToggle"
        onPointerDown={() => handleShowModule()}
      >
        ⭐️
      </div>
      {showFavorites && (
        <ul className="favoritesList">
          {favs.map((activity, index) => {
            return (
              <li className="favoritesListItem" key={index}>
                <p>{activity}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
