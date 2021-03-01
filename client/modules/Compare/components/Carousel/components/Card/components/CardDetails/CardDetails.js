import React from 'react';
import Category from './components/Category/Category';
import ProductName from './components/ProductName/ProductName';
import Price from './components/Price/Price';
import AvgRating from './components/AvgRating/AvgRating';

const CardDetails = () => (
  <div>
    <Category />
    <ProductName />
    <Price />
    <AvgRating />
  </div>
);

export default CardDetails;
