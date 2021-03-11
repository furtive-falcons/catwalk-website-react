import React from 'react';
import { BarDiv } from './styles.js';

const Bar = ({ rating, total }) => (
  <BarDiv id="bar" rating={rating} total={total - rating}>

    <div className="dark" />
    <div className="light" />
  </BarDiv>
);

export default Bar;
