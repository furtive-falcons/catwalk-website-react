import React from 'react';
import Category from './components/Category/Category.js'
import ProductName from './components/ProductName/ProductName.js'
import Price from './components/Price/Price.js'
import AvgRating from './components/AvgRating/AvgRating.js'

const CardDetails = () => {
    return (
      <div>
        <Category />
        <ProductName />
        <Price />
        <AvgRating />
      </div>
    )
}

export default CardDetails;