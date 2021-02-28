import React, {useState} from 'react';
import {Search} from '../styles.js';

const SearchBar = () => {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  }

  return (
      <Search
        type='text'
        value={input}
        placeholder='Have a question? Search for answers...'
        onChange={(event)=>handleChange(event)}>
      </Search>
  )
}

export default SearchBar;