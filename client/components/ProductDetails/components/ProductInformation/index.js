import React from 'react';
import WithMargins from '../../../../hoc/with-margins';
import { fontSizeSmaller } from '../../../../ui/ui-fonts';
import LinkTag from '../../../LinkTag';
import Price from '../../../Price';
import ProductTitle from '../../../ProductTitle';
import StarRating from '../../../StarRating';
import ProductCategoryStyles from './styles';

const ProducInformation = () => (
  <>
    <StarRating />
    <WithMargins margin="1rem">
      <LinkTag size={fontSizeSmaller}>Read all reviews</LinkTag>
    </WithMargins>
    <ProductCategoryStyles>category</ProductCategoryStyles>
    <ProductTitle>Expanded Product Name</ProductTitle>
    <Price>$369</Price>
  </>
);

export default ProducInformation;
