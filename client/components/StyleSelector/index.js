import React from 'react';
import Paragraph from '../Paragraph';
import Button from '../Button';

const StyleSelector = () => {
  const paragraph = 'Style > Selected Style';
  return (
    <>
      <Paragraph>{paragraph}</Paragraph>
      <Button name="circle" />
      <i className="fas fa-check" />
    </>
  );
};

export default StyleSelector;
