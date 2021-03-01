import React from 'react';
import Button from '../../../../components/Button';
import Paragraph from '../../../../components/Paragraph';
import DivStyles from './styles';

const Banner = () => {
  const paragraph = `site - wide announcement message! - sale / discount `;
  const actionText = `new product highlight`
  const offerText = ` offer - `
  return (
    <DivStyles>
      <Paragraph className="first">
        {paragraph}
        <strong>{offerText}</strong> 
        <a href="#">{actionText}</a>
      </Paragraph>
    </DivStyles>
  );
};

export default Banner;
