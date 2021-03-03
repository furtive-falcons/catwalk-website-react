import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Reviews from './components/Reviews.js';
import Ratings from './components/Ratings.js';
import {Header, Container} from './styles.js';

const dummy = [
  { product_id: 1, body: 'Donut gummit bears gingerbread gummies chocolate, ice cream apple pie tiramisu fruitcake chupachups icing apple pie. lemon drops cake pudding pudding Donut gummit bears gingerbread gummies chocolate, ice cream apple pie tiramisu fruitcake chupachups icing apple pie. lemon drops cake pudding pudding' }, { product_id: 2, body: 'abc' },
  { product_id: 3, body: 'abc' },
//   { product_id: 4 }, { product_id: 5 }, { product_id: 6 }
];

const ReviewAndRatings = () => {
  const [data, setData] = useState([]);

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

  const sortByHelpfulness = (data) => {
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
  const addRelevance = (data) => {
    // sort the array from latest to highest
    // map out dataset with an addtional field for relevance score
    return data.map((product, index) => {
      const relevance = parseInt(product.helpfulness) + parseInt(index);
      return (
        { ...product, relevance }
      );
    });
  };

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews?product_id=14932', {
      headers: {
        Authorization: '',
      },
    })
      .then((result) => setData(result.data.results));
  }, []);
  return (
    <>
    <Header>REVIEWS {'&'} RATINGS</Header>
    <Container id="mainWrapper">
      <Ratings id="ratings" />
      <Reviews data={addRelevance(data)} id="reviews" />
    </Container>
    </>
  );
};

export default ReviewAndRatings;
