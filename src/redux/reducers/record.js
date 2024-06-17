import { ADD_RECORD, REMOVE_RECORD, GET_RECORDS } from '../constants/actionTypes.js.js';

const initialState = {
  records: []
};

const recordReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_RECORD:
      return {records: state.records.filter(x => x != action.payload.uri)};
    case ADD_RECORD:
      return { records: [...state.records, action.payload]};
    case GET_RECORDS:
      return state.records;
  }
};

export default recordReducer;