import React from 'react';
import Paragraph from '../Paragraph';
import Title from '../Title';
import SloganWrapper from './styles';

const Slogan = ({ slogan, description }) => (
  <SloganWrapper>
    <Title>{slogan}</Title>
    <Paragraph>{description}</Paragraph>
  </SloganWrapper>
);

export default Slogan;
