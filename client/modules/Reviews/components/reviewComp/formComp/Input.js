import React from 'react';
import { InputDiv } from './styles';

const Input = ({
  note, max, label, type, handleChange, value, regex, placeholder,
}) => (
  <InputDiv>
    {
    type === 'text'
    && (
    <div>
      <input pattern={regex} maxLength={max} className="input" placeholder={placeholder} name={label} onChange={handleChange} value={value} type="text" required />
      <div className="note">{note}</div>
    </div>
    )
}
    {
    type === 'textarea'
    && (
    <div>
      <textarea maxLength={max} placeholder={placeholder} name={label} onChange={handleChange} value={value} type="text" />
    </div>
    )
}
  </InputDiv>
);

export default Input;
