import React from 'react';

import HeaderWrapper from './styles';
import Logo from './components/Logo';
import Search from './components/Search';

const Header = () => (
  <HeaderWrapper>
    <Logo />
    <Search />
  </HeaderWrapper>
);

export default Header;
