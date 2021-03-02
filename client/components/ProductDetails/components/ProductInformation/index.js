import React from 'react';
import WithMargins from '../../../../hoc/with-margins';
import { fontSizeBigger, fontSizeSmaller } from '../../../../ui/ui-fonts';
import LinkTag from '../../../LinkTag';
import Price from '../../../Price';
import ProductCategory from '../../../ProductCategory';
import ProductTitle from '../../../Title';
import StarRating from '../../../StarRating';


const ProducInformation = () => (
  <>
    <StarRating />
    <WithMargins margin="1rem">
      <LinkTag size={fontSizeSmaller}>Read all reviews</LinkTag>
    </WithMargins>
    <ProductCategory>category</ProductCategory>
    <ProductTitle size={fontSizeBigger}>Expanded Product Name</ProductTitle>
    <Price>$369</Price>
  </>
);

export default ProducInformation;
