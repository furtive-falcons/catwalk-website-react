import { shape } from 'prop-types';
import React from 'react';

import { fontSizeBigger, fontSizeSmaller } from '../../../../ui/ui-fonts';
import LinkTag from '../../../LinkTag';
import Price from '../../../Price';
import ProductCategoryStyles from './styles';
import ProductTitle from '../../../Title';
import StarRating from '../../../StarRating';
import WithMargins from '../../../../hoc/with-margins';

const ProducInformation = ({product}) => product && (
  <>
    <StarRating />
    <WithMargins margin="1rem">
      <LinkTag size={fontSizeSmaller}>Read all reviews</LinkTag>
    </WithMargins>
    <ProductCategoryStyles>{product.productInformation.category}</ProductCategoryStyles>
    <ProductTitle size={fontSizeBigger}>{product.productInformation.name}</ProductTitle>
    <Price price={product.productStyles.results[0].original_price * 1} />
  </>
);

ProducInformation.propTypes = {
  product: shape({}),
};

ProducInformation.defaultProps = {
  product: null,
};

export default ProducInformation;
