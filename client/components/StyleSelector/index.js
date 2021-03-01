import React from 'react';
import Paragraph from '../Paragraph';
import Button from '../Button';

const StyleSelector = () => {
  const styles = [1, 2, 3, 4, 5, 6, 7, 8];

  const paragraph = 'Style > Selected Style';
  return (
    <>
      <Paragraph>{paragraph}</Paragraph>
      {styles.map((index) => (
        <span key={index}>
          <Button />
          <i className="fas fa-check" />
          {index % 4 === 0 ? <br /> : null}
        </span>
      ))}
    </>
  );
};

export default StyleSelector;
