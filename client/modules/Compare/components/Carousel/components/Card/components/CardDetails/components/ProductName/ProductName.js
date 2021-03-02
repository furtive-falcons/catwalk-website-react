import React from 'react';
// import PropTypes from 'prop-types';
import ProductNameBold from './styles';

const ProductName = ({ card }) => <ProductNameBold data-test="component-name">{card}</ProductNameBold>;

// ProductName.propTypes = {
//   card: PropTypes.string.isRequired,
// };

export default ProductName;
