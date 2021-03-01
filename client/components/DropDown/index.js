import React from 'react';

const DropDown = ({ value, options }) => {
  return (
      <select>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
  );
};

export default DropDown;
