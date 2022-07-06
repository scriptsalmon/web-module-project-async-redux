import React from "react";
import { connect } from "react-redux";

import { getActivity } from "./../actions";

const Activity = ({ title, activity, isFetching, error, getActivity }) => {
  if (error) {
    return <h2>We have a problem..!{error}</h2>;
  }

  if (isFetching) {
    return <h2>Hmmmm...</h2>;
  }

  const handleClick = () => {
    getActivity();
  };

  const handleFavorite = (e) => {
    // ☆ ★
    if (localStorage.getItem("favoriteActivities") == null) {
      localStorage.setItem("favoriteActivities", "[]");
    }

    let storedActivities = JSON.parse(localStorage.getItem("favoriteActivities"));
    storedActivities.push(activity.activity)

    localStorage.setItem('favoriteActivities', JSON.stringify(storedActivities));
  };

  return (
    <div className="Activity">
      <h2>{title}</h2>

      <div className="activityCard" onPointerDown={() => handleClick()}>
        {activity.activity && <p>Activity: {activity.activity}</p>}
        {activity.type && <p>Type: {activity.type}</p>}
        {activity.participants && <p>Participants: {activity.participants}</p>}
      </div>
      <div className="favoriteButton" onPointerDown={() => handleFavorite()}>
        favorite
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    title: state.title,
    activity: state.activity,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getActivity })(Activity);
