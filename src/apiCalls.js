import apiManager from './apiManager';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = async () => {
  try {
    console.log('fetch users api');

    // Use the centralized `apiManager` for consistency and potential API configuration
    const response = await fetch(USERS_URL);

    // Check if the request was successful (status code in the range 200-299)
    if (!response.ok) {
      throw new Error(`Failed to fetch users. Status: ${response.status}`);
    }

    // Parse the JSON response
    const users = await response.json();

    // Handle response data gracefully (e.g., check for errors, extract relevant data)
    if (!users || !users.length) {
      throw new Error('No users found in the API response.');
    }

    users.forEach((user) => {
      console.log(user);
    });

    return users;
  } catch (error) {
    // Log error details for debugging and consider informing the user
    console.error('Error fetching users:', error.message);
    throw error; // Re-throw to propagate the error
  }
};
