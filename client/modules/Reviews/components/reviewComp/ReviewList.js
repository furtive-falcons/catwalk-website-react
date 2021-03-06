import React, { useState, useEffect } from 'react';
import { ReviewListContainer } from './styles.js';
import Tile from './Tile.js';
import AddReview from './AddReview.js';
import Form from './formComp/Form.js';

const ReviewList = ({ data }) => {
  const [showModal, setShow] = useState(false);
  const close = () => {
    setShow(false);
  };
  return (
    <ReviewListContainer id="reviewList">
      <Form />
      {showModal && <AddReview close={close} showModal={showModal} />}
      {/* render tiles two at a time */}
      {/* define a handleclick event to trigger show two more tiles */}
      {
       data
        && data.map((product) => (
          <Tile
            helpfulness={product.helpfulness}
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
};

export default ReviewList;
