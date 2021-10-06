import { FETCH_START } from './../actions';


export const initialState = { 
    activity: "Make an app",
    favorite: false
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_START:
            return {
                ...state,
                activity: action.payload
            };
        default:
            return state;
    }
};