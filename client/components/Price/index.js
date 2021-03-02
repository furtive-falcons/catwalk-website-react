import { number } from 'prop-types';
import React from 'react';

const Price = ({ price }) => price && (
<span data-test="component-price">
  $
  {price}
</span>
);

Price.propTypes = {
  price: number,
};

Price.defaultProps = {
  price: null,
};

export default Price;
