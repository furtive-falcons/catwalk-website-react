import React, { useState } from 'react';
import Star from '../../../../../components/StarRating/FullStar';
import { StarDiv } from './styles.js';

const messages = {
  0: 'Poor',
  1: 'Fair',
  2: 'Average',
  3: 'Good',
  4: 'Great',
};

const SelectableStars = ({ getRating }) => {
  const [index, setIndex] = useState(-1);

  const click = (id) => {
    // get the index for form submission
    getRating(id + 1);
    setIndex(id);
  };
  return (
    <StarDiv>
      <div>{index > -1 ? messages[index] : <span className="message">Please select</span>}</div>
      <div className="group">
        {
      [0, 1, 2, 3, 4].map((id) => (
        <Star id={id} key={id} empty={id > index} click={() => click(id)} size={25} />
      ))
      }
      </div>
    </StarDiv>
  );
};

export default SelectableStars;
