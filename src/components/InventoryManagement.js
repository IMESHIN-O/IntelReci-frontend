import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const InventoryManagement = () => {
  const [inventory, setInventory] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemNames, setItemNames] = useState([]); // 新增状态，保存所有可用的 item name
  const [quantity, setQuantity] = useState(0);
  const [expirationDate, setExpirationDate] = useState(''); // 新增状态保存过期时间
  const [editItemId, setEditItemId] = useState(null); // 用于编辑库存
  const [editQuantity, setEditQuantity] = useState(0); // 新的数量值
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

  // 获取所有 nutrition_facts 中的食物名称
  const getItemNames = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/nutrition-facts/names'); // 从后端获取 nutrition_facts 的名称
      setItemNames(response.data); // 保存到状态
    } catch (error) {
      setMessage('Error retrieving item names from nutrition facts.');
    }
  };

  // 添加库存项方法
  const addItem = async () => {
    try {
      const userId = localStorage.getItem('userId');
      const response = await axios.post('http://localhost:8080/api/inventory/add', {
        itemName,
        quantity,
        unit: 'grams',  
        category: 'General',
        expirationDate, // 将用户输入的过期时间发送到后端
        user: { id: userId, email: '' }
      });
      setMessage(`Item ${response.data.itemName} added successfully!`);
      getAllInventory();  // 重新加载库存数据
    } catch (error) {
      setMessage('Error adding item.');
    }
  };

  // 更新库存项数量方法（通过inventory的id）
  const updateItemQuantity = async (id) => {
    try {
      const response = await axios.put(`http://localhost:8080/api/inventory/update/${id}`, {
        quantity: editQuantity, // 更新时发送新的数量值
      });
      setMessage(`Item ${response.data.itemName} updated successfully!`);
      setEditItemId(null); // 结束编辑状态
      getAllInventory();  // 重新加载库存数据
    } catch (error) {
      setMessage('Error updating item.');
    }
  };

  // 删除库存项方法
  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/inventory/${id}`);
      setMessage('Item deleted successfully!');
      getAllInventory();  // 重新加载库存数据
    } catch (error) {
      setMessage('Error deleting item.');
    }
  };

  // 初始化加载库存数据和可用 item name 列表
  useEffect(() => {
    getAllInventory();
    getItemNames(); // 加载 nutrition_facts 的 item name
  }, []);

  return (
    <div className="container mt-4">
      <h2>Inventory Management</h2>
      <div className="mb-3">
        <label className="form-label">Item Name:</label>
        <select
          className="form-select"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        >
          <option value="">Select an item</option>
          {itemNames.map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Quantity (in grams):</label>
        <input
          type="number"
          className="form-control"
          step="0.01"
          value={quantity}
          onChange={(e) => setQuantity(parseFloat(e.target.value))}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Expiration Date:</label>
        <input
          type="date"
          className="form-control"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={addItem}>Add Item</button>
      <p>{message}</p>

      <h3 className="mt-4">Inventory List</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item Name</th>
            <th>Quantity (grams)</th>
            <th>Expiration Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.itemName}</td>
              <td>
                {editItemId === item.id ? (
                  <input
                    type="number"
                    value={editQuantity}
                    onChange={(e) => setEditQuantity(parseFloat(e.target.value))}
                  />
                ) : (
                  item.quantity
                )}
              </td>
              <td>{item.expirationDate}</td>
              <td>
                {editItemId === item.id ? (
                  <button className="btn btn-success" onClick={() => updateItemQuantity(item.id)}>Save</button>
                ) : (
                  <>
                    <button className="btn btn-primary" onClick={() => {
                      setEditItemId(item.id);
                      setEditQuantity(item.quantity);
                    }}>Edit</button>
                    <button className="btn btn-danger ms-2" onClick={() => deleteItem(item.id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryManagement;
