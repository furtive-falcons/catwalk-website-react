import React, { useState } from 'react';
import {
  arrayOf, string, number, exact,
} from 'prop-types';
import { CardListContainer, CardContainer, ButtonContainer } from './styles';

import CardAssets from './components/CardAssets/CardAssets';
import CardDetails from './components/CardDetails/CardDetails';

const CardList = ({ cardList }) => {
  const [index, setIndex] = useState(0);
  if (!Array.isArray(cardList) || cardList.length <= 0) {
    return null;
  }

  const { length } = cardList;

  const goLeft = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const goRight = () => {
    if (index < length - 5) {
      setIndex(index + 1);
    }
  };

  const cardListPage = cardList.slice(index, index + 5);
  return (
    <CardListContainer data-test="component-cardlist">
      <ButtonContainer>
        {index > 0 ? (
          <button className="left-prev-button" type="button" label="left" onClick={goLeft} aria-label="left-previous-button">
            <i className="fas fa-chevron-left" />
          </button>
        ) : null}
        {index < length - 5 ? (
          <button className="right-prev-button" type="button" lable="right" onClick={goRight} aria-label="right-previous-button">
            <i className="fas fa-chevron-right" />
          </button>
        ) : null}
      </ButtonContainer>
      {cardListPage.map((card) => (
        <CardContainer key={`container_${card.id}`}>
          <div className="cardContainer">
            <CardAssets card={card} key={`assets_${card.id}`} />
            <CardDetails card={card} key={`details_${card.id}`} />
          </div>
        </CardContainer>
      ))}
    </CardListContainer>
  );
};

CardList.propTypes = {
  cardList: arrayOf(exact({
    id: number,
    name: string,
    category: string,
    features: arrayOf(exact({
      feature: string,
      value: string,
    })),
    original_price: string,
    sale_price: string,
    thumbnail_url: string,
    ratingAverage: number,
  })),
};

CardList.defaultProps = {
  cardList: null,
};

export default CardList;
