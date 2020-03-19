import axios from "axios";

export const GET_DATA = "GET_DATA";
export const UPDATE_MISSIONS = "UPDATE_MISSIONS";
export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch => {
  dispatch({ type: GET_DATA });
  axios
    .get("https://api.spacexdata.com/v3/missions")
    .then(res => {
      console.log(res);
      dispatch({ type: UPDATE_MISSIONS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: SET_ERROR, payload: "error" });
    });
};
