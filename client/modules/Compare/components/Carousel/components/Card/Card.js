import React from 'react';
import CardAssets from './components/CardAssets/CardAssets.js'
import CardDetails from './components/CardDetails/CardDetails.js'

const Card = () => {
    return (
      <div>
        map over all cards in related products
        <CardAssets />
        <CardDetails />
      </div>
    )
}

export default Card;