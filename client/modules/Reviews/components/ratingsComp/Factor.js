import React from 'react';
import { FactorDiv } from './styles.js';
import Mark from './Mark.js';

const labels = {
  Size: ['Too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'Too big'],
  Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
  Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
  Quality: ['Poor', 'Below Average', 'Expected', 'Pretty great', 'Perfect'],
  Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
  Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'],
};

const Factor = ({ label, rating, width }) => {
  const renderLabels = (labels, label) => labels[label].map((description, index) => {
    if (label === 'Quality' || label === 'Comfort') {
      if (index === 0 || index === labels[label].length - 1) {
        return (
          <span key={index} className='labelBottom'>{description}</span>
        );
      }
    } else if (index % 2 === 0) {
      return (
        <span key={index} className='labelBottom'>{description}</span>
      );
    }
  });

  return (
    <FactorDiv width={width} margin={rating / 5 * width}>
      <span className="labelTop">{label}</span>
      <div className="bar">
        <div className="mark"><Mark /></div>
      </div>
      <div className="labels">{renderLabels(labels, label)}</div>
    </FactorDiv>
  );
};

export default Factor;
