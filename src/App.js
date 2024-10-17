import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import InventoryManagement from './components/InventoryManagement';
import ShoppingListManagement from './components/ShoppingListManagement';
import Login from './components/Login';
import Register from './components/Register'; // 确保你有 Register 组件
import 'bootstrap/dist/css/bootstrap.min.css'; // 引入 Bootstrap 样式

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (token) => {
    // 存储 token 或登录信息到本地存储
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
            {/* Sidebar */}
            <div className="bg-light border-right" id="sidebar-wrapper">
              <div className="sidebar-heading">Inventory Management System</div>
              <div className="list-group list-group-flush">
                <Link to="/inventory" className="list-group-item list-group-item-action bg-light">Inventory Management</Link>
                <Link to="/shopping-list" className="list-group-item list-group-item-action bg-light">Shopping List Management</Link>
                <button className="list-group-item list-group-item-action bg-light" onClick={handleLogout}>Logout</button>
              </div>
            </div>

            {/* Main content */}
            <div id="page-content-wrapper" className="p-4">
              <Routes>
                <Route path="/inventory" element={<InventoryManagement />} />
                <Route path="/shopping-list" element={<ShoppingListManagement />} />
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
