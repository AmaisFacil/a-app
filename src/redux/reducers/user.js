import { SET_USER, UPDATE_USER, DELETE_USER } from '../constants/actionTypes.js';

const initialState = {

};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...action.payload, 
      };
    case DELETE_USER:
      return {};
    case UPDATE_USER:
      return {
        ...state,
        ...action.payload, 
      };
    default:
      return state;
  }
};

export default userReducer;