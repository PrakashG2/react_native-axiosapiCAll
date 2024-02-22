// screens/HomeScreen.js
import React, { useEffect } from 'react';
import { View, Text, Button } from "react-native";
import { fetchUsers } from './apiCalls';
import { processData } from './businessLogic';
import { logMessage, logError } from './logger';
import CommonComponent from './commonComponent';

const HomeScreen = () => {

  const makeAPICall = async () => {
    try {
      console.log("hi");
      // API endpoint URL
      const apiUrl = 'https://jsonplaceholder.typicode.com/users';

      // Optional: Headers for the request (e.g., if you need to include an API key)
      const headers = {
        'Content-Type': 'application/json',
        // Add any other headers as needed
      };

      // Optional: Request body if your API call requires it
      const requestBody = {
        // Add your request parameters here
      };

      // Make the API call using fetch
      const response = await fetch(apiUrl, {
        method: 'POST', // or 'GET' or any other HTTP method
        headers: headers,
        body: JSON.stringify(requestBody), // Convert the request body to JSON if needed
      });

      // Parse the response as JSON
      const data = await response.json();

      // Debug statements
      console.log('API Response:', data);

      // You can now use the 'data' variable to update your component state or perform other actions.
    } catch (error) {
      console.error('Error making API call:', error);
      // Handle errors appropriately (e.g., show an error message to the user)
    }
  };



  const handleApiCall = async () => {
    try {
      const users = await fetchUsers();
      logMessage('Users fetched successfully');

      const processedUsers = processData(users);
      logMessage('Users fetched and processed successfully');
      console.log('Processed Users:', processedUsers);
    } catch (error) {
      logError(error);
    }
  };

  useEffect(() => {
    // Optionally perform any initial setup or fetch data on screen load
  }, []);

  return (
    <View>
      <Text>Home Screen</Text>
      <CommonComponent text="Hello from Common Component!" />
      <Button title="Make API Call" onPress={makeAPICall} />
    </View>
  );
};

export default HomeScreen;
