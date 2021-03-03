import React from 'react';
import Section from './components/Section/Section';
import LeftButton from './components/LeftButton/LeftButton';
import Card from './components/Card/Card';
import RightButton from './components/RightButton/RightButton';
import CarouselContainer from './styles';

const Carousel = () => (
  <div data-test="component-carousel">
    <CarouselContainer>
      <Section />
      <LeftButton />
      <Card />
      <RightButton />
    </CarouselContainer>
  </div>
);

export default Carousel;
