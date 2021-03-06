import { number } from 'prop-types';
import React from 'react';

const Price = ({ originalPrice, salePrice }) => originalPrice && (
<span data-test="component-price">
  $
  {salePrice || originalPrice}
  <strike>
    {salePrice && ` $${originalPrice}`}
  </strike>
</span>
);

Price.propTypes = {
  originalPrice: number,
  salePrice: number,
};

Price.defaultProps = {
  originalPrice: null,
  salePrice: null,
};

export default Price;
