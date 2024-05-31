import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import CreateEmployee from './pages/CreateEmployee/CreateEmployee.jsx';
import EmployeeList from './pages/EmployeeList/EmployeeList.jsx';
import Header from './components/Header/Header';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="App">
          <Routes>
            <Route path="/" element={<CreateEmployee />} />
            <Route path="/employee-list" element={<EmployeeList />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
