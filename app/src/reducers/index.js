import { FETCH_START } from "./../actions";
import { FETCH_SUCCESS } from "./../actions";
import { FETCH_FAIL } from "./../actions";

export const initialState = {
  title: "Bored?",
  activity: {
    activity: "",
    type: "",
    participants: null,
    accessability: null,
    key: 1133377,
  },
  favorite: false,
  isFetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        activity: {},
        isFetching: true,
        error: "",
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        title: "Here!",
        activity: action.payload,
        isFetching: false,
        error: "",
      };
    case FETCH_FAIL:
      return {
        ...state,
        title: "",
        activity: {},
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
