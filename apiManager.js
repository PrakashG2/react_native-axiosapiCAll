// api/apiManager.js
import axios from 'axios';

const apiManager = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiManager;
