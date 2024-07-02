import api from "../utils/api";

const getConfig = async (fileId) => {
  try {
    const response = await api.get('/admin/config');
    const data = response.data;
    return data;
  } catch (error) {
    return { error: error?.response?.data?.msg };
  }
};

export { getConfig };
