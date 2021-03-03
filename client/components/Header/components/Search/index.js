import React from 'react';
import { SearchStyles, SearchWrapper, StyledIcon } from './styles';

const Search = () => (
  <SearchWrapper>
    <SearchStyles data-test="component-search" />
    <StyledIcon className="fas fa-search" />
  </SearchWrapper>
);

export default Search;
