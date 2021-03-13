import React, { useEffect, useState } from 'react';
import { get } from 'axios';
import Reviews from './components/Reviews';
import Ratings from './components/Ratings';
import { Main, Header, Container } from './styles';

const ReviewAndRatings = ({ productId }) => {
  // filter to pass to list
  const [filters, setFilter] = useState({});
  const [allReviews, setReviews] = useState(null);
  const [meta, setMeta] = useState(null);

  // get filter from the ratings/filter component
  const getFilter = (filter) => {
    const target = {};
    // Check if the filter already exist
    if (filters[filter]) {
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
  const getAllReviews = (productId) => get(`/reviews?product_id=${productId}&page=1&sort=relevant`);

  // get meta data
  const getMeta = (productId) => get(`/reviews/meta?product_id=${productId}`);

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
          : <Ratings placeholder />}
        {meta && allReviews
          ? <Reviews refresh={refresh} productId={productId} data={allReviews.results} metaData={meta} filters={filters} id="reviews" />
          : <Reviews placeholder />}
      </Container>
    </Main>
  );
};

export default ReviewAndRatings;
