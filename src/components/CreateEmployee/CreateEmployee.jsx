import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../Input/Input';
import Select from '../Select/Select';
import DateTimePicker from '../DateTimePicker/DateTimePicker';
import { addEmployee } from '../../redux/employeeSlice';
import './CreateEmployee.css';

const CreateEmployee = () => {
  const dispatch = useDispatch();

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
    'Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas',
    'California', 'Colorado', 'Connecticut', 'Delaware', 'District Of Columbia',
    'Federated States Of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii',
    'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
    'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan',
    'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
    'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
    'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon',
    'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina',
    'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
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

    // Dispatch l'action pour ajouter un employé
    dispatch(addEmployee(newEmployee));

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
    <div className="container">
      <h2>Create Employee</h2>
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
