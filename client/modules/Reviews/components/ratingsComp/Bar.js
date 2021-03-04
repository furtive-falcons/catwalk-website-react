import React from 'react';
import { BarDiv } from './styles.js';

const Bar = ({rating, total}) => (
  <BarDiv rating={rating} total={total-rating}>

    <div className="dark"></div>
    <div className="light"></div>
  </BarDiv>
);

export default Bar;
