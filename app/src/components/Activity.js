import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const Activity = (props) => {
    const { activity, isFetching, error } = props;
    console.log("Activity props: ", props);
    // useEffect(()=> {
    //     axios.get('https://www.boredapi.com/api/activity')
    //         .then(res => {
    //             console.log(res.data);
    //         })
    //         .catch(err => {
    //             console.error(err);
    //         })
    // },[])

    const handleClick = () => {
        axios.get('https://www.boredapi.com/api/activity')
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.error(err);
        })
    }
    return (
        <div className="Activity">
            <h2>Bored?</h2>
            
            <div className="activity-card">
                {/* <img src="#" alt="catimg" /> */}
                <p>Activity: {activity.activity}</p>
                <p>Type: {activity.type}</p>
            </div>

            <button onClick={() => handleClick()}>Yeah</button>
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

export default connect(mapStateToProps)(Activity);
