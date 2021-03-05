import React from 'react';
import { FactorDiv } from './styles.js';
import Mark from './Mark.js';

const Factor = ({ label, rating }) => (
  <FactorDiv margin={rating / 5 * 250}>
    <span>{label}</span>
    <div className="bar">
      <div className="mark"><Mark /></div>
      <div className="section" />
    </div>
  </FactorDiv>
);

export default Factor;
