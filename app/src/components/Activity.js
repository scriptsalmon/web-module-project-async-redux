import React from "react";
import { connect } from "react-redux";

import { getActivity } from "./../actions";

const Activity = ({ activity, isFetching, error, getActivity, handleFavsList }) => {
  if (error) {
    return <h2>We have a problem..!{error}</h2>;
  }

  const handleClick = () => {
    getActivity();
  };

  const handleFavorite = (e) => {
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
  };

  return (
      <>
      {!isFetching && (
        <div className="activityContainer">
          <div className="activityCard" onPointerDown={() => handleClick()}>
            {activity.activity && (
              <div className="activityItem">
                <h3>Activity</h3> <span>{activity.activity}</span>
              </div>
            )}
            {activity.type && (
              <div className="activityItem">
                <h3>Type</h3> <span>{activity.type}</span>
              </div>
            )}
            {activity.participants && (
              <div className="activityItem">
                <h3>Participants</h3> <span>{activity.participants}</span>
              </div>
            )}
          </div>

          <div
            className="tab favoriteButton"
            onPointerDown={() => handleFavorite()}
          >
            ⭐️
          </div>

          <div
            className="tab listButton"
            onPointerDown={() => handleFavsList()}
          >
            📖
          </div>
        </div>
      )}
      {isFetching && (
        <div className="activityContainer">
          <div className="activityCard">
            <span>...</span>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    activity: state.activity,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getActivity })(Activity);
