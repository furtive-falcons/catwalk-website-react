import React from 'react';
import { RecDiv } from './styles.js';

const Recommend = ({ recommend }) => (
  <div>
    { recommend && (parseInt(recommend.true) / (parseInt(recommend.true) + parseInt(recommend.false))) * 100}
    % of reviews recommend this product
  </div>
);

export default Recommend;
