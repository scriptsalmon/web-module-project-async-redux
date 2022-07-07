import React from "react";
import { connect } from "react-redux";

import { getActivity } from "./../actions";
// import Emoji from "./Emoji";

const Activity = ({
  activity,
  isFetching,
  error,
  getActivity,
  handleFavsList,
}) => {
  // const [participants, setParticipants] = useState([]);
  const participants = [];

  if (error) {
    return <h2>We have a problem..!{error}</h2>;
  }

  const handleClick = () => {
    getActivity();
  };

  const createType = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const createParticipants = (num) => {
    let peeps = ["🧙‍♀️", "🧙‍♂️", "🧟‍♀️", "🧟", "🧝‍♀️", "🧝", "🦹‍♀️", "🦹‍♂️", "🧛‍♀️", "🧛"];
    for (let i = 0; i <= num; i++) {
      let random = Math.floor(Math.random() * peeps.length);
      participants.push(peeps[random]);
      // setParticipants([...participants, peeps[random]]);
    }
    return participants;
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
                <h3>Type</h3> <span>{createType(activity.type)}</span>
              </div>
            )}
            {activity.participants && (
              <div className="activityItem">
                <h3>Participants</h3>
                {/* {participants.map((peep) => {
                  console.log(peep);
                  return <Emoji symbol={peep} />;
                })} */}
                <span className="emoji">{createParticipants(activity.participants)}</span>
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
          <div className="tab favoriteButton"></div>
          <div className="tab listButton"></div>
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
