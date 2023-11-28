
import React, { useState } from 'react';
import { View, Button, Modal, TextInput, StyleSheet } from 'react-native';
import CalendarComponent from '../components/CalendarComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');


  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskColor, setTaskColor] = useState('orange'); 
  const [taskStartDate, setTaskStartDate] = useState('');
  const [taskEndDate, setTaskEndDate] = useState('');

  const saveTask = async () => {
    const taskData = {
      title: taskTitle,
      description: taskDescription,
      startDate: taskStartDate,
      endDate: taskEndDate,
      color: taskColor,
    };
    await AsyncStorage.setItem(`task_${selectedDate}`, JSON.stringify(taskData));
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <CalendarComponent onDateSelected={(date) => setSelectedDate(date)} />

      <View style={styles.buttonContainer}>
        <Button title="Add Task" onPress={() => setModalVisible(true)} />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        {/* Modal content for adding a task */}
        <View style={styles.modalView}>
          <TextInput
            placeholder="Task Title"
            onChangeText={setTaskTitle}
            value={taskTitle}
          />
          <TextInput
            placeholder="Task Description"
            onChangeText={setTaskDescription}
            value={taskDescription}
          />
          <TextInput
            placeholder="Start Date"
            onChangeText={setTaskStartDate}
            value={taskStartDate}
          />
          <TextInput
            placeholder="End Date"
            onChangeText={setTaskEndDate}
            value={taskEndDate}
          />
          {/* Add color selection logic */}
          <Button title="Save Task" onPress={saveTask} />
        </View>
      </Modal>
    </View>
  );
};

HomeScreen.options = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  calendar: {
    flex: 1,
  },
  buttonContainer: {
    padding: 16,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
});

export default HomeScreen;
