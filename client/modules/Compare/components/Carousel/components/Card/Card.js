import React from 'react';
import CardAssets from './components/CardAssets/CardAssets.js'
import CardDetails from './components/CardDetails/CardDetails.js'
import {CardContainer} from './styles.js'
// client/modules/Compare/components/Carousel/styles.js
// map over all cards in related products
const Card = () => {
    return (
      <div>

        <CardContainer>
          <CardAssets />
          <CardDetails />
        </CardContainer>
        <CardContainer>
          <CardAssets />
          <CardDetails />
        </CardContainer>
        <CardContainer>
          <CardAssets />
          <CardDetails />
        </CardContainer>
      </div>
    )
}

export default Card;