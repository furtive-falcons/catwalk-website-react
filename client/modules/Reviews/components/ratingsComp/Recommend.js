import React from 'react';
import { RecDiv } from './styles.js';

const Recommend = ({ recommend }) => {
  const numRec = parseInt(recommend.true, 10);
  const numNotRec = recommend.false ? parseInt(recommend.false, 10) : 0;
  const recPercent = numRec ? (numRec / (numNotRec + numRec)).toFixed(2) * 100 : 0;

  return (
    <RecDiv>
      <span>
        {recPercent}
        %
      </span>
      {' '}
      <br />
      of reviews recommend this product
    </RecDiv>
  );
};

export default Recommend;
