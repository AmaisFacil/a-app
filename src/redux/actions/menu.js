import { SET_MENU } from '../constants/actionTypes.js';

export const setMenu = (menuData) => ({
  type: SET_MENU,
  payload: menuData,
});