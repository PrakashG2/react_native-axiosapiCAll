// api/apiCalls.js
import apiManager from './apiManager';

export const fetchUsers = async () => {
  try {
    const response = await apiManager.get('/users');
    return response.data;
  } catch (error) {
    throw error;
  }
};
