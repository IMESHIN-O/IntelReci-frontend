import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShoppingListManagement = () => {
  const [shoppingList, setShoppingList] = useState([]);
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [message, setMessage] = useState('');

  // 获取所有购物清单项方法
  const getAllShoppingList = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/shopping-list/all?userId=1');
      setShoppingList(response.data);
    } catch (error) {
      setMessage('Error retrieving shopping list.');
    }
  };

  // 添加购物清单项方法
  const addItem = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/shopping-list/create', {
        itemName,
        quantity,
        user: { id: 1 }
      });
      setMessage(`Item ${response.data.itemName} added successfully!`);
      getAllShoppingList();  // 重新加载购物清单数据
    } catch (error) {
      setMessage('Error adding item.');
    }
  };

  // 初始化加载购物清单数据
  useEffect(() => {
    getAllShoppingList();
  }, []);

  return (
    <div>
      <h2>Shopping List Management</h2>
      <div>
        <label>Item Name:</label>
        <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
      </div>
      <div>
        <label>Quantity:</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
      </div>
      <button onClick={addItem}>Add Item</button>
      <p>{message}</p>
      <h3>Shopping List</h3>
      <ul>
        {shoppingList.map((item) => (
          <li key={item.id}>{item.itemName} - {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
};
export default ShoppingListManagement;