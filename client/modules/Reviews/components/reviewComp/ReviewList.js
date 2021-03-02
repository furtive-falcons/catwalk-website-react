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
          <Tile body = {product.body} key={product.product_id} id={product.product_id} />
        ))

    }
  </ReviewListContainer>
);

export default ReviewList;
