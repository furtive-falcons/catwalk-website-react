import React from 'react';
import { DropdownContainer } from './styles.js';

const Sort = ({ sort, sortMethod }) => (
  <DropdownContainer>
    <select value={sortMethod} onChange={sort} name="sort" className="dropdown">
      <option value="relevance">Relevance</option>
      <option value="helpfulness">Helpfulness</option>
      <option value="newest">Newest</option>
    </select>
  </DropdownContainer>
);

export default Sort;
