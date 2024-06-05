import { SET_SAC } from '../constants/actionTypes.js';

export const setSac = (sacData) => ({
  type: SET_SAC,
  payload: sacData,
});