/* eslint-disable import/extensions */
import React from 'react';
import { string, number, func } from 'prop-types';
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

InputField.propTypes = {
  type: string,
  name: string,
  width: number,
  height: number,
  label: string,
  placeholder: string,
  getInput: func,
};

InputField.defaultProps = {
  type: null,
  name: null,
  width: null,
  height: null,
  placeholder: null,
  label: null,
  getInput: null,
};
