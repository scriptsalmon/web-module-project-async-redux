import React, { useEffect } from 'react';
import axios from 'axios';

const Activity = () => {

    useEffect(()=> {
        axios.get('https://www.boredapi.com/api/activity')
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.error(err);
            })
    },[])

    return (
        <div>
            <h2>Bored?</h2>
            <button>Yeah</button>
        </div>
    )
}

export default Activity
