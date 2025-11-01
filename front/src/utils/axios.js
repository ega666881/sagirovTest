import axios from 'axios';
import { backendIp } from './request';

const axiosInstance = axios.create({
  baseURL: `${backendIp}/api`,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  },
});


export default axiosInstance;
