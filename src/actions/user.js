import { setUser, updateUser } from '../redux/actions/user';
import api, { setAuthorizationToken } from "../utils/api";

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

const updateProfile = async (dispatch) => {
  try {
    const response = await api.post('/users/update-user');
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

export { getUser, signIn, signUp };
