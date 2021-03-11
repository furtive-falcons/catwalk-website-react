import React, { useState, useEffect } from 'react';
import { ReviewsContainer, TopContainer } from './styles.js';
import ReviewCount from './reviewComp/ReviewCount.js';
import ReviewList from './reviewComp/ReviewList.js';
import Sort from './reviewComp/Sort.js';
import Buttons from './reviewComp/Buttons.js';
import AddReview from './reviewComp/AddReview.js';
import Form from './reviewComp/formComp/Form.js';
// import Form from './reviewComp/formComp/Form.js';

const Reviews = ({
  data, filters, metaData, placeholder, refresh
}) => {
  // close modal
  const [showModal, setShow] = useState(false);
  const closeModal = () => {
    setShow(false);
  };

  // open modal
  const openModal = () => {
    setShow(true);
  };

  // Keep track of number of tiles to show
  // default is 2
  // depends on number of reviews passed in
  const [numTiles, changeNumTiles] = useState(2);

  // filter list based on filter passed in
  const filterByFilter = (filter, data) => {
    // if there're no filter, then just return the data
    if (Object.keys(filters).length === 0) {
      return data;
    }
    return data.filter((comment) => filter[comment.rating]);
  };

  // keep track of type of sort
  const [sortValue, changeSortMethod] = useState('relevance');

  // Function to show only the first n comments, where n is numTiles
  const filterData = (n, data) => {
    // sort the data
    sort(data, sortValue);
    // slice data to show only up to nth comments with filter applied
    return filterByFilter(filters, data).slice(0, n);
  };

  // Function to expand the number of comments
  const expand = () => {
    changeNumTiles(numTiles + 2);
  };

  // Function to sort the data based on selected sorting method
  // output: sorted list
  const getSortMethod = (event) => {
    const method = event.target.value;
    changeSortMethod(method);
  };

  // normalize helpfulness
  const normalizeHelpful = (data) => {
    // find max helpfulness
    let total = 0;
    for (const comment of data) {
      total += comment.helpfulness;
    }

    // normalize it
    for (const comment of data) {
      comment.normHelpfulness = comment.helpfulness / total;
    }

    return data;
  };

  // normalize dates
  const normalizeDates = (data) => {
    // get the time from 1970 until now
    const today = new Date().getTime();

    for (const comment of data) {
      const date = new Date(comment.date).getTime();
      comment.relevance = date / today + comment.normHelpfulness;
    }
    return data;
  };

  const createRelevance = (data) => {
    normalizeDates(normalizeHelpful(data));
  };

  // sort data based a sorting method
  const sort = (data, method) => {
    if (method === 'relevance') {
      createRelevance(data);
    }
    data.sort((a, b) => {
      if (a[method] > b[method]) {
        return -1;
      }
      if (a[method] < b[method]) {
        return 1;
      }
      return 0;
    });
  };

  return (
    <ReviewsContainer id ='#reviews'>
      {/* review count + sort container */}
      {placeholder ? <h4>Loading</h4>
        : (
          <>
            <TopContainer>
              <ReviewCount count={data && data.length} />
              ,
              sorted by
              <Sort getSortMethod={getSortMethod} sortValue={sortValue} />
            </TopContainer>
            {/* review list container */}
            {data && data.length !== 0
      && <ReviewList data={filterData(numTiles, data)} />}
            {/* buttons container */}
            <Buttons openModal={openModal} reviewCount={data && data.length} dataIndex={numTiles} expand={expand} />
            <AddReview refresh={refresh} metaData={metaData} closeModal={closeModal} showModal={showModal} />
            {/* <Form/> */}
          </>
        )}
    </ReviewsContainer>
  );
};

export default Reviews;
