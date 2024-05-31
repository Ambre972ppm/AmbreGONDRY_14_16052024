import React from 'react';
import DateTimePicker from '@ambre972ppm/react-custom-datepicker';
import '@ambre972ppm/react-custom-datepicker/dist/DateTimePicker.css';

const CustomDateTimePicker = ({ label, selected, onChange, id, showTimeSelect = true, dateFormat = "MMMM d, yyyy h:mm aa" }) => {
  return (
    <div className="datetime-picker">
      <label htmlFor={id}>{label}</label>
      <DateTimePicker
        selected={selected}
        onChange={onChange}
        showTimeSelect={showTimeSelect}
        dateFormat={dateFormat}
        id={id}
        className="form-control"
      />
    </div>
  );
};

export default CustomDateTimePicker;
