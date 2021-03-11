import React from 'react';
// import PropTypes from 'prop-types';
import DetailsContainer from './styles'
import Category from './components/Category/Category';
import ProductTitle from '../../../../../../../../components/Title';
import Price from '../../../../../../../../components/Price';
import StarRating from '../../../../../../../../components/StarRating';
// import AvgRating from './components/AvgRating/AvgRating';
// import ProductCategory from '../../../../../../../../components/ProductCategory';
import {
  fontSizeBigger,
  fontSizeLarge,
  fontSizeSmaller,
  fontSizeBase,
} from '../../../../../../../../ui/ui-fonts';

const CardDetails = ({ card }) => {
  console.log('card details', card)
  const price = card.firstStyles.original_price * 1
  const salesPrice = card.firstStyles.sale_price * 1
  return (
  <DetailsContainer>
    <Category card={card.category} />
    <ProductTitle size={fontSizeBase}>{card.name}</ProductTitle>
    {salesPrice <= 0 ? <Price originalPrice={price}/> : <Price originalPrice={price} salePrice={salesPrice} />}
    <StarRating rating={card.ratingAverage} />
  </DetailsContainer>)
};

// CardDetails.propTypes = {
//   default_price: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   category: PropTypes.string.isRequired,
// };

export default CardDetails;
