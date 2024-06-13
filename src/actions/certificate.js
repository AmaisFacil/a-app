import api from "../utils/api";

const getCertificates = async () => {
  try {
    const response = await api.get('/record/records');
    const data = response.data;
    return data;
  } catch (error) {
    return { error: error?.response?.data?.msg };
  }
};
const getDocument = async (fileId) => {
  try {
    const response = await api.get('/record/document/' +  fileId);
    const data = response.data;
    return data;
  } catch (error) {
    return { error: error?.response?.data?.msg };
  }
};

export { getCertificates, getDocument };
