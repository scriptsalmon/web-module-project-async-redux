import React, { useState } from "react";

const initialFavs = [
  {
    accessibility: 0.3,
    activity: "Bake pastries for you and your neighbor",
    key: "8125168",
    link: "",
    participants: 1,
    price: 0.4,
    type: "cooking",
  },
  {
    accessibility: 0.2,
    activity: "Make bread from scratch",
    key: "4809815",
    link: "",
    participants: 1,
    price: 0.2,
    type: "cooking",
  },
];

const Favorites = () => {
  const [favs, setFavs] = useState(initialFavs);

  return (
    <div className="Favorites">
      <div>⭐️</div>
      <ul className="favoritesList">
        {favs.map((activity) => {
          return (
            <li>
              <p>Activity: {activity.activity}</p>
              <p>Type: {activity.type}</p>
              <p>Participants: {activity.participants}</p>
              <p>Accessability: {activity.accessability}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Favorites;
