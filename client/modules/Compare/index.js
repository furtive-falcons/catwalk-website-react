import React from 'react';
import Carousel from './components/Carousel/Carousel';
import CarouselContainer from './components/Carousel/styles';
// client/modules/Compare/components/Carousel/styles.js
const Compare = () => (
  <div data-test="component-compare">
    <CarouselContainer>
      <Carousel />
    </CarouselContainer>
    <CarouselContainer>
      <Carousel />
    </CarouselContainer>
  </div>
);

export default Compare;
