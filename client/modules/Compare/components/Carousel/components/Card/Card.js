import React from 'react';
import CardAssets from './components/CardAssets/CardAssets';
import CardDetails from './components/CardDetails/CardDetails';
import CardContainer from './styles';
// client/modules/Compare/components/Carousel/styles.js
// map over all cards in related products
const Card = () => (
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
);

export default Card;
