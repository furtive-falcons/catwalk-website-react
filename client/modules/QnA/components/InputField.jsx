/* eslint-disable import/extensions */
import React from 'react';
import { FormInputField } from './PopupForm/styles.js';

const InputField = ({
  type, width, height, label, placeholder, getInput, name,
}) => (
  <>
    <label htmlFor={label}>
      {label}
      <span> *</span>
    </label>
    <FormInputField
      type={type}
      name={name}
      onChange={getInput}
      width={width}
      height={height}
      placeholder={placeholder}
      maxLength="60"
      required
    />
  </>
);

export default InputField;
