import React from 'react';
import { fontSizeSmaller } from '../../../../ui/ui-fonts';
import LinkTag from '../../../LinkTag';
import Price from '../../../Price';
import ProductCategory from '../../../ProductCategory';
import ProductTitle from '../../../ProductTitle';
import StarRating from '../../../StarRating';


const ProducInformation = () => (
  <>
    <StarRating />
    <LinkTag size={fontSizeSmaller}>Read all reviews</LinkTag>
    <ProductCategory>category</ProductCategory>
    <ProductTitle>Expanded Product Name</ProductTitle>
    <Price>$369</Price>
  </>
);

export default ProducInformation;
