import React from 'react';
import { connect } from 'react-redux';

import { getActivity } from './../actions';

const Activity = (props) => {
    const { title, activity, isFetching, error, getActivity } = props;
    console.log("Activity props: ", props);

    if (error) {
        return <h2>We have a problem..!{error}</h2>
    }

    if (isFetching) {
        return <h2>Hmmmm...</h2>
    }

    const handleClick = () => {
        getActivity();
    };

    return (
        <div className="Activity">
            <h2>{title}</h2>
            
            <div className="activity-card" onClick={() => handleClick()}>
                {/* <img src="#" alt="catimg" /> */}
                {
                   activity.activity && <p>Activity: {activity.activity}</p>
                }
                {
                    activity.type && <p>Type: {activity.type}</p>
                }
                {
                    activity.participants && <p>Participants: {activity.participants}</p>
                }
                {
                    activity.accessability && <p>Accessability: {activity.accessability}</p>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        title: state.title,
        activity: state.activity,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { getActivity })(Activity);
