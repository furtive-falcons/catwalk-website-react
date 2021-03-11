import React from 'react';
// import PropTypes from 'prop-types';
import Category from './components/Category/Category';
import ProductName from './components/ProductName/ProductName';
import Price from '../../../../../../../../components/Price';
import StarRating from '../../../../../../../../components/StarRating';
import DetailsContainer from './styles'
// import Price from './components/Price/Price';
// import AvgRating from './components/AvgRating/AvgRating';
// import ProductCategory from '../../../../../../../../components/ProductCategory';
// import ProductTitle from '../../../../../../../../components/ProductTitle';

const CardDetails = ({ card }) => {
  const price = Number(card.firstStyles.original_price)
  // const salesPrice = Number(card.firstStyles.sale_price)
  return (
  <DetailsContainer>
    <Category card={card.category} />
    <ProductName card={card.name} />
    <Price card={`$${card.default_price}`} />
    {/* <Price originalPrice={price} salePrice={salesPrice} /> */}
    <StarRating rating={card.ratingAverage} />
  </DetailsContainer>)
};

// CardDetails.propTypes = {
//   default_price: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   category: PropTypes.string.isRequired,
// };

export default CardDetails;
