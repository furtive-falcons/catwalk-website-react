import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Reviews from './components/Reviews.js';
import Ratings from './components/Ratings.js';
import { Main, Header, Container } from './styles.js';

const ReviewAndRatings = ({ productId }) => {
  // filter to pass to list
  const [filters, setFilter] = useState({});
  const [allReviews, setReviews] = useState(null);
  const [meta, setMeta] = useState(null);

  // get filter from the ratings/filter component
  const getFilter = (filter) => {
    const target = {};
    // Check if the filter already exist
    // If it already exist then toggle it on/off
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
  const getAllReviews = (productId) => axios.get(`/reviews?product_id=${productId}&page=1`);

  // get meta data
  const getMeta = (productId) => axios.get(`/reviews/meta?product_id=${productId}`);

  // refresh page
  const refresh = () => {
    getAllReviews(productId)
      .then((result) => {
        setReviews(result.data);
        return getMeta(productId);
      })
      .then((meta) => {
        setMeta(meta.data);
      })
      .catch((err) => { throw err; });
  };

  useEffect(() => {
    refresh();
  }, [productId]);

  return (
    <Main id="reviews">
      <Header>REVIEWS & RATINGS</Header>
      <Container id="mainWrapper">
        {allReviews && meta
          ? <Ratings removeFilters={removeFilters} filters={filters} getFilter={getFilter} metaData={meta} data={allReviews.results} id="ratings" />
          :
        // some kind of placeholder component to show before the actual component is loaded
          <Ratings placeholder />}
        {allReviews && meta
          ? <Reviews refresh={refresh} metaData={meta} filters={filters} data={allReviews.results} id="reviews" />
          : <Reviews placeholder />}
      </Container>
    </Main>
  );
};

export default ReviewAndRatings;
