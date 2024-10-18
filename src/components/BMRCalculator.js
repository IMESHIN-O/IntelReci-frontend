import React, { useState, useEffect } from 'react';
import recipeMap from './RecipeData'; // 假设 recipeMap 是一个包含菜谱的map
import nutritionMap from './NutritionData'; // 假设 nutritionMap 是一个包含营养信息的map
import axios from 'axios'; // 用于添加物品到购物清单

const BMRCalculator = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('male');
  const [bmr, setBmr] = useState(null);
  const [recommendedMenu, setRecommendedMenu] = useState([]);
  const [totalMenuCalories, setTotalMenuCalories] = useState(0);
  const [recipeCaloriesMap, setRecipeCaloriesMap] = useState(new Map());
  const [inventory, setInventory] = useState([]);
  const [showShoppingPrompt, setShowShoppingPrompt] = useState(false); // 控制是否显示购物提示
  const [shoppingMessage, setShoppingMessage] = useState('');

  // 获取用户库存
  const getInventory = async () => {
    try {
      const userId = localStorage.getItem('userId');
      const url = `http://localhost:8080/api/inventory/all/${userId}`;
      const response = await axios.get(url);
      setInventory(response.data);
    } catch (error) {
      console.error('Error retrieving inventory', error);
    }
  };

  // 计算 BMR
  const calculateBMR = () => {
    let bmrValue;
    if (gender === 'male') {
      bmrValue = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    } else {
      bmrValue = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    }
    setBmr(bmrValue);
  };

  // 计算每天所需的卡路里
  const calculateDailyCalories = () => {
    if (bmr) {
      return bmr * 1.2; // 设定为中等活动量
    }
    return 0;
  };

  // 计算菜谱的总热量
  const calculateRecipeCalories = (recipe) => {
    let totalCalories = 0;
    recipe.forEach((amount, ingredient) => {
      const nutrition = nutritionMap.get(ingredient);
      if (nutrition) {
        totalCalories += (nutrition.calories * amount) / 100; // 计算每100g中的热量
      }
    });
    return totalCalories;
  };

  // 贪心算法寻找最接近目标热量的套餐
  const findMenuByGreedy = (targetCalories) => {
    const recipeNames = Array.from(recipeMap.keys());
    const recipeCalories = recipeNames.map(name => calculateRecipeCalories(recipeMap.get(name)));

    const recipesWithCalories = recipeNames.map((name, index) => ({
      name,
      calories: recipeCalories[index],
    }));

    // 按热量降序排列
    recipesWithCalories.sort((a, b) => b.calories - a.calories);

    let currentCalories = 0;
    let chosenRecipes = [];
    let recipeCaloriesMapTemp = new Map();

    // 贪心选择菜谱，直到接近目标热量
    for (let recipe of recipesWithCalories) {
      if (currentCalories + recipe.calories <= targetCalories) {
        chosenRecipes.push(recipe.name);
        currentCalories += recipe.calories;
        recipeCaloriesMapTemp.set(recipe.name, recipe.calories); // 存储每个菜的热量
      }
      if (currentCalories >= targetCalories) {
        break;
      }
    }

    setRecipeCaloriesMap(recipeCaloriesMapTemp); // 设置菜谱和热量的对应关系
    setTotalMenuCalories(currentCalories); // 设置菜单的总热量
    return chosenRecipes;
  };

  // 生成推荐菜单
  const generateRecommendedMenu = () => {
    const dailyCalories = calculateDailyCalories();
    const optimalMenu = findMenuByGreedy(dailyCalories);
    setRecommendedMenu(optimalMenu);
    setShowShoppingPrompt(true); // 显示购物提示
  };

  // 将不足的食物添加到购物清单中
  const addMissingItemsToShoppingList = async () => {
    try {
      const userId = localStorage.getItem('userId');
      let missingItems = [];

      recommendedMenu.forEach((recipe) => {
        const ingredients = recipeMap.get(recipe);
        ingredients.forEach((amount, ingredient) => {
          const inventoryItem = inventory.find(item => item.itemName === ingredient);
          const currentInventory = inventoryItem ? inventoryItem.quantity : 0;

          if (currentInventory < amount) {
            missingItems.push({ itemName: ingredient, quantity: amount - currentInventory });
          }
        });
      });

      // 将不足的食物添加到购物清单
      for (let item of missingItems) {
        await axios.post('http://localhost:8080/api/shopping-list/create', {
          itemName: item.itemName,
          quantity: item.quantity,
          user: { id: userId }
        });
      }
      setShoppingMessage('不足的食材已添加到购物清单中!');
    } catch (error) {
      setShoppingMessage('添加到购物清单时出错.');
    }
  };

  // 当 BMR 计算完成时，自动生成推荐套餐并获取库存
  useEffect(() => {
    if (bmr) {
      generateRecommendedMenu();
      getInventory();
    }
  }, [bmr]);

  return (
    <div className="container">
      <h2>BMR Calculator</h2>
      <div className="form-group">
        <label>Age</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="form-control" />
      </div>
      <div className="form-group">
        <label>Weight (kg)</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="form-control" />
      </div>
      <div className="form-group">
        <label>Height (cm)</label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="form-control" />
      </div>
      <div className="form-group">
        <label>Gender</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)} className="form-control">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <button className="btn btn-primary" onClick={calculateBMR}>Calculate BMR</button>

      {bmr && (
        <div className="mt-4">
          <h3>Your BMR is: {bmr.toFixed(2)} kcal/day</h3>
          <h3>Daily caloric intake should be: {calculateDailyCalories().toFixed(2)} kcal/day</h3>

          <h4>Recommended Menu:</h4>
          {recommendedMenu.length > 0 ? (
            <div>
              <h5>Total Menu Calories: {totalMenuCalories.toFixed(2)} kcal</h5>
              <ul>
                {recommendedMenu.map((recipe, index) => (
                  <li key={index}>
                    {recipe} ({recipeCaloriesMap.get(recipe).toFixed(2)} kcal)  {/* 显示每个菜的热量 */}
                    <ul>
                      {Array.from(recipeMap.get(recipe).entries()).map(([ingredient, amount], idx) => (
                        <li key={idx}>
                          {ingredient}: {amount}g
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
              {showShoppingPrompt && (
                <div className="mt-3">
                  <p>Adding the missing ingredients be added to the shopping list?</p>
                  <button className="btn btn-success" onClick={addMissingItemsToShoppingList}>Yes</button>
                  <p>{shoppingMessage}</p>
                </div>
              )}
            </div>
          ) : (
            <p>No suitable menu found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default BMRCalculator;
