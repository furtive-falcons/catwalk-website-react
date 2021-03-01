import React, {useState} from 'react';
import {ReviewListContainer} from './styles.js';
import Tile from './Tile.js';

const ReviewList = () => {

  return (
    <ReviewListContainer id = 'reviewList'>
      {/* render tiles two at a time */}
      {/* define a handleclick event to trigger show two more tiles */}
      <Tile/>
      <Tile/>
    </ReviewListContainer>
  )
}

export default ReviewList;