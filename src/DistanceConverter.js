import React, { useState } from 'react';

const DistanceConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('metersToKilometers');
  const [convertedValue, setConvertedValue] = useState(0);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleUnitChange = (event) => {
    setSelectedUnit(event.target.value);
  };

  const convertDistance = () => {
    const numericInput = parseFloat(inputValue);

    if (isNaN(numericInput)) {
      alert('Please enter a valid number.');
      return;
    }

    let result = 0;

    if (selectedUnit === 'meters') {
      result = numericInput * 100;
    } else if (selectedUnit === 'metersToKilometers') {
      result = numericInput / 1000;
    } else if (selectedUnit === 'kilometersToMeters') {
      result = numericInput * 1000;
    } else if (selectedUnit === 'centimetersToMeters') {
      result = numericInput / 100;
    } else if (selectedUnit === 'centimetersToMillimeters') {
      result = numericInput * 10;
    } else if (selectedUnit === 'millimetersToCentimeters') {
      result = numericInput / 10;
    }

    setConvertedValue(result);
  };

  return (
    <div>
      <h1>Distance Converter</h1>
      <input
        type="number"
        name="inputValue"
        value={inputValue}
        placeholder="Enter a value"
        onChange={handleInputChange}
      />
      <select
        name="selectedUnit"
        value={selectedUnit}
        onChange={handleUnitChange}
      > 
        <option value="meters">Meters to Centimeters</option>
        <option value="centimetersToMeters">Centimeters to Meters</option>
        <option value="metersToKilometers">Meters to Kilometers</option>
        <option value="kilometersToMeters">Kilometers to Meters</option>
        <option value="centimetersToMillimeters">Centimeters to Millimeters</option>
        <option value="millimetersToCentimeters">Millimeters to Centimeters</option>
      </select>
      <button onClick={convertDistance}>Convert</button>
      <p>Result: {convertedValue}</p>
    </div>
  );
};

export default DistanceConverter;





