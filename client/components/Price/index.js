import { number, oneOfType, string } from 'prop-types';
import React from 'react';
import { StyledPrice, StyledPriceWrapper } from './styles';

const Price = ({ originalPrice, salePrice }) =>
  originalPrice && (
    <StyledPriceWrapper data-test="component-price">
      <StyledPrice isOnSale={salePrice}>
        ${salePrice || originalPrice}
      </StyledPrice>
      <strike>{salePrice && ` $${originalPrice}`}</strike>
    </StyledPriceWrapper>
  );

Price.propTypes = {
  originalPrice: oneOfType([string, number]),
  salePrice: oneOfType([string, number]),
};

Price.defaultProps = {
  originalPrice: null,
  salePrice: null,
};

export default Price;
