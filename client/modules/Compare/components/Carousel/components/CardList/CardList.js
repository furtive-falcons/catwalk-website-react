import React, { useState, lazy, Suspense } from 'react';
import { arrayOf, oneOfType, object } from 'prop-types';
// import CardAssets from './components/CardAssets/CardAssets';
// import CardDetails from './components/CardDetails/CardDetails';
import { CardListContainer, CardContainer, ButtonContainer } from './styles';
// import Button from '../../../../../../components/Button'
const CardAssets = lazy(() => import('./components/CardAssets/CardAssets'));
const CardDetails = lazy(() => import('./components/CardDetails/CardDetails'));

const CardList = ({ cardList }) => {
  const [index, setIndex] = useState(0);
  if (!Array.isArray(cardList.data) || cardList.data.length <= 0) {
    return null;
  }

  const { length } = cardList.data;

  const canGoLeft = index > 0;

  const goLeft = () => {
    if (canGoLeft) {
      setIndex(index - 1);
    }
  };

  const canGoRight = index < length - 5;

  const goRight = () => {
    if (canGoRight) {
      setIndex(index + 1);
    }
  };

  const cardListPage = cardList.data.slice(index, index + 5);
  // id="component-cardlist", id="carousel-buttons"
  return (
    <div data-test="component-cardlist">
      <CardListContainer>
        <Suspense fallback={<div>Loading...</div>}>
          <ButtonContainer>
            {canGoLeft ? (
              <button className="left-prev-button" type="button" label="left" onClick={goLeft} data-test="component-button">
                <i className="fas fa-chevron-left" />
              </button>
            ) : null}
            {canGoRight ? (
              <button className="right-prev-button" type="button" lable="right" onClick={goRight} data-test="component-button">
                <i className="fas fa-chevron-right" />
              </button>
            ) : null}

          </ButtonContainer>
          <div id="component-cardlist">
            {cardListPage.map((card) => (
              <CardContainer key={`container_${card.id}`}>
                <CardAssets card={card} key={`assets_${card.id}`} />
                <CardDetails card={card} key={`details_${card.id}`} />
              </CardContainer>
            ))}
          </div>
        </Suspense>
      </CardListContainer>
    </div>
  );
};

CardList.propTypes = {
  cardList: arrayOf(oneOfType([object])),
};

CardList.defaultProps = {
  cardList: [],
};

export default CardList;

/*
{canGoLeft
            ? <Button className="left-prev-button"
            handleOnClick={goLeft} primary
            icon="chevron-left">
          </Button>
          : null}

          {canGoRight
            ? <Button className="right-prev-button"
            handleOnClick={goRight}
            primary icon="chevron-right">
          </Button>
          : null}
*/
