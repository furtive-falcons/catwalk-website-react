import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Reviews from './components/Reviews.js';
import Ratings from './components/Ratings.js';
import dummy from './dummy.js';
import dummy2 from './dummy2.js';
import { Main, Header, Container } from './styles.js';

const ReviewAndRatings = ({ productId }) => {
  // filter to pass to list
  const [filters, setFilter] = useState({});
  const [allReviews, setReviews] = useState(null);
  const [meta, setMeta] = useState(null);

  // get filter from the ratings/filter component
  const getFilter = (filter) => {
    const target = {};
    // check if the filter already exist
    // if it already exist then toggle it on/off
    if (filters.hasOwnProperty(filter)) {
      setFilter((filters) => {
        delete filters[filter];
        return filters;
      });
    } else {
      // if not then set the filter to true
      target[filter] = true;
    }
    setFilter((filters) => Object.assign(target, filters));
  };

  // remove all filters
  const removeFilters = () => {
    setFilter({});
  };

  // get all reviews
  const getAllReviews = (productId) => axios.get(`/api/reviews?product_id=${productId}`);

  // get meta data
  const getMeta = (productId) => axios.get(`/api/reviews/meta?product_id=${productId}`);

  useEffect(() => {
    // first get all reviews
    getAllReviews(productId)
      .then((result) => {
        setReviews(result.data);

        // then get the meta data
        return getMeta(productId);
      })
      .then((meta) => {
        setMeta(meta.data);
      })
      .catch((err) => console.log(`error in getting initial data${err}`));
  }, [productId]);

  return (
    <Main id="reviews">
      <Header>REVIEWS & RATINGS</Header>
      <Container id="mainWrapper">
        {/* {allReviews && meta
          ? <Ratings removeFilters={removeFilters} filters={filters} getFilter={getFilter} metaData={meta} data={allReviews.results} id="ratings" />
          :
        // some kind of placeholder component to show before the actual component is loaded
          <Ratings placeholder/>}
        {allReviews && meta
          ? <Reviews metaData={meta} filters={filters} data={allReviews.results} id="reviews" />
          : <Reviews placeholder/>} */}
          <Ratings removeFilters={removeFilters} filters={filters} getFilter={getFilter} metaData={dummy2} data={dummy.results} id="ratings" />
          <Reviews metaData={dummy2} filters={filters} data={dummy.results} id="reviews" />
      </Container>
    </Main>
  );
};

export default ReviewAndRatings;
