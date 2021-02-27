import React from 'react'
import Reviews from './components/Reviews.js';
import Ratings from './components/Ratings.js';
import Container from './styles.js';

const ReviewAndRatings = () => {
    return (
        <Container id = 'mainWrapper'>
            Reivew and Rating Wrapper
            <Reviews id = 'reviews'/>
            <Ratings id = 'ratings'/>
        </Container>
    )
}

export default ReviewAndRatings;
