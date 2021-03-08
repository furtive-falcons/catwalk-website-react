import React, { useState } from 'react';
import CardAssets from './components/CardAssets/CardAssets';
import CardDetails from './components/CardDetails/CardDetails';
import { CardListContainer, CardContainer, ButtonContainer} from './styles';
import Button from '../../../../../../components/Button'
// import LeftButton from '../LeftButton/LeftButton';
// import RightButton from '../RightButton/RightButton';

// map over all cards in related products
const CardList = ({ cardList }) => {
  const [index, setIndex] = useState(0);
  console.log('cardList1', cardList.data)
  if (!Array.isArray(cardList.data) || cardList.data.length <= 0 ) {
    return null;
  } 
  
  const length = cardList.data.length;

  const canGoLeft = index > 0
  
  const goLeft = () => {
    if (canGoLeft) {
      setIndex(index - 1)
    }
  }

  const canGoRight = index < length - 5;

  const goRight  = () => {
    if (canGoRight) {
      setIndex(index + 1)
    }
  }

  console.log('cardList2', cardList.data)
  let cardListPage = cardList.data.slice(index, index + 5);

  return (
    <CardListContainer>
      <ButtonContainer>
        {canGoLeft ? <button className="left-prev-button" type="button" label="left" onClick={goLeft}>
          <i className="fas fa-chevron-left" />
        </button> : null}
        {canGoRight ? <button className="right-prev-button" type="button" lable="right" onClick={goRight}>
          <i className="fas fa-chevron-right" />
        </button> : null}

        {/* {canGoLeft ? <Button className="left-prev-button" handleOnClick={goLeft} primary icon="chevron-left">
        </Button> : null}

        {canGoRight ? <Button className="right-prev-button" handleOnClick={goRight} primary icon="chevron-right">
        </Button> : null} */}
      </ButtonContainer>
      {cardListPage.map(card => {
        return (
          <CardContainer key={`container_${card.id}`}>
              <CardAssets card={card} key={`assets_${card.id}`} />
              {/* <CardDetails card={card} key={`details_${card.id}`} /> */}
          </CardContainer>
        )
      })}
    </CardListContainer>
  )
};

export default CardList;

/* 

<>
  {hasImage ? <CardContainer key={`container_${card.id}`}>
    <CardAssets card={card} key={`assets_${card.id}`} />
    </CardContainer> : null}
</>
*/
