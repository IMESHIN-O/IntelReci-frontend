import React, { useState, useEffect } from 'react';
import nutritionMap from './NutritionData'; // 确保你已经有 nutritionMap
import axios from 'axios';

const ShoppingListManagement = () => {
  const [shoppingList, setShoppingList] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemNames, setItemNames] = useState([]); // 用于保存所有可用的 item name
  const [quantity, setQuantity] = useState(0);
  const [message, setMessage] = useState('');
  const [editItemId, setEditItemId] = useState(null); // 用于标记当前编辑的项目
  const [editQuantity, setEditQuantity] = useState(0); // 保存编辑时的数量

  // 获取 nutritionMap 中的所有食物名称
  const loadItemNames = () => {
    const names = Array.from(nutritionMap.keys()); // 从 nutrition_map 中提取所有的 key (食物名称)
    setItemNames(names);
  };

  // 获取所有购物清单项方法
  const getAllShoppingList = async () => {
    try {
      const userId = localStorage.getItem('userId');
      const url = `http://localhost:8080/api/shopping-list/all?userId=${userId}`;
      const response = await axios.get(url);
      setShoppingList(response.data);
    } catch (error) {
      setMessage('Error retrieving shopping list.');
    }
  };

  // 添加购物清单项方法
  const addItem = async () => {
    try {
      const userId = localStorage.getItem('userId');
      const response = await axios.post('http://localhost:8080/api/shopping-list/create', {
        itemName,
        quantity,
        user: { id: userId }
      });
      setMessage(`Item ${response.data.itemName} added successfully!`);
      getAllShoppingList();  // 重新加载购物清单数据
    } catch (error) {
      setMessage('Error adding item.');
    }
  };

  // 更新购物清单项数量方法
  const updateItemQuantity = async (id) => {
    try {
      const response = await axios.put(`http://localhost:8080/api/shopping-list/update/${id}`, {
        quantity: editQuantity,
      });
      setMessage(`Item ${response.data.itemName} updated successfully!`);
      setEditItemId(null); // 结束编辑状态
      getAllShoppingList();  // 重新加载购物清单数据
    } catch (error) {
      setMessage('Error updating item.');
    }
  };

  // 删除购物清单项方法
  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/shopping-list/${id}`);
      setMessage('Item deleted successfully!');
      getAllShoppingList();  // 重新加载购物清单数据
    } catch (error) {
      setMessage('Error deleting item.');
    }
  };

  // 初始化加载购物清单数据和 item name 列表
  useEffect(() => {
    getAllShoppingList();
    loadItemNames(); // 从前端 nutrition_map 加载食物名称
  }, []);

  return (
    <div className="container mt-4">
      <h2>Shopping List Management</h2>
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
      <button className="btn btn-primary" onClick={addItem}>Add Item</button>
      <p>{message}</p>

      <h3>Shopping List</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item Name</th>
            <th>Quantity (grams)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {shoppingList.map((item) => (
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

export default ShoppingListManagement;
