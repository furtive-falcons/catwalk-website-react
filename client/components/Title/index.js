import { node, number } from 'prop-types';
import React from 'react';
import { fontSizeBase } from '../../ui/ui-fonts';
import StyledTitle from './styles';

const ProductTitle = ({ children, size }) => <StyledTitle size={size}>{children}</StyledTitle>;

ProductTitle.propTypes = {
  children: node,
  size: number,
};

ProductTitle.defaultProps = {
  children: null,
  size: fontSizeBase,
};

export default ProductTitle;
