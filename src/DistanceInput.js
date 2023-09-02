// src/components/DistanceInput.js
import React from 'react';

const DistanceInput = ({ label, value, onChange }) => (
  <div>
    <label>{label}:</label>
    <input type="number" value={value} onChange={onChange} />
  </div>
);

export default DistanceInput;
