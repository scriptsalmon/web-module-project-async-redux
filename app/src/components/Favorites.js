import React, { useState } from "react";

const Favorites = ({ favs }) => {
  const [selected, setSelected] = useState();

  const getClassName = (index) => {
    return (index = index === selected ? "selected" : "");
  };

  const markSelectedId = (index) => {
    selected === index ? setSelected(null) : setSelected(index);
  };

  const handleRemove = (index) => {
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
  };

  return (
    <div className="favoritesContainer">
      <ul className="favoritesList">
        {favs.map((activity, index) => {
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
                  onPointerDown={() => handleRemove(index)}
                >
                  𐄂
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
