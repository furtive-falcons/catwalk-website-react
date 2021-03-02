import React, { Fragment, useState} from 'react';
import { TileContainer } from './styles.js';
import {
  ResponseContainer, ReviewContainer,
  TopRow, Stars, UserAndDate, Summary, Body, Recommend, Helpful,
} from './tileStyles.js';

const Tile = ({ id, body, summary }) => {
  const [more, showMore] = useState(false);
  return (
    <TileContainer id="tile">
      {/* container for the top part */}
      <TopRow>
        <Stars>Stars</Stars>
        <UserAndDate>User, MM/DD/YYYY</UserAndDate>
      </TopRow>
      <ReviewContainer>
        <Summary>
          Summary
        </Summary>
        <Body>
          {
            body.length > 250 && !more
              ? (
                <>
                  {body.slice(0, 250)}
                  <span onClick = {()=>showMore(true)} className="showMore">Show More</span>
                </>
              )
              :
              body
          }
        </Body>
        <Recommend>
          I recommend this product
          <i className="fas fa-check" />
        </Recommend>
        <ResponseContainer>
          <span>Response: </span>
          <p>Response is here</p>
        </ResponseContainer>
        <Helpful>Was this helpful? Yes No</Helpful>
      </ReviewContainer>
    </TileContainer>
  )
};

export default Tile;
