import { func, node, number, string } from 'prop-types';
import React from 'react';

import { fontSizeSmall } from '../../ui/ui-fonts';
import LinkTagStyles from './styles';

const LinkTag = ({
  children, size, handleOnClick, href,
}) => (
  <LinkTagStyles onClick={handleOnClick} size={size} href={href}>
    {children}
  </LinkTagStyles>
);

LinkTag.propTypes = {
  children: node,
  handleOnClick: func,
  href: string,
  size: number,
};

LinkTag.defaultProps = {
  children: null,
  handleOnClick: Function.prototype,
  href: '/#',
  size: fontSizeSmall,
};

export default LinkTag;
