import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserManagement from './components/UserManagement';
import InventoryManagement from './components/InventoryManagement';
import ShoppingListManagement from './components/ShoppingListManagement';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Inventory Management System</h1>
        <nav>
          <ul>
            <li><Link to="/users">User Management</Link></li>
            <li><Link to="/inventory">Inventory Management</Link></li>
            <li><Link to="/shopping-list">Shopping List Management</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/users" element={<UserManagement />} />
          <Route path="/inventory" element={<InventoryManagement />} />
          <Route path="/shopping-list" element={<ShoppingListManagement />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
