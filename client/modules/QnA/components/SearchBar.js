import React, { useState } from 'react';
import { func } from 'prop-types';
import { StyledSearch } from '../styles';

const SearchBar = ({ search }) => {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
    search(event.target.value);
  };

  return (
    <StyledSearch
      id="search"
      aria-label="search"
      type="search"
      value={input}
      placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
      onChange={handleChange}
    />
  );
};

export default SearchBar;

SearchBar.propTypes = {
  search: func,
};

SearchBar.defaultProps = {
  search: null,
};
