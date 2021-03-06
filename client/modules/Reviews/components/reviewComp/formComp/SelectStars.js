import React, { useState } from 'react';
import Star from '../../../../../components/StarRating/FullStar.js';

const messages = {
  0: 'Poor',
  1: 'Fair',
  2: 'Average',
  3: 'Good',
  4: 'Great'
};

const SelectableStars = () => {
  const [off, setOff] = useState(true);
  const [index, setIndex] = useState(-1);

  const click = (id) => {
    // get the index
    setIndex(id);
  };
  // 1. have all stars empty
  // 2. calculate how many are full on mouse movement over the div
  // 3. save the calculation in state
  // 4. upon clicking then save the result
  return (
    <div>
      {
      [0, 1, 2, 3, 4].map((id) => (

        <Star id={id} key={id} empty={id > index? off: !off} click={() => click(id)} size={17} />
      ))
      }
      {messages[index]}
    </div>
  );
};

export default SelectableStars;
