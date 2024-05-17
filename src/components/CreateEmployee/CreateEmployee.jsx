import React, { useState } from 'react';
import Input from '../Input/Input';
import Select from '../Select/Select';
import DateTimePicker from '../DateTimePicker/DateTimePicker';

const CreateEmployee = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [department, setDepartment] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const departments = [
    'Sales',
    'Marketing',
    'Engineering',
    'Human Resources',
    'Legal'
  ];

  const states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 
    'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia'
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEmployee = {
      firstName,
      lastName,
      startDate,
      department,
      dateOfBirth,
      street,
      city,
      state,
      zipCode
    };

    // Sauvegarder les informations de l'employé dans le stockage local
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(newEmployee);
    localStorage.setItem('employees', JSON.stringify(employees));

    // Réinitialiser les champs du formulaire
    setFirstName('');
    setLastName('');
    setStartDate(new Date());
    setDepartment('');
    setDateOfBirth(new Date());
    setStreet('');
    setCity('');
    setState('');
    setZipCode('');
  };

  return (
    <div>
      <h1>Create Employee</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          id="firstName"
        />
        <Input
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          id="lastName"
        />
        <DateTimePicker
          label="Date of Birth"
          selected={dateOfBirth}
          onChange={(date) => setDateOfBirth(date)}
          id="dateOfBirth"
          showTimeSelect={false}
          dateFormat="MMMM d, yyyy"
        />
        <DateTimePicker
          label="Start Date"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          id="startDate"
          showTimeSelect={false}
          dateFormat="MMMM d, yyyy"
        />
        <Select
          label="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          options={departments}
          id="department"
        />
        <Input
          label="Street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          id="street"
        />
        <Input
          label="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          id="city"
        />
        <Select
          label="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
          options={states}
          id="state"
        />
        <Input
          label="Zip Code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          id="zipCode"
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default CreateEmployee;
