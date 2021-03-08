/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { FormTextArea } from './AnswerForm/styles.js';

const InputArea = ({
  width, height, label, placeholder,
}) => {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  return (
    <>
      <label htmlFor={label}>
        {label}
        <span> *</span>
      </label>
      <FormTextArea
        value={input}
        onChange={(event) => handleChange(event)}
        width={width}
        height={height}
        placeholder={placeholder}
        maxLength="1000"
        required
      />
    </>
  );
};

export default InputArea;
