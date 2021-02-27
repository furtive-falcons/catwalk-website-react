import React from 'react'
import Reviews from './components/Reviews.js';
import Ratings from './components/Ratings.js';

const ReviewAndRatings = () => {
    return (
        <div id = 'mainWrapper'>
            Reivew and Rating Wrapper
            <Reviews id = 'reviews'/>
            <Ratings id = 'ratings'/>
        </div>
    )
}

export default ReviewAndRatings;
