import React, { useState } from "react";

const Favorites = ({ favs, handleRemoveFavorite }) => {
  const [selected, setSelected] = useState();

  const getClassName = (index) => {
    return (index = index === selected ? "selected" : "");
  };

  const markSelectedId = (index) => {
    selected === index ? setSelected(null) : setSelected(index);
  };

  return (
    <div className="favoritesContainer">
      <ul className="favoritesList">
        {favs
          .filter((item) => item)
          .map((activity, index) => {
            return (
              <li
                key={index}
                className={`favoritesListItem ${getClassName(index)}`}
                onPointerEnter={() => markSelectedId(index)}
                onPointerLeave={() => markSelectedId(index)}
              >
                <p>{activity}</p>
                {selected === index && (
                  <div
                    className="tab actionButton"
                    onPointerDown={() => handleRemoveFavorite(index)}
                  >
                    x
                  </div>
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Favorites;
