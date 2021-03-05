/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { StyledSearch } from '../styles.js';

const SearchBar = ({search}) => {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
    search(event.target.value);
  };

  return (
    <StyledSearch
      className="search"
      data-test="component-searchBar"
      type="text"
      value={input}
      placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
      onChange={handleChange}
    />
  );
};

export default SearchBar;
