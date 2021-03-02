import React, { useState } from 'react';
import { ReviewsContainer } from './styles.js';
import ReviewCount from './reviewComp/ReviewCount.js';
import ReviewList from './reviewComp/ReviewList.js';
import Buttons from './reviewComp/Buttons.js';

const Reviews = ({ data }) => {
  // Keep track of number of tiles to show
  // default is 2
  // depends on number of reviews passed in
  const [numTiles, changeNumTiles] = useState(2);

  // Function to show only the first n comments, where n is numTiles
  const filterData = (n, data) =>
    // slice data to show only up to nth comments
    data.slice(0, n)
  ;

  // Function to expand the number of comments
  const expand = () => {
    changeNumTiles(numTiles + 2);
    console.log('expanded!');
  };

  return (
    <ReviewsContainer>
      {/* review count + sort container */}
      <ReviewCount />
      {/* review list container */}
      {data.length !== 0 &&
      <ReviewList data={filterData(numTiles, data)} />
      }
      {/* buttons container */}
      <Buttons reviewCount={data.length} dataIndex={numTiles} expand={expand} />
    </ReviewsContainer>
  );
};

export default Reviews;
