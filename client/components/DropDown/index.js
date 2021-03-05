import {
  arrayOf, func, number, oneOfType, string,
} from 'prop-types';
import React from 'react';
import StyledSelect from './styles';

const DropDown = ({ size, options, handleOnChange }) => (
  <StyledSelect onChange={handleOnChange} selectSize={size}>
    {options.map((option) => (
      <option key={`${option}-${Math.random()}`} value={option}>
        {option}
      </option>
    ))}
  </StyledSelect>
);

DropDown.propTypes = {
  size: number,
  options: arrayOf(oneOfType([number, string])),
  handleOnChange: func,
};

DropDown.defaultProps = {
  size: 20,
  options: [],
  handleOnChange: Function.prototype,
};
export default DropDown;
