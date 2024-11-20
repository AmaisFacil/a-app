import axios from "axios";

const getUserDeviceInfo = async () => {
  try {
    const response = await axios.get('https://ipinfo.io/191.185.155.252?token=f1ea05938dca1f'); 
    return response.data;
  } catch (error) {
    return { error: true };
  }
};


export default getUserDeviceInfo