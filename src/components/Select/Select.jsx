import React from 'react';

const Select = ({ label, id, options, value, onChange }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <select id={id} value={value} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

export default Select;
