import axios from 'axios';

import storage from './storage';

const api = axios.create({
    baseURL:'https://api.agenciamaisfacil.com.br:9090/v2'
 })
 
 api.interceptors.request.use(async (config) => {
 
  const token =  await storage.get('token')
  
  config.headers = {
    'authorization': token.response || token
  }

  return config
 })
 
 export default api;