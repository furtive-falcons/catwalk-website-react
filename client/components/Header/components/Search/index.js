import React from 'react';
import { SearchStyles, SearchWrapper, StyledIcon } from './styles';

const Search = () => (
  <SearchWrapper data-test="component-search">
    <SearchStyles aria-label="Search input" />
    <StyledIcon className="fas fa-search" />
  </SearchWrapper>
);

export default Search;
