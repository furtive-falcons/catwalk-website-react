import React from 'react';
import { ReviewListContainer } from './styles.js';
import Tile from './Tile.js';

const ReviewList = ({ data }) => (
  <ReviewListContainer id="reviewList">
    {/* render tiles two at a time */}
    {/* define a handleclick event to trigger show two more tiles */}
    {
       data
        && data.map((product) => (
          <Tile
            helpfulness = {product.helpfulness}
            date={product.date}
            user={product.reviewer_name}
            response={product.response}
            summary={product.summary}
            body={product.body}
            key={product.review_id}
            rating={product.rating}
            recommend={product.recommend}
          />
        ))

    }
  </ReviewListContainer>
);

export default ReviewList;
