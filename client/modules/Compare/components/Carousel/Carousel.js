import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Section from './components/Section/Section';
import CardList from './components/CardList/CardList';
import CarouselContainer from './styles';

const Carousel = ({ relatedProducts }) => {
    return (
      <div data-test="component-carousel">
        <CarouselContainer>
          <Section />
          <CardList cardList={relatedProducts} />
        </CarouselContainer>
      </div>
    );
};

Carousel.propTypes = {
  relatedIds: PropTypes.string,
};

Carousel.defaultProps = {
  relatedIds: null,
};

export default Carousel;
