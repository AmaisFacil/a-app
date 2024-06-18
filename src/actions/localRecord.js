import { removeRecord, getRecords, addRecord } from '../redux/actions/record';

const getLocalRecords = async () => {
  try {
    return getRecords();
  } catch (error) {
    return { error: error?.response?.data?.msg };
  }
};

const removeLocalRecord = async (dispatch, uri) => {
  try {
    dispatch(removeRecord(uri))
  } catch (error) {
    return { error: error?.response?.data?.msg };
  }
};
const addLocalRecord = async (dispatch, record) => {
  try {
    dispatch(addRecord(record))
  } catch (error) {
    return { error: error?.response?.data?.msg };
  }
};


export  { getLocalRecords, addLocalRecord, removeLocalRecord };