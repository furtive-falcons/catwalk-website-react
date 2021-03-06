import React from 'react';
import { InputDiv } from './styles.js';

const Input = ({ label, type, handleChange, value}) => (
  <InputDiv>
    {
    type === 'text'
    && (
    <div>
      <label>{label}</label>
      <input placeholder={label} name={label} onChange={handleChange} value={value} type="text" />
    </div>
    )
}
    {
    type === 'textarea'
    && (
    <div>
      <label>{label}</label>
      <textarea placeholder={label} name={label} onChange={handleChange} value={value} type="text" />
    </div>
    )}
  </InputDiv>
);

export default Input;
