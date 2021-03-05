import React from 'react';
import { FactorDiv } from './styles.js';
import Mark from './Mark.js';

const Factor = ({ label, rating, width }) => (
  <FactorDiv width={width} margin={rating / 5 * width}>
    <span className='label'>{label}</span>
    <div className="bar">
      <div className="mark"><Mark /></div>
      <div className="section" />
    </div>
  </FactorDiv>
);

export default Factor;
