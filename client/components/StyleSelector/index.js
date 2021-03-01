import React from 'react';
import Paragraph from '../Paragraph';
import Button from '../Button';

const StyleSelector = () => {
  const paragraph = `Style > Selected Style`;
  return (
    <>
      <Paragraph paragraph={paragraph} />
      <Button name="circle" />
      <i className="fas fa-check"></i>
    </>
  );
};

export default StyleSelector;
