import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DataTable from '../../components/DataTable/DataTable';
import './EmployeeList.css';

const EmployeeList = () => {
  const employees = useSelector((state) => state.employees.employees);
  const [searchTerm, setSearchTerm] = useState('');

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

  const filteredEmployees = employees.filter((employee) =>
    employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase()) || 
    employee.city.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  return (
    <div className="container">
      <h2 className="title">Current Employees</h2>
      <input
        type="text"
        placeholder="Search employees"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <DataTable data={filteredEmployees} columns={columns} />
      <a href="/">Home</a>
    </div>
  );
};

export default EmployeeList;
