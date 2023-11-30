// components/Checkbox.js
import React, { useState } from 'react';

const Checkbox = ({ onCheckboxChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onCheckboxChange(newCheckedState); // Llama a la función proporcionada desde el padre con el nuevo estado
  };

  return (
    <div>
    <input
      type="checkbox"
      checked={isChecked}
      onChange={handleCheckboxChange}
    />
    <label className="text-green-600" htmlFor="scales">Action</label>
  </div>
    
  );
};

export default Checkbox;
