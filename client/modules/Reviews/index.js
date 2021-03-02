import React, { useEffect , useState} from 'react';
import axios from 'axios';
import Reviews from './components/Reviews.js';
import Ratings from './components/Ratings.js';
import Container from './styles.js';

const dummy = [
  { product_id: 1, body: 'Donut gummit bears gingerbread gummies chocolate, ice cream apple pie tiramisu fruitcake chupachups icing apple pie. lemon drops cake pudding pudding Donut gummit bears gingerbread gummies chocolate, ice cream apple pie tiramisu fruitcake chupachups icing apple pie. lemon drops cake pudding pudding' }, { product_id: 2, body: 'abc' },
  { product_id: 3, body: 'abc' },
//   { product_id: 4 }, { product_id: 5 }, { product_id: 6 }
];

const ReviewAndRatings = () => {
  const [data,setData] = useState([]);
  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews?product_id=14931', {
      headers: {
        Authorization: '052643839695a3650fc8030653a0cdb91c5b9b25',
      },
    })
      .then((result) => setData(result.data.results));
  }, []);
  return (
    <Container id="mainWrapper">
      <Ratings id="ratings" />
      <Reviews data={data} id="reviews" />
    </Container>
  );
};

export default ReviewAndRatings;
