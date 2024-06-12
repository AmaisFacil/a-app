import { setUser, updateUser, deleteUser } from '../redux/actions/user';
import api, { setAuthorizationToken } from "../utils/api";
import storage from '../utils/storage';

const getUser = async (dispatch) => {
  try {
    const response = await api.get('/auth/get-user');
    const data = response.data;
    dispatch(updateUser(data));

    return data;
  } catch (error) {
    return { error: error?.response?.data?.msg };
  }
};

const logout = async (dispatch) => {
  try {
    dispatch(deleteUser());
    storage.remove('token');
    setAuthorizationToken();
    return;
  } catch (error) {
    return { error: error?.response?.data?.msg };
  }
};

const getHistoric = async () => {
  try {
    const response = await api.get('/users/historic');
    const data = response.data;

    return data;
  } catch (error) {
    return { error: error?.response?.data?.msg };
  }
};

const updateProfile = async (dispatch, data) => {
  try {
    const response = await api.post('/users/update-user', data);
    const user = await getUser(dispatch);

    return user;
  } catch (error) {
    return { error: error?.response?.data?.msg };
  }
};

const signIn = async (dispatch, userData) => {
  try {
    const response = await api.post('/auth/get-token', userData);
    const data = response.data;

    await setAuthorizationToken(data.token)
    dispatch(setUser({ token: data.token }));
    const user = await getUser(dispatch);

    return user;
  } catch (error) {
    console.log(error.request)
    return { error: error?.response?.data?.msg };
  }
};

const signUp = async (dispatch, userData) => {
  try {
    const response = await api.post('/users/signup', userData);
    const data = response.data;

    await setAuthorizationToken(data.token)
    dispatch(setUser({ token: data.token }));
    const user = await getUser(dispatch);

    return user;
  } catch (error) {
    return { error: error?.response?.data?.msg };
  }
};

export { getUser, signIn, signUp, updateProfile, getHistoric, logout };
