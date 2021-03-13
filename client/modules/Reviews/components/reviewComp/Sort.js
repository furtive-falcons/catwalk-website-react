import React from 'react';
import { DropdownContainer } from './styles.js';

const Sort = ({ getSortMethod, sortValue }) => (
  <DropdownContainer id="dropdown">
    <label htmlFor="sort">
      Sort By {' '}
      <select id="sort" value={sortValue} onChange={getSortMethod} name="sort" className="dropdown">
        <option value="relevant">Relevance</option>
        <option value="helpful">Helpfulness</option>
        <option value="newest">Newest</option>
      </select>
    </label>
  </DropdownContainer>
);

export default Sort;
