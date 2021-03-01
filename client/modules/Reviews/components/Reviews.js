import React, { useState } from 'react';
import { ReviewsContainer } from './styles.js';
import ReviewCount from './reviewComp/ReviewCount.js';
import ReviewList from './reviewComp/ReviewList.js';
import Buttons from './reviewComp/Buttons.js';

const Reviews = () => {
  // Keep track of number of tiles to show
  // default is 2
  // depends on number of reviews passed in
  const [numTiles, changeNumTiles] = useState(2);
  // Function to change the number of tiles to show

  const expand = () => {
    changeNumTiles(numTiles + 2);
    console.log('expanded!');
  };

  return (
    <ReviewsContainer>
      {/* review count + sort container */}
      <ReviewCount />
      {/* review list container */}
      <ReviewList />
      {/* buttons container */}
      <Buttons expand={expand} />
    </ReviewsContainer>
  );
};

export default Reviews;
