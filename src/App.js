// src/App.js
import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import AddMobile from './components/AddMobile';
import EditMobile from './components/EditMobile';
import SellMobile from './components/SellMobile';
const App = () => {
  return (
    <BrowserRouter >
      {/* <div>
        <h1 >Dashboard</h1>
      </div> */}
      <Routes>
      <Route path="/" element={<LoginForm/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/add-new-mobile" element={<AddMobile/>} /> 
      <Route path="/EditMobile" element={<EditMobile/>} />
      <Route path="/SellMobile" element={<SellMobile/>} />
      </Routes>
      
      {/* Add other routes as needed */}
    </BrowserRouter>
  );
};

export default App;
