import { SET_WARN } from '../constants/actionTypes.js';

const initialState = {
  warn: null
};

const warnReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WARN:
      return {
        ...state,
        warn: action.payload,
      };
    default:
      return state;
  }
};

export default warnReducer;