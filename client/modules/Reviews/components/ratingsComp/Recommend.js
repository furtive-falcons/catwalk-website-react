import React from 'react';
import { RecDiv } from './styles.js';

const Recommend = ({ recommend }) => (
  <RecDiv>
    <span>{recommend && (parseInt(recommend.true) / (parseInt(recommend.true) + parseInt(recommend.false))).toFixed(0) * 100}% </span>
    of reviews recommend this product
  </RecDiv>
);

export default Recommend;
