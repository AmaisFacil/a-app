import { SET_USER } from '../constants/actionTypes.js';

export const setUser = (userData) => ({
  type: SET_USER,
  payload: userData,
});
