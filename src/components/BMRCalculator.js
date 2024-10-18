import React, { useState } from 'react';

const BMRCalculator = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('male');
  const [bmr, setBmr] = useState(null);

  const calculateBMR = () => {
    let bmrValue;
    if (gender === 'male') {
      bmrValue = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    } else {
      bmrValue = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    }
    setBmr(bmrValue);
  };

  const calculateDailyCalories = () => {
    if (bmr) {
      return bmr * 1.2; // Assuming moderate activity level
    }
    return 0;
  };

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
        </div>
      )}
    </div>
  );
};

export default BMRCalculator;
