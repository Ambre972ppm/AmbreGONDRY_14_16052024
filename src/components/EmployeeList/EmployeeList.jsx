import React, { useState, useEffect } from 'react';
import DataTable from '../DataTable/DataTable.jsx';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  const columns = [
    { title: 'First Name', data: 'firstName' },
    { title: 'Last Name', data: 'lastName' },
    { title: 'Start Date', data: 'startDate' },
    { title: 'Department', data: 'department' },
    { title: 'Date of Birth', data: 'dateOfBirth' },
    { title: 'Street', data: 'street' },
    { title: 'City', data: 'city' },
    { title: 'State', data: 'state' },
    { title: 'Zip Code', data: 'zipCode' },
  ];

  const filteredEmployees = employees.filter(employee =>
    employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Current Employees</h2>
      <input
        type="text"
        placeholder="Search employees"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <DataTable data={filteredEmployees} columns={columns} />
      <a href="/">Home</a>
    </div>
  );
};

export default EmployeeList;
