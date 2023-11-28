import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateSelectionScreen = () => {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [showFromDatePicker, setShowFromDatePicker] = useState(false);
  const [showToDatePicker, setShowToDatePicker] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.datePickerButton}
        onPress={() => setShowFromDatePicker(true)}
      >
        <Text>Select From Date</Text>
      </TouchableOpacity>
      {showFromDatePicker && (
        <DateTimePicker
          value={fromDate}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={(event, selectedDate) => {
            setShowFromDatePicker(Platform.OS === 'ios');
            setFromDate(selectedDate || fromDate);
          }}
        />
      )}

      <TouchableOpacity
        style={styles.datePickerButton}
        onPress={() => setShowToDatePicker(true)}
      >
        <Text>Select To Date</Text>
      </TouchableOpacity>
      {showToDatePicker && (
        <DateTimePicker
          value={toDate}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={(event, selectedDate) => {
            setShowToDatePicker(Platform.OS === 'ios');
            setToDate(selectedDate || toDate);
          }}
        />
      )}

      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>
          From: {fromDate.toDateString()}
        </Text>
        <Text style={styles.summaryText}>
          To: {toDate.toDateString()}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  datePickerButton: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  summaryContainer: {
    marginTop: 20,
  },
  summaryText: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default DateSelectionScreen;
