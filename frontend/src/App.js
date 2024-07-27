import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BusinessDashboard from './pages/BusinessDashboard';
import CustomerChat from './pages/CustomerChat';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/business-dashboard" element={<BusinessDashboard />} />
          <Route path="/customer-chat" element={<CustomerChat />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
