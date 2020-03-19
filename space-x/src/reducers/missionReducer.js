import { GET_DATA, UPDATE_MISSIONS, SET_ERROR } from "../actions";

export const initialState = {
  missions: [],
  isFetchingData: false,
  error: ""
};

export const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        isFetchingData: true,
        mission: []
      };
    case UPDATE_MISSIONS:
      return {
        ...state,
        missions: action.payload,
        isFetchingData: false
      };
    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload
      };
    default:
      return state;
  }
};
