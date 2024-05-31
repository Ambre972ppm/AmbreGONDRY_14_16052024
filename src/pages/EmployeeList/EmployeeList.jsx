import React from 'react';
import { useSelector } from 'react-redux';
import DataTable from '../../components/DataTable/DataTable';
import './EmployeeList.css';

const EmployeeList = () => {
  const employees = useSelector((state) => state.employees.employees);

  const columns = [
    { Header: 'First Name', accessor: 'firstName' },
    { Header: 'Last Name', accessor: 'lastName' },
    { Header: 'Start Date', accessor: 'startDate', Cell: ({ value }) => new Date(value).toLocaleDateString() },
    { Header: 'Department', accessor: 'department' },
    { Header: 'Date of Birth', accessor: 'dateOfBirth', Cell: ({ value }) => new Date(value).toLocaleDateString() },
    { Header: 'Street', accessor: 'street' },
    { Header: 'City', accessor: 'city' },
    { Header: 'State', accessor: 'state' },
    { Header: 'Zip Code', accessor: 'zipCode' },
  ];

  return (
    <div className="container">
      <h2 className="title">Current Employees</h2>
      <DataTable columns={columns} data={employees} />
      <a href="/">Home</a>
    </div>
  );
};

export default EmployeeList;
