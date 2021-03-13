import React from 'react';
import { FactorDiv } from './styles.js';
import Mark from './Mark.js';
import {colorGreen} from '../../../../ui/ui-colors';
import labels from '../../labels.js';

const Factor = ({ label, rating, width }) => {
  const loweredCased = label[0].toLowerCase().concat(label.slice(1));
  const renderLabels = (labels, label) => labels[loweredCased].map((description, index) => {
    if (label === 'Quality' || label === 'Comfort') {
      if (index === 0 || index === labels[loweredCased].length - 1) {
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
    <FactorDiv id='factor' width={width} margin={rating / 5 * width}>
      <span className="labelTop">{label}</span>
      <div className="bar">
        <div className="mark"><Mark color={colorGreen}/></div>
      </div>
      <div className="labels">{renderLabels(labels, label)}</div>
    </FactorDiv>
  );
};

export default Factor;
