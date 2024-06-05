import { SET_CLASS } from '../constants/actionTypes.js';

const initialState = {
  class: null
};

const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLASS:
      return {
        ...state,
        class: action.payload,
      };
    default:
      return state;
  }
};

export default classReducer;