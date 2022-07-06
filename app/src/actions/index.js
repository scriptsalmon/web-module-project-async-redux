import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getActivity = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get("http://www.boredapi.com/api/activity/")
      .then((res) => {
        dispatch(fetchSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchFail(err));
      });
  };
};

export const fetchStart = () => {
  return { type: FETCH_START };
};

export const fetchSuccess = (activity) => {
  return { type: FETCH_SUCCESS, payload: activity };
};

export const fetchFail = (error) => {
  return { type: FETCH_FAIL, payload: error };
};
