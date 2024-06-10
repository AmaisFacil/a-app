import { setUser, updateUser } from '../redux/actions/user';
import api from "../utils/api";

const getUser = async (dispatch) => {
  try {
    const response = await api.get('user/get-user');
    const data = response.data?.user;

    dispatch(setUser(data));

    return data;
  } catch (error) {
    return { error: error?.response?.data?.msg };
  }
};

const signIn = async (dispatch, userData) => {
  try {
    const response = await api.post('/auth/get-token', userData);
    const data = response.data;

    dispatch(updateUser(data));

    return data;
  } catch (error) {
    return { error: error?.response?.data?.msg };
  }
};

const signUp = async (dispatch, userData) => {
  try {
    const response = await api.post('/users/signup', userData);
    const data = response.data;

    dispatch(updateUser(data));

    return data;
  } catch (error) {
    return { error: error?.response?.data?.msg };
  }
};

export { getUser, signIn, signUp };
