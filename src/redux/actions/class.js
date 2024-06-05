import { SET_CLASS } from '../constants/actionTypes.js';

export const setClass = (classData) => ({
  type: SET_CLASS,
  payload: classData,
});
