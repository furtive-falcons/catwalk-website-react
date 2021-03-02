import React from 'react';
import WithMargins from '../../../../hoc/with-margins';
import { fontSizeSmaller } from '../../../../ui/ui-fonts';
import LinkTag from '../../../LinkTag';
import Price from '../../../Price';
import ProductCategory from '../../../ProductCategory';
import ProductTitle from '../../../ProductTitle';
import StarRating from '../../../StarRating';
import InformationWrapper from './styles';

const ProducInformation = () => (
  <InformationWrapper>
    <StarRating />
    <WithMargins margin="1rem">
      <LinkTag size={fontSizeSmaller}>Read all reviews</LinkTag>
    </WithMargins>
    <ProductCategory>category</ProductCategory>
    <ProductTitle>Expanded Product Name</ProductTitle>
    <Price>$369</Price>
  </InformationWrapper>
);

export default ProducInformation;
