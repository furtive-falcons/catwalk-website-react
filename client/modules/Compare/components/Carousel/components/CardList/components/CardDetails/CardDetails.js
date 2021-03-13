import React from 'react';
import { shape } from 'prop-types';
import DetailsContainer from './styles';
import Category from './components/Category/Category';
import ProductTitle from '../../../../../../../../components/Title';
import Price from '../../../../../../../../components/Price';
import StarRating from '../../../../../../../../components/StarRating';
import { fontSizeBase } from '../../../../../../../../ui/ui-fonts';

const CardDetails = ({ card }) => (
  <DetailsContainer data-test="component-details">
    <Category card={card.category} />
    <ProductTitle size={fontSizeBase}>{card.name}</ProductTitle>
    {card.sale_price * 1 <= 0
      ? <Price originalPrice={card.original_price} />
      : <Price originalPrice={card.original_price * 1} salePrice={card.sale_price * 1} />}
    <StarRating rating={card.ratingAverage} />
  </DetailsContainer>
);

CardDetails.propTypes = {
  card: shape({}),
};

CardDetails.defaultProps = {
  card: {},
};

export default CardDetails;
