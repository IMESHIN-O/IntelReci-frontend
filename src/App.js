import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import InventoryManagement from './components/InventoryManagement';
import ShoppingListManagement from './components/ShoppingListManagement';
import Login from './components/Login';
import Register from './components/Register'; // Ensure you have the Register component

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (token) => {
    // Store token or login information to local storage
    localStorage.setItem('authToken', token);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div>
        <h1>Inventory Management System</h1>
        {!isAuthenticated ? (
          <>
            <Routes>
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Login onLogin={handleLogin} />} /> 
            </Routes>
          </>
        ) : (
          <>
            <nav>
              <ul>
                <li><Link to="/inventory">Inventory Management</Link></li>
                <li><Link to="/shopping-list">Shopping List Management</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
              </ul>
            </nav>
            <Routes>
              <Route path="/inventory" element={<InventoryManagement />} />
              <Route path="/shopping-list" element={<ShoppingListManagement />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
