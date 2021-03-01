import React from 'react'
import Reviews from './components/Reviews.js';
import Ratings from './components/Ratings.js';
import Container from './styles.js';

const dummy = [{'product_id': 1},{'product_id': 2}]

const ReviewAndRatings = () => {
    return (
        <Container id = 'mainWrapper'>
            <Ratings id = 'ratings'/>
            <Reviews id = 'reviews'/>
        </Container>
    )
}

export default ReviewAndRatings;
