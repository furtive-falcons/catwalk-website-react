import React from 'react';
import Button from '../../../../components/Button';
import Paragraph from '../../../../components/Paragraph';
import DivStyles from './styles';

const Banner = () => {
  const paragraph = `site ${' '} - ${' '} wide announcement message! ${' '}- ${' '} sale / discount`;
  return (
    <DivStyles>
      <Paragraph className="first" paragraph={paragraph} />
      <span className="first"> &nbsp; offer &nbsp; </span> -
      <Button className="first" name="new product highlight" />
    </DivStyles>
  );
};

export default Banner;
