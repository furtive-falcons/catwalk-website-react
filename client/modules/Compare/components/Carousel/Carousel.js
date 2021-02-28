import React from 'react';
import Section from './components/Section/Section.js';
import LeftButton from './components/LeftButton/LeftButton.js';
import Card from './components/Card/Card.js';
import RightButton from './components/RightButton/RightButton.js';

const Carousel = () => {
    return (
      <div data-test="component-carousel">
        <Section />
        <LeftButton />
        <Card />
        <RightButton />
      </div>
    )
}

export default Carousel;