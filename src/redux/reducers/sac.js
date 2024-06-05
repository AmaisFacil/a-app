import { SET_SAC } from '../constants/actionTypes.js';

const initialState = {
  sac: null
};

const sacReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SAC:
      return {
        ...state,
        sac: action.payload,
      };
    default:
      return state;
  }
};

export default sacReducer;