import { node, string } from 'prop-types';
import React from 'react';
import MarginsWrapper from './styles';

const WithMargins = ({ margin , children }) => (
  <MarginsWrapper margin={margin}>{children}</MarginsWrapper>
);

WithMargins.propTypes = {
  children: node,
  margin: string,
};

WithMargins.defaultProps = {
 children : null,
 margin: '1rem'
};

export default WithMargins;
