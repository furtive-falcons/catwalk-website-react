import React from 'react';
import Section from './components/Section/Section';
import LeftButton from './components/LeftButton/LeftButton';
import Card from './components/Card/Card';
import RightButton from './components/RightButton/RightButton';

const Carousel = () => (
  <div data-test="component-carousel">
    <Section />
    <LeftButton />
    <Card />
    <RightButton />
  </div>
);

export default Carousel;
