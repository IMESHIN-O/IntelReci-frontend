import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InventoryManagement = () => {
  const [inventory, setInventory] = useState([]);
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [message, setMessage] = useState('');

  // 获取所有库存项方法
  const getAllInventory = async () => {
    try {
      const userId = localStorage.getItem('userId');
      const url = `http://localhost:8080/api/inventory/all/${userId}`;
      const response = await axios.get(url);
      setInventory(response.data);
    } catch (error) {
      setMessage('Error retrieving inventory.');
    }
  };

  // 添加库存项方法
  const addItem = async () => {
    try {
      const userId = localStorage.getItem('userId');
      const response = await axios.post('http://localhost:8080/api/inventory/add', {
        itemName,
        quantity,
        unit: 'pieces',
        category: 'General',
        expirationDate: '2024-12-31',
        user: { id: userId , email:''}
      });
      setMessage(`Item ${response.data.itemName} added successfully!`);
      getAllInventory();  // 重新加载库存数据
    } catch (error) {
      setMessage('Error adding item.');
    }
  };

  // 初始化加载库存数据
  useEffect(() => {
    getAllInventory();
  }, []);

  return (
    <div>
      <h2>Inventory Management</h2>
      <div>
        <label>Item Name:</label>
        <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
      </div>
      <div>
        <label>Quantity:</label>
        <input type="number" step="0.01" value={quantity} onChange={(e) => setQuantity(parseFloat(e.target.value))} />
      </div>
      <button onClick={addItem}>Add Item</button>
      <p>{message}</p>
      <h3>Inventory List</h3>
      <ul>
        {inventory.map((item) => (
          <li key={item.id}>{item.itemName} - {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryManagement;