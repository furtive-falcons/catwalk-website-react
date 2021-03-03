import { node, number } from 'prop-types';
import React from 'react';
import { fontSizeBase } from '../../ui/ui-fonts';
import StyledTitle from './styles';

const Title = ({ children, size }) => (
  <StyledTitle size={size}>{children}</StyledTitle>
);

Title.propTypes = {
  children: node,
  size: number,
};

Title.defaultProps = {
  children: null,
  size: fontSizeBase,
};

export default Title;
