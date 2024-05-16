import React, { useState } from 'react';
import Input from '../Input/Input.jsx';
import Select from '../Select/Select.jsx';

const CreateEmployee = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to save employee
    alert('Employee Created!');
  };

  return (
    <div className="container">
      <a href="/employee-list">View Current Employees</a>
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit}>
        <Input label="First Name" id="firstName" value={formData.firstName} onChange={handleChange} />
        <Input label="Last Name" id="lastName" value={formData.lastName} onChange={handleChange} />
        <Input label="Date of Birth" type="date" id="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
        <Input label="Start Date" type="date" id="startDate" value={formData.startDate} onChange={handleChange} />

        <fieldset className="address">
          <legend>Address</legend>
          <Input label="Street" id="street" value={formData.street} onChange={handleChange} />
          <Input label="City" id="city" value={formData.city} onChange={handleChange} />
          <Select
            label="State"
            id="state"
            options={['State1', 'State2', 'State3']}
            value={formData.state}
            onChange={handleChange}
          />
          <Input label="Zip Code" type="number" id="zipCode" value={formData.zipCode} onChange={handleChange} />
        </fieldset>

        <Select
          label="Department"
          id="department"
          options={['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal']}
          value={formData.department}
          onChange={handleChange}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default CreateEmployee;
