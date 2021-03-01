import React from 'react';
import ProductCategoryStyles from './styles';

const ProductCategory = ({ children }) => (
  <ProductCategoryStyles data-test="component-category">
    {children}
  </ProductCategoryStyles>
);

export default ProductCategory;
