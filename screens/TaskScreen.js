import React from 'react';
import { View, Text } from 'react-native';

const TaskScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tasks</Text>
    </View>
  );
};


TaskScreen.options = {
    headerShown: false,
  };
  
export default TaskScreen;
