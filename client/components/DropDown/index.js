import { arrayOf, bool, func, number, oneOfType, string } from 'prop-types';
import React from 'react';
import StyledSelect from './styles';

const DropDown = ({
  size,
  options,
  selectedOption,
  handleOnChange,
  hasMargins,
}) => (
  <StyledSelect
    disabled={options.length < 2}
    hasMargins={hasMargins}
    onChange={handleOnChange}
    value={selectedOption}
    selectSize={size}
  >
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
  hasMargins: bool,
};

DropDown.defaultProps = {
  size: 20,
  options: [],
  handleOnChange: Function.prototype,
  hasMargins: false,
};
export default DropDown;
