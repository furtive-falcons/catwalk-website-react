import { array, number } from 'prop-types';
import React from 'react';
import StyledSelect from './styles';

const DropDown = ({ size, options , handleOnChange}) => (
  

    <StyledSelect onChange={handleOnChange} selectSize={size}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  
 
);

DropDown.propTypes = {
  size : number,
  options : array
}

DropDown.defaultProps = {
  size : 20,
  options: []
}
export default DropDown;
