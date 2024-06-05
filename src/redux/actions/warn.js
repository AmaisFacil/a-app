import { SET_WARN } from '../constants/actionTypes.js';

export const setWarn = (warnData) => ({
  type: SET_WARN,
  payload: warnData,
});