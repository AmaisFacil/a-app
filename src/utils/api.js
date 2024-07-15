import axios from "axios";
import storage from "./storage";

const api = axios.create({
  baseURL: true ? "https://api.agenciamaisfacil.com.br:9090/v2" : "http://192.168.1.23:7071/v2",
});
export const setAuthorizationToken = async (newToken) => {
  if (newToken) {
    api.defaults.headers["x-auth-token"] = newToken;
    await storage.set("token", newToken);
  } else {
    delete api.defaults.headers["x-auth-token"];
  }
};

api.interceptors.request.use(
  async (config) => {
    const token = await storage.get("token");
    if (token) {
      config.headers["x-auth-token"] = token.response || token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default api;
