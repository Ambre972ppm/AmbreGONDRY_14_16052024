import React from 'react';

const Input = ({ label, type = "text", id, value, onChange }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input type={type} id={id} value={value} onChange={onChange} />
  </div>
);

export default Input;
