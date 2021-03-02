import React from 'react';
import Reviews from './components/Reviews.js';
import Ratings from './components/Ratings.js';
import Container from './styles.js';

const dummy = [
  { product_id: 1 }, { product_id: 2 },
  { product_id: 3 }, { product_id: 4 }, { product_id: 5 }, { product_id: 6 }
];

const ReviewAndRatings = () => (
  <Container id="mainWrapper">
    <Ratings id="ratings" />
    <Reviews data={dummy} id="reviews" />
  </Container>
);

export default ReviewAndRatings;
