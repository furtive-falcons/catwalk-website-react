import React from 'react';
import CardAssets from './components/CardAssets/CardAssets';
import CardDetails from './components/CardDetails/CardDetails';
import CardContainer from './styles';
// import LeftButton from '../LeftButton/LeftButton';

// map over all cards in related products
const CardList = ({ relatedDummyData }) => (
  <div>
    {relatedDummyData.map((card) => (
      <CardContainer key={card.id}>
        <CardAssets card={card} key={`assets_${card.id}`} />
        <CardDetails card={card} key={`details_${card.id}`} />
      </CardContainer>
    ))}
  </div>
);

export default CardList;
