import React from 'react';
import LinkTag from '../../../LinkTag';
import Price from '../../../Price';
import ProductCategory from '../../../ProductCategory';
import ProductTitle from '../../../ProductTitle';
import StarRating from '../../../StarRating';

const ProducInformation = () => (
  <div>
    <StarRating />
    <LinkTag>Read all reviews</LinkTag>
    <ProductCategory>category</ProductCategory>
    <ProductTitle>Expanded Product Name</ProductTitle>
    <Price>$369</Price>
  </div>
);

export default ProducInformation;
