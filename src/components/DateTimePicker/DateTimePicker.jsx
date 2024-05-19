import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateTimePicker.css';


const DateTimePicker = ({ label, selected, onChange, id, showTimeSelect = true, dateFormat = "MMMM d, yyyy h:mm aa" }) => {
  return (
    <div className="datetime-picker">
      <label htmlFor={id}>{label}</label>
      <ReactDatePicker
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

export default DateTimePicker;
