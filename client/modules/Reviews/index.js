import React from 'react';
import Reviews from './components/Reviews.js';
import Ratings from './components/Ratings.js';
import Container from './styles.js';

const dummy = [
  { product_id: 1, body: "Donut gummit bears gingerbread gummies chocolate, ice cream apple pie tiramisu fruitcake chupachups icing apple pie. lemon drops cake pudding pudding Donut gummit bears gingerbread gummies chocolate, ice cream apple pie tiramisu fruitcake chupachups icing apple pie. lemon drops cake pudding pudding"}, { product_id: 2 , body: "abc"},
  { product_id: 3 ,body: "abc"},
//   { product_id: 4 }, { product_id: 5 }, { product_id: 6 }
];

const ReviewAndRatings = () => (
  <Container id="mainWrapper">
    <Ratings id="ratings" />
    <Reviews data={dummy} id="reviews" />
  </Container>
);

export default ReviewAndRatings;
