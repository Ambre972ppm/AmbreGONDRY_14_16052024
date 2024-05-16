import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateEmployee from './components/CreateEmployee/CreateEmployee';
import EmployeeList from './components/EmployeeList/EmployeeList';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <h1>HRnet</h1>
      </header>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employee-list" element={<EmployeeList />} />
      </Routes>
    </div>
  </Router>
);

export default App;
