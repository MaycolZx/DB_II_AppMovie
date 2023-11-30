// CheckboxComponent.js
import React, { useState } from 'react';

const CheckboxComponent = ({ onCheckboxChange }) => {
  const [checkboxValues, setCheckboxValues] = useState({
    checkbox1: false,
    checkbox2: false,
    // Agrega más checkboxes según sea necesario
  });

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxValues({
      ...checkboxValues,
      [checkboxName]: !checkboxValues[checkboxName],
    });
    onCheckboxChange(checkboxValues);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checkboxValues.checkbox1}
          onChange={() => handleCheckboxChange('checkbox1')}
        />
        Checkbox 1
      </label>
      <label>
        <input
          type="checkbox"
          checked={checkboxValues.checkbox2}
          onChange={() => handleCheckboxChange('checkbox2')}
        />
        Checkbox 2
      </label>
      {/* Agrega más checkboxes según sea necesario */}
    </div>
  );
};

export default CheckboxComponent;
