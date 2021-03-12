/* eslint-disable import/extensions */
import React from 'react';
import { FormTextArea } from './styles.js';

const InputArea = ({
  width, height, label, placeholder, name, getInput,
}) => (
  <>
    <label htmlFor={label}>
      {label}
      <span> *</span>
    </label>
    <FormTextArea
      name={name}
      onChange={getInput}
      width={width}
      height={height}
      placeholder={placeholder}
      maxLength="1000"
      required
    />
  </>
);

export default InputArea;
