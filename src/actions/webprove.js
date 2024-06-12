import api from "../utils/api";

const getWebproves = async () => {
  try {
    const response =  await api.get('/webprove/webproves');
    const data = response.data;
    return data;
  } catch (error) {
    return { error: error?.response?.data?.msg };
  }
};
const getDocument = async (fileId) => {
  try {
    const response = await api.get('/webprove/document/' + fileId);
    const data = response.data;
    return data;
  } catch (error) {
    return { error: error?.response?.data?.msg };
  }
};

export { getWebproves, getDocument };
