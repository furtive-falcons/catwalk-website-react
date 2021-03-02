import React from 'react';
import DivStyles from './styles';

const DropDown = ({ size, value, options }) => (
  <DivStyles size={size}>
    <select>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </DivStyles>
);

export default DropDown;
