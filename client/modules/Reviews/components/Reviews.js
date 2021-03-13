import React, { useState } from 'react';
import { get } from 'axios';

import { ReviewsContainer, TopContainer } from './styles';
import ReviewCount from './reviewComp/ReviewCount';
import ReviewList from './reviewComp/ReviewList';
import Sort from './reviewComp/Sort';
import Buttons from './reviewComp/Buttons';
import AddReview from './reviewComp/AddReview';

const Reviews = ({
  data, filters, metaData, placeholder, refresh, productId,
}) => {
  const [showModal, setShow] = useState(false);

  // State for setting sorted data from API
  const [sortedData, setData] = useState();

  // Keep track of type of sort user chose
  const [sortValue, changeSortMethod] = useState('relevant');

  // Keep track of number of tiles to show
  // default is 2
  const [numTiles, changeNumTiles] = useState(2);

  // Get all reviews with a specific product id and sorting method
  const getAllReviews = (productId, sortValue = 'newest') => get(`/reviews?product_id=${productId}&page=1&sort=${sortValue}`);

  const closeModal = () => {
    setShow(false);
  };

  const openModal = () => {
    setShow(true);
  };

  // Filter list based on filter passed in
  const filterByFilter = (filter, data) => {
    if (Object.keys(filters).length === 0) {
      return data;
    }
    return data.filter((comment) => filter[comment.rating]);
  };

  // Function to expand the number of comments
  const expand = () => {
    changeNumTiles(numTiles + 2);
  };

  // Get sorted data from api based on current sorting method
  const getSortMethod = (event) => {
    const target = event.target.value;
    changeSortMethod(target);
    getAllReviews(productId, target)
      .then((result) => setData(result.data.results))
      .catch((err) => { throw err; });
  };

  return (
    <ReviewsContainer id="reviews">
      {placeholder ? <h4>Loading</h4>
        : (
          <>
            <TopContainer>
              <ReviewCount count={data && data.length} />
              ,
              <Sort getSortMethod={getSortMethod} sortValue={sortValue} />
            </TopContainer>
            <ReviewList data={filterByFilter(filters, sortedData || data).slice(0, numTiles)} />
            <Buttons
              openModal={openModal}
              reviewCount={data && data.length}
              dataIndex={numTiles}
              expand={expand}
            />
            <AddReview
              refresh={refresh}
              metaData={metaData}
              closeModal={closeModal}
              showModal={showModal}
            />
          </>
        )}
    </ReviewsContainer>
  );
};

export default Reviews;
