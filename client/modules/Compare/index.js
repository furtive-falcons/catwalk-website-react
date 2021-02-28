import React from 'react'
import Carousel from './components/Carousel/Carousel.js';
import {CarouselContainer} from './components/Carousel/styles.js'


const Compare = () => {
    return (
        <div data-test="component-compare">
            Related Products
            <CarouselContainer>
                <Carousel />
            </CarouselContainer>
            Your Outfit
            <CarouselContainer>
                <Carousel />
            </CarouselContainer>
        </div>
    )
}

export default Compare;
