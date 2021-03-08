import React from 'react';
// import PropTypes from 'prop-types';
import Category from './components/Category/Category';
import ProductName from './components/ProductName/ProductName';
import Price from './components/Price/Price';
import AvgRating from './components/AvgRating/AvgRating';
// import ProductCategory from '../../../../../../../../components/ProductCategory';
// import Price from '../../../../../../../../components/Price';
// import ProductTitle from '../../../../../../../../components/ProductTitle';
import StarRating from '../../../../../../../../components/StarRating';

const CardDetails = ({ card }) => (
  <div>
    <Category card={card.category} />
    <ProductName card={card.name} />
    <Price card={`$${card.default_price}`} />
    {/* <AvgRating /> */}
    <StarRating rating={card.ratingAverage}/>
  </div>
);

// CardDetails.propTypes = {
//   default_price: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   category: PropTypes.string.isRequired,
// };

export default CardDetails;
