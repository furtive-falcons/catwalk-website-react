import React from 'react';
import WithMargins from '../../../../hoc/with-margins';
import { fontSizeBigger, fontSizeSmaller } from '../../../../ui/ui-fonts';
import LinkTag from '../../../LinkTag';
import Price from '../../../Price';
import ProductTitle from '../../../Title';
import StarRating from '../../../StarRating';
import ProductCategoryStyles from './styles';

const ProducInformation = () => (
  <>
    <StarRating />
    <WithMargins margin="1rem">
      <LinkTag size={fontSizeSmaller}>Read all reviews</LinkTag>
    </WithMargins>
    <ProductCategoryStyles>category</ProductCategoryStyles>
    <ProductTitle size={fontSizeBigger}>Expanded Product Name</ProductTitle>
    <Price price={369} />
  </>
);

export default ProducInformation;
