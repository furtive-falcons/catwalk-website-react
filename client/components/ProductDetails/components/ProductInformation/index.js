import { number, shape } from 'prop-types';
import React from 'react';

import { fontSizeBigger, fontSizeSmaller } from '../../../../ui/ui-fonts';
import LinkTag from '../../../LinkTag';
import Price from '../../../Price';
import { ProductCategoryStyles, ReviewsLine, SocialWrapper } from './styles';
import ProductTitle from '../../../Title';
import StarRating from '../../../StarRating';
import WithMargins from '../../../../hoc/with-margins';
import Paragraph from '../../../Paragraph';

const ProductInformation = ({ product, selectedStyle }) =>
  product && (
    <>
      <ReviewsLine>
        <StarRating size={15} rating={product.ratingAverage} />
        <WithMargins margin="1rem">
          <LinkTag href="#reviews" size={fontSizeSmaller}>
            Read all reviews
          </LinkTag>
        </WithMargins>
      </ReviewsLine>
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
      <Paragraph>{product.productInformation.description}</Paragraph>
      {/* <Button size={5} isContentCentered primary icon="star" />
  <Button size={5} isContentCentered primary icon="star" />
  <Button size={5} isContentCentered primary icon="star" /> */}
      <SocialWrapper>
        <SocialWrapper className="fab fa-facebook" />
        <i className="fab fa-instagram" />
        <i className="fab fa-twitter" />
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
