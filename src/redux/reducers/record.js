import { ADD_RECORD, REMOVE_RECORD, GET_RECORDS } from '../constants/actionTypes.js';

const initialState = [];

const recordReducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_RECORD:
            return state.filter(x => x.uri != action.payload.uri);
        case ADD_RECORD:
            return [...state, action.payload];
        case GET_RECORDS:
            return state;
        default:
            return state; 
    }
};

export default recordReducer;
