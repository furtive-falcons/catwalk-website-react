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
  
  if (!Array.isArray(cardList) || cardList.length <= 0 ) {
    return null;
  } 
  
  const length = cardList.length;

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

  // let cardListArr = [1, 2, 3, 4, 5];
  // let index = 0;
  let cardListPage = cardList.slice(index, index + 5);

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
      {cardListPage.map((card) => {
        return (
          <div className="card">
              <CardContainer key={card.id}>
                <CardAssets card={card} key={`assets_${card.id}`} />
                <CardDetails card={card} key={`details_${card.id}`} />
              </CardContainer>
          </div>
        )
      })}
    </CardListContainer>
  )
};

export default CardList;

/* 

this works mostly
import React, { useState } from 'react';
import CardAssets from './components/CardAssets/CardAssets';
import CardDetails from './components/CardDetails/CardDetails';
import { CardListContainer, CardContainer, ButtonContainer} from './styles';
// import LeftButton from '../LeftButton/LeftButton';
// import RightButton from '../RightButton/RightButton';

// map over all cards in related products
const CardList = ({ cardList }) => {
  const [x, setX] = useState(0);
  const length = cardList.length;
  
  const goLeft = () => {
    (x === 0) ? setX( -100 * (cardList.length - 1)) : setX(x + 100);
  }

  const goRight  = () => {
    (x === -100 * (cardList.length - 1)) ? setX(0) : setX(x - 100);
  }

  if (!Array.isArray(cardList) || cardList.length <= 0 ) {
    return null;
  } 

  // let cardListArr = [1, 2, 3, 4, 5];

  return (
    <CardListContainer>
      <ButtonContainer>

        <button className="left-prev-button" type="button" label="left" onClick={goLeft}>
          <i className="fas fa-chevron-left" />
        </button>
        <button className="right-prev-button" type="button" lable="right" onClick={goRight}>
          <i className="fas fa-chevron-right" />
        </button>
      </ButtonContainer>
      {cardList.map((card, index) => {
        return (
          <div className="card" style={{ transform: `translateX(${x}%)`}}>
              <CardContainer key={card.id}>
                <CardAssets card={card} key={`assets_${card.id}`} />
                <CardDetails card={card} key={`details_${card.id}`} />
              </CardContainer>
          </div>
        )
      })}
    </CardListContainer>
  )
};

export default CardList;
*/





// let settings = {
//   infinite: false,
//   speed: 1000,
//   arrows: true,
//   slidesToShow: 5,
//   slidesToScroll: 4,
// }
/* import React, { useState } from 'react';
import CardAssets from './components/CardAssets/CardAssets';
import CardDetails from './components/CardDetails/CardDetails';
import { CardListContainer, CardContainer, ButtonContainer} from './styles';
// import LeftButton from '../LeftButton/LeftButton';
// import RightButton from '../RightButton/RightButton';

// map over all cards in related products
const CardList = ({ cardList }) => {
  const [current, setCurrent] = useState(0);
  const length = cardList.length;

  const nextCard  = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevCard  = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }


  if (!Array.isArray(cardList) || cardList.length <= 0 ) {
    return null;
  } 

  let cardListArr = [1, 2, 3, 4, 5];

  return (
    <CardListContainer>
      <ButtonContainer>
        <button className="left-prev-button" type="button" label="left" onClick={prevCard}>
          <i className="fas fa-chevron-left" />
        </button>
        <button className="right-prev-button" type="button" lable="right" onClick={nextCard}>
          <i className="fas fa-chevron-right" />
        </button>
      </ButtonContainer>
      {cardList.map((card, index) => {
        return (
          <div className={index === current ? 'card active' : 'card'} key={`className_${card.id}`}>
            {index === current && (
              <CardContainer key={card.id}>
                <CardAssets card={card} key={`assets_${card.id}`} />
                <CardDetails card={card} key={`details_${card.id}`} />
              </CardContainer>
            )}
          </div>
        )
      })}
    </CardListContainer>
  )
};

export default CardList;

*/
