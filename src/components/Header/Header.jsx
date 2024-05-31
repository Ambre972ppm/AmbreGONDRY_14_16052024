import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <nav>
        <Link to="/">Create Employee</Link>
        <Link to="/employee-list">View Current Employees</Link>
      </nav>
    </header>
  );
};

export default Header;
