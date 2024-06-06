import { SET_USER, DELETE_USER, UPDATE_USER } from '../constants/actionTypes.js';

export const setUser = (userData) => ({
  type: SET_USER,
  payload: userData,
});

export const deleteUser = () => ({
  type: DELETE_USER,
  payload: null,
});
export const updateUser = (userData) => ({
  type: UPDATE_USER,
  payload: userData,
});
