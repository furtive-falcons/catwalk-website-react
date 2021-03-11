import { number, shape } from 'prop-types';
import React from 'react';

import {
  fontSizeBigger,
  fontSizeLarge,
  fontSizeSmaller,
} from '../../../../ui/ui-fonts';
import LinkTag from '../../../LinkTag';
import Price from '../../../Price';
import { ProductCategoryStyles, ReviewsLine, SocialWrapper } from './styles';
import ProductTitle from '../../../Title';
import StarRating from '../../../StarRating';
import WithMargins from '../../../../hoc/with-margins';
import Paragraph from '../../../Paragraph';

const ProductInformation = ({ product, selectedStyle }) => product && (
<>
  {product.ratingAverage > 0 && (
  <ReviewsLine>
    <StarRating size={15} rating={product.ratingAverage} />
    <WithMargins margin="1rem">
      <LinkTag href="#reviews" size={fontSizeSmaller}>
        Read all
        {' '}
        {product.numberOfReviews}
        {' '}
        reviews
      </LinkTag>
    </WithMargins>
  </ReviewsLine>
  )}
  <ProductCategoryStyles>
    {product.productInformation.category}
  </ProductCategoryStyles>
  <ProductTitle size={fontSizeBigger}>
    {product.productInformation.name}
  </ProductTitle>
  <Price
    originalPrice={
          product.productStyles.results[selectedStyle].original_price * 1
        }
    salePrice={product.productStyles.results[selectedStyle].sale_price}
  />

  {product.productInformation.description && (
  <Paragraph size={fontSizeLarge}>
    {product.productInformation.description}
  </Paragraph>
  )}

  <SocialWrapper target="_blank" href="https://www.facebook.com">
    <i className="fab fa-facebook" />
  </SocialWrapper>

  <SocialWrapper target="_blank" href="https://www.instagram.com">
    <i className="fab fa-instagram" />
  </SocialWrapper>

  <SocialWrapper target="_blank" href="https://www.pinterest.com">
    <i className="fab fa-pinterest" />
  </SocialWrapper>
</>
);

ProductInformation.propTypes = {
  product: shape({}),
  selectedStyle: number,
};

ProductInformation.defaultProps = {
  product: null,
  selectedStyle: null,
};

export default ProductInformation;
