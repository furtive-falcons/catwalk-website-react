import React from 'react';
import { arrayOf, oneOfType, object } from 'prop-types';
import Section from './components/Section/Section';
import CardList from './components/CardList/CardList';
import CarouselContainer from './styles';

const Carousel = ({ relatedProducts }) => (
  <div data-test="component-carousel">
    <CarouselContainer>
      <Section />
      <CardList cardList={relatedProducts} />
    </CarouselContainer>
  </div>
);

Carousel.propTypes = {
  relatedProducts: arrayOf(oneOfType([object])),
};

Carousel.defaultProps = {
  relatedProducts: [],
};

export default Carousel;
