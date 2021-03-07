import React from 'react';
import Paragraph from '../Paragraph';
import Title from '../Title';

const Slogan = ({ slogan, description }) => (
  <>
    <Title>{slogan}</Title>
    <Paragraph>{description}</Paragraph>
  </>
);

export default Slogan;
