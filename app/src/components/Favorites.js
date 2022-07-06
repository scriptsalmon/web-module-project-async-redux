import React from "react";

const Favorites = ({ favs }) => {
  const handleRemove = (index) => {
    // grabbing data from storage and storing in execution context
    let storedActivities = JSON.parse(
      localStorage.getItem("favoriteActivities")
    );
    // parsed & stored array will be mutated now, removing item by index
    storedActivities.splice(index, 1);

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
            <li className="favoritesListItem" key={index}>
              <p>{activity}</p>
              <div
                className="removeButton"
                onPointerDown={() => handleRemove(index)}
              >
                𐄂
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Favorites;
