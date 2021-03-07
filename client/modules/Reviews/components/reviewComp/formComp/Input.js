import React from 'react';
import { InputDiv } from './styles.js';

const Input = ({note, max, label, type, handleChange, value}) => (
  <InputDiv>
    {
    type === 'text'
    && (
    <div>
      <input maxLength={max} className='input' placeholder={label} name={label} onChange={handleChange} value={value} type="text" />
      <div className='note'>{note}</div >
    </div>
    )
}
    {
    type === 'textarea'
    && (
    <div>
      <textarea maxLength={max} placeholder={label} name={label} onChange={handleChange} value={value} type="text" />
    </div>
    )}
  </InputDiv>
);

export default Input;
