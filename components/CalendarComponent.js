import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';

const CalendarComponent = ({ onDateSelected }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
    onDateSelected(day.dateString);
  };

  return (
    <Calendar
      onDayPress={handleDayPress}
      markedDates={{
        [selectedDate]: { selected: true, marked: true }
      }}
    />
  );
};

export default CalendarComponent;
