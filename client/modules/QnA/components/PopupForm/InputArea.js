/* eslint-disable import/extensions */
import React from 'react';
import { string, func } from 'prop-types';
import { FormTextArea } from './styles.js';

const InputArea = ({
  label, placeholder, name, getInput,
}) => (
  <>
    <label htmlFor={label}>
      {label}
      <span> *</span>
    </label>
    <FormTextArea
      name={name}
      onChange={getInput}
      width={50}
      height={10}
      placeholder={placeholder}
      maxLength="1000"
      required
    />
  </>
);

export default InputArea;

InputArea.propTypes = {
  label: string.isRequired,
  placeholder: string.isRequired,
  name: string.isRequired,
  getInput: func.isRequired,
};
