// api/apiManager.js
import axios from 'axios';
import { logMessage, logError } from './logger';

const apiManager = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
apiManager.interceptors.request.use(
  (config) => {
    logMessage(`[API Request] ${config.method.toUpperCase()} - ${config.url}`);
    return config;
  },
  (error) => {
    logError(`[API Request Error] ${error.message}`);
    return Promise.reject(error);
  }
);

// Response Interceptor
apiManager.interceptors.response.use(
  (response) => {
    logMessage(`[API Response] ${response.config.method.toUpperCase()} - ${response.config.url}`);
    return response;
  },
  (error) => {
    logError(`[API Response Error] ${error.message}`);
    return Promise.reject(error);
  }
);

export default apiManager;
