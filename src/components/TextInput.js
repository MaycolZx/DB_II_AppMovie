// components/TextInput.js
"use client"
import React, { useState } from 'react';

const TextInput = ({ onTextChange }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    const newText = e.target.value;
    setInputText(newText);
    onTextChange(newText); // Llama a la función proporcionada desde el padre con el nuevo texto
  };

  return (
    <input
      type="text"
      placeholder="Ingresa texto"
      value={inputText}
      onChange={handleInputChange}
      className="text-slate-950"
    />
  );
};

export default TextInput;
