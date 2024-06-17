import { ADD_RECORD, REMOVE_RECORD, GET_RECORDS } from '../constants/actionTypes.js.js';

export const addRecord = (recordData) => ({
  type: ADD_RECORD,
  payload: recordData,
});

export const removeRecord = (uri) => ({
  type: REMOVE_RECORD,
  payload: {uri},
});
export const getRecords = () => ({
  type: GET_RECORDS,
  payload: null,
});
