import React from 'react';
import { ReviewListContainer } from './styles.js';
import Tile from './Tile.js';

const ReviewList = ({ data }) => (
  <ReviewListContainer expand = {data && data.length > 2} id="reviewList">
    {
       data
        && data.map((product) => (
          <Tile
            id="reviews"
            helpfulness={product.helpfulness}
            date={product.date}
            user={product.reviewer_name}
            response={product.response}
            summary={product.summary}
            body={product.body}
            key={product.review_id}
            review_id={product.review_id}
            rating={product.rating}
            recommend={product.recommend}
            images={product.photos}
          />
        ))

    }
  </ReviewListContainer>
);

export default ReviewList;
