import { SET_MENU } from '../constants/actionTypes.js';

const initialState = {
  menu: null
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU:
      return {
        ...state,
        menu: action.payload,
      };
    default:
      return state;
  }
};

export default menuReducer;