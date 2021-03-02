import React from 'react';
import { fontSizeSmaller } from '../../../../ui/ui-fonts';
import LinkTag from '../../../LinkTag';
import Price from '../../../Price';
import ProductTitle from '../../../ProductTitle';
import StarRating from '../../../StarRating';
import ProductCategoryStyles from './styles';

const ProducInformation = () => (
  <>
    <StarRating />
    <LinkTag size={fontSizeSmaller}>Read all reviews</LinkTag>
    <ProductCategoryStyles>category</ProductCategoryStyles>
    <ProductTitle>Expanded Product Name</ProductTitle>
    <Price>$369</Price>
  </>
);

export default ProducInformation;
