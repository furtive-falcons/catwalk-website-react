/* eslint-disable import/extensions */
import React from 'react';
import { string, func } from 'prop-types';
import { FormInputField } from './styles.js';

const InputField = ({
  type, label, placeholder, getInput, name,
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
      width={30}
      height={4}
      placeholder={placeholder}
      maxLength="60"
      required
    />
  </>
);

export default InputField;

InputField.propTypes = {
  type: string.isRequired,
  name: string.isRequired,
  label: string.isRequired,
  placeholder: string.isRequired,
  getInput: func.isRequired,
};
