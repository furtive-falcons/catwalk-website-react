import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Reviews from './components/Reviews.js';
import Ratings from './components/Ratings.js';
import dummy from './dummy.js';
import dummy2 from './dummy2.js';
import { Header, Container } from './styles.js';

const ReviewAndRatings = () => {
  const [data, setData] = useState([]);

  // filter to pass to list
  const [filters, setFilter] = useState({});

  // get filter from the ratings/filter component
  const getFilter = (filter) => {
    const target = {};
    // check if the filter already exist
    // if it already exist then toggle it on/off
    if (filters.hasOwnProperty(filter)) {
      setFilter((filters)=>{
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

  // const dateScore = (data) => {
  //   const method = 'date';
  //   var today = new Date();
  //   data.map(comment=>{
  //     var date = new Date(comment.date);
  //     var score = 0;
  //     if (date - today === 0) {
  //        score = 1;
  //     } else {
  //       score =
  //     }
  //     return (
  //       {...data, dateScore: }
  //     )
  //   });
  // };

  const sortBy = (data) => {
    const method = 'helpfulness';
    data.sort((a, b) => {
      if (a[method] < b[method]) {
        return -1;
      }
      if (a[method] > b[method]) {
        return 1;
      }
      return 0;
    });
  };

  // add a relevance score to the data
  const addRelevance = (data) =>
    // sort the array from latest to highest
    // map out dataset with an addtional field for relevance score
    data.map((product, index) => {
      const relevance = parseInt(product.helpfulness) + parseInt(index);
      return (
        { ...product, relevance }
      );
    })
  ;

  // useEffect(() => {
  //   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews?product_id=14932', {
  //     headers: {
  //       Authorization: '',
  //     },
  //   })
  //     .then((result) => setData(result.data.results));
  // }, []);

  return (
    <>
      <Header>
        REVIEWS
        &
        {' '}
        RATINGS
      </Header>
      <Container id="mainWrapper">
        <Ratings removeFilters={removeFilters} filters={filters} getFilter={getFilter} metaData={dummy2} data={dummy.results} id="ratings" />
        <Reviews filters={filters} data={dummy.results} id="reviews" />
      </Container>
    </>
  );
};

export default ReviewAndRatings;
