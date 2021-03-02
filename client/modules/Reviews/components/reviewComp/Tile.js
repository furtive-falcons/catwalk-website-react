import React from 'react';
import { TileContainer } from './styles.js';
import {ResponseContainer, ReviewContainer, TopRow, Stars, UserAndDate, Summary, Body, Recommend, Response, Helpful} from './tileStyles.js';

const Tile = ({ id }) => (
  <TileContainer id="tile">
    {/* container for the top part */}
      <TopRow>
        <Stars>Stars</Stars>
        <UserAndDate>User, MM/DD/YYYY</UserAndDate>
      </TopRow>
      <ReviewContainer>
        <Summary>Summary</Summary>
        <Body>The actual body is here</Body>
        <Recommend>I recommend this product</Recommend>
        <ResponseContainer>
          <Response>Seller response is here</Response>
        </ResponseContainer>
        <Helpful>Was this helpful? Yes No</Helpful>
      </ReviewContainer>
  </TileContainer>
);

export default Tile;
