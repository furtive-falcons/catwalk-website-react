import React from 'react';
import {ReviewListContainer} from './styles.js';
import Tile from './Tile.js';

const ReviewList = () => {
  return (
    <ReviewListContainer>
      <Tile/>
      <Tile/>
    </ReviewListContainer>
  )
}

export default ReviewList;