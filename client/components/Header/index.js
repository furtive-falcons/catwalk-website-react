/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

import { func } from 'prop-types';
import { HeaderWrapper, LinksContainerStyles } from './styles';
import Logo from './components/Logo';
import Search from './components/Search';
import linksList from '../../data';

const Header = ({ setProductId }) => {
  const handleOnClick = (id) => () => {
    setProductId(id);
  };
  return (
    <HeaderWrapper>
      <Logo />
      <LinksContainerStyles>
        {linksList.map(({ productId, link }) => (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <li onClick={handleOnClick(productId)} key={productId}>
            {link}
          </li>
        ))}
      </LinksContainerStyles>
      <Search />
    </HeaderWrapper>
  );
};

Header.propTypes = {
  setProductId: func,
};

Header.defaultProps = {
  setProductId: Function.prototype,
};

export default Header;
