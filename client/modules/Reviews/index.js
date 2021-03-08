import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Reviews from './components/Reviews.js';
import Ratings from './components/Ratings.js';
import dummy from './dummy.js';
import dummy2 from './dummy2.js';
import { Main, Header, Container } from './styles.js';

const ReviewAndRatings = () => {
  // filter to pass to list
  const [filters, setFilter] = useState({});

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

  return (
    <Main id="reviews">
      <Header>REVIEWS & RATINGS</Header>
      <Container id="mainWrapper">
        <Ratings
          removeFilters={removeFilters}
          filters={filters}
          getFilter={getFilter}
          metaData={dummy2}
          data={dummy.results}
          id="ratings"
        />
        <Reviews filters={filters} data={dummy.results} id="reviews" />
      </Container>
    </Main>
  );
};

export default ReviewAndRatings;
