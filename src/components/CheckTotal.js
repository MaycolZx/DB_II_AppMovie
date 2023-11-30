// CheckBoxComponent.js
import React, { useState } from 'react';
// import OtherComponent from './OtherComponent'; // Ajusta la ruta según tu estructura de carpetas
import AnotherQuery from "@/components/AnotherQuery";

const CheckBoxComponent = ({labelText , queryNueva}) => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckBoxChange = () => {
    setChecked(!isChecked);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleCheckBoxChange} />
        {labelText}
      </label>
      {isChecked && <AnotherQuery otherData={queryNueva}/>}
    </div>
  );
};

export default CheckBoxComponent;
