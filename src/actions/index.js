import api from "../utils/api";
import { setUser } from '../redux/actions/user';

const getUser = async (dispatch) => {
  try {
    const response = await api.get('user/get-user');
    const data = response.data?.user;

    dispatch(setUser(data));

    return data;
  } catch (error) {
    console.log(error);
    return { error: error?.response?.data };
  }
};

export { getUser };
