import React from 'react'
import {ReviewsContainer} from './styles.js';
import ReviewCount from './reviewComp/ReviewCount.js';
import ReviewList from './reviewComp/ReviewList.js';
import Buttons from './reviewComp/Buttons.js';

const Reviews = () => {
    return (
        <ReviewsContainer>
          {/* review count + sort container */}
          <ReviewCount/>
          {/* review list container */}
          <ReviewList/>
          {/* buttons container */}
          <Buttons/>
        </ReviewsContainer>
    )
}

export default Reviews;
