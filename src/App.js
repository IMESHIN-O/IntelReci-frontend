import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserManagement from './components/UserManagement';
import InventoryManagement from './components/InventoryManagement';
import ShoppingListManagement from './components/ShoppingListManagement';
import Login from './components/Login';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (token) => {
    // 存储 token 或其他登录信息到本地存储
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
          <Login onLogin={handleLogin} />
        ) : (
          <>
            <nav>
              <ul>
                <li><Link to="/users">User Management</Link></li>
                <li><Link to="/inventory">Inventory Management</Link></li>
                <li><Link to="/shopping-list">Shopping List Management</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
              </ul>
            </nav>
            <Routes>
              <Route path="/users" element={<UserManagement />} />
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
