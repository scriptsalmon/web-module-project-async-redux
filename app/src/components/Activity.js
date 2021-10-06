import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { fetchStart, fetchSuccess } from './../actions';

const Activity = (props) => {
    const { activity, isFetching, error, fetchStart, fetchSuccess } = props;
    console.log("Activity props: ", props);

    if (error) {
        return <h2>We have a problem..!</h2>
    }

    if (isFetching) {
        return <h2>Welcome aboard the unbordiflyer.</h2>
    }

    const handleClick = () => {
        fetchStart();
        axios.get('https://www.boredapi.com/api/activity')
        .then(res => {
            console.log(res.data);
            fetchSuccess(res.data);
        })
        .catch(err => {
            console.error(err);
        })
        
    };

    return (
        <div className="Activity">
            <h2>Bored?</h2>
            
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
                {/* <p>Type: {activity.type}</p>
                <p>Participants: {activity.participants}</p>
                <p>Accessability: {activity.accessability}</p> */}
            </div>

            {/* <button onClick={() => handleClick()}>Yeah</button> */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        activity: state.activity,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchStart, fetchSuccess })(Activity);
