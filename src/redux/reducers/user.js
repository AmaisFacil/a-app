import { SET_USER } from '../constants/actionTypes.js';

const initialState = {

};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...action.payload, 
      };
    default:
      return state;
  }
};

export default userReducer;
