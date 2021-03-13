import React from 'react';
import {
  arrayOf, string, number, exact,
} from 'prop-types';
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
  relatedProducts: arrayOf(exact({
    id: number,
    name: string,
    category: string,
    features: arrayOf(exact({
      feature: string,
      value: string,
    })),
    original_price: string,
    sale_price: string,
    thumbnail_url: string,
    ratingAverage: number,
  })),
};

Carousel.defaultProps = {
  relatedProducts: {},
};

export default Carousel;
