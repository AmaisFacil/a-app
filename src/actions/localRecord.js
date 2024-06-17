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
    dispatch(removeLocalRecord(uri))
  } catch (error) {
    return { error: error?.response?.data?.msg };
  }
};
const addLocalRecord = async (dispatch, record) => {
  try {
    dispatch(addLocalRecord(record))
  } catch (error) {
    return { error: error?.response?.data?.msg };
  }
};


export { getLocalRecords, addLocalRecord, removeLocalRecord };