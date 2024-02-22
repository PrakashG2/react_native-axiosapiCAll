// components/CommonComponent.js
import React from 'react';
import { View, Text } from 'react-native';

const CommonComponent = ({ text }) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

export default CommonComponent;
