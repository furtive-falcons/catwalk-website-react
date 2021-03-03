import React from 'react';
import { DropdownContainer } from './styles.js';

const Sort = ({ getSortMethod, sortValue }) => (
  <DropdownContainer>
    <select value={sortValue} onChange={getSortMethod} name="sort" className="dropdown">
      <option value="relevance">Relevance</option>
      <option value="helpfulness">Helpfulness</option>
      <option value="date">Newest</option>
    </select>
  </DropdownContainer>
);

export default Sort;
