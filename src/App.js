import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import InventoryManagement from './components/InventoryManagement';
import ShoppingListManagement from './components/ShoppingListManagement';
import BMRCalculator from './components/BMRCalculator'; // Import the BMR component
import Login from './components/Login';
import Register from './components/Register'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (token) => {
    localStorage.setItem('authToken', token);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="d-flex">
        {isAuthenticated ? (
          <>
            <div className="bg-light border-right" id="sidebar-wrapper">
              <div className="sidebar-heading">Inventory Management System</div>
              <div className="list-group list-group-flush">
                <Link to="/inventory" className="list-group-item list-group-item-action bg-light">Inventory Management</Link>
                <Link to="/shopping-list" className="list-group-item list-group-item-action bg-light">Shopping List Management</Link>
                <Link to="/bmr-calculator" className="list-group-item list-group-item-action bg-light">BMR Calculator</Link> {/* Add BMR link */}
                <button className="list-group-item list-group-item-action bg-light" onClick={handleLogout}>Logout</button>
              </div>
            </div>

            <div id="page-content-wrapper" className="p-4">
              <Routes>
                <Route path="/inventory" element={<InventoryManagement />} />
                <Route path="/shopping-list" element={<ShoppingListManagement />} />
                <Route path="/bmr-calculator" element={<BMRCalculator />} /> {/* Add BMR route */}
              </Routes>
            </div>
          </>
        ) : (
          <div className="container mt-4">
            <h1>Welcome to Inventory Management System</h1>
            <Routes>
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Login onLogin={handleLogin} />} />
            </Routes>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
