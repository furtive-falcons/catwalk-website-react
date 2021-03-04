import React from 'react';
import FullStar from './FullStar.js';
import PartialStar from './PartialStar.js';

import StarContainer from './styles.js';

// inputs: Number rating, Number size, String color
const StarRating = ({ rating=100, size=17, color="black"}) => {

  // convert the rating to the nearest lowest quarter precision with 2 decimal place
  const convertedRating = (Math.floor(rating / 0.25) * 0.25).toFixed(2);

  // function to render stars
  const renderStars = (rating) => {
    const string = rating.toString();
    // get the number of full stars
    const fullFilled = parseInt(string[0]);

    const fullEmpty = Math.floor(5 - convertedRating);

    // get the partial star's percentage
    const partial = string.slice(2).concat('%');

    const stars = [];
    // render full stars
    for (let i = 0; i < fullFilled; i++) {
      stars.push(<FullStar color={color} size={size} key={i} />);
    }

    // render partial stars if percentage doesnt start with 0
    if (partial[0] !== '0') {
      stars.push(<PartialStar color={color} size={size} key={stars.length} percentage={partial} />);
    }

    // render full empty stars
    // sta
    for (let i = 10; i < (10 + fullEmpty); i++) {
      stars.push(<FullStar size={size} empty key={i} />);
    }

    return stars;
  };

  return (
    <StarContainer>
      {renderStars(convertedRating)}
    </StarContainer>
  );
};

export default StarRating;
