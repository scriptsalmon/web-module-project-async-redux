import { FETCH_START } from './../actions';
import { FETCH_SUCCESS } from './../actions';


export const initialState = { 
    activity: {
        activity: "",
        type: "",
        participants: null,
        accessability: null,
        key: 1333337,
    },
    favorite: false,
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_START:
            return {
                ...state,
                activity: {},
                isFetching: true,
                error: ''
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                activity: action.payload,
                isFetching: false,
                error: ''
            }
        default:
            return state;
    }
};