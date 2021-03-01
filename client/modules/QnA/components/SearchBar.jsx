/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { StyledSearch } from '../styles.js';

const SearchBar = () => {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  return (
    <StyledSearch
      data-test="component-searchBar"
      type="text"
      value={input}
      placeholder="Have a question? Search for answers..."
      onChange={(event) => handleChange(event)}
    />
  );
};

export default SearchBar;
