import React from 'react';
import PropTypes from 'prop-types';
import Section from './components/Section/Section';
import LeftButton from './components/LeftButton/LeftButton';
import Card from './components/Card/Card';
import RightButton from './components/RightButton/RightButton';
import CarouselContainer from './styles';

const Carousel = ({ relatedIds }) => (
  <div data-test="component-carousel">
    <CarouselContainer>
      <Section />
      <LeftButton />
      <Card relatedIds={relatedIds} />
      <RightButton />
    </CarouselContainer>
  </div>
);

Carousel.propTypes = {
  relatedIds: PropTypes.string,
};

Carousel.defaultProps = {
  relatedIds: null,
};

export default Carousel;
