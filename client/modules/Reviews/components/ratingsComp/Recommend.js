import React from 'react';
import { RecDiv } from './styles';

const Recommend = ({ recommend }) => {
  const numRec = recommend && parseInt(recommend.true, 10);
  const numNotRec = recommend && (recommend.false ? parseInt(recommend.false, 10) : 0);
  const recPercent = numRec ? (numRec / (numNotRec + numRec)).toFixed(2) * 100 : 0;

  return (
    <RecDiv id="rec">
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
