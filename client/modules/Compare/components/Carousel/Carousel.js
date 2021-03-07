import React from 'react';
import PropTypes from 'prop-types';
import Section from './components/Section/Section';
import LeftButton from './components/LeftButton/LeftButton';
import CardList from './components/CardList/CardList';
import RightButton from './components/RightButton/RightButton';
import CarouselContainer from './styles';

const relatedDummyData = [
  {
    id: 14931,
    name: 'Manuela Pants',
    category: 'Pants',
    default_price: '398.00',
    original_price: '398.00',
    sale_price: '254.00',
    'default?': true,
    thumbnail_url: 'https://images.unsplash.com/photo-1532244769164-ff64ddeefa45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 14932,
    name: 'Elwin Coat',
    category: 'Coat',
    default_price: '783.00',
    original_price: '783.00',
    sale_price: null,
    'default?': true,
    thumbnail_url: 'https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
    rating: [5, 3, 4, 4, 3],
  },
  {
    id: 14034,
    name: 'Camo Onesie',
    category: 'Jackets',
    default_price: '140.00',
    original_price: '140.00',
    sale_price: null,
    'default?': true,
    thumbnail_url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
    rating: [4],
  },
  {
    id: 14296,
    name: 'Robin Shirt',
    category: 'Shirt',
    default_price: '710.00',
    original_price: '710.00',
    sale_price: null,
    'default?': true,
    thumbnail_url: 'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    rating: [3, 2, 3, 4],
  },
  {
    id: 14807,
    name: 'Emmalee Dress',
    category: 'Dress',
    default_price: '386.00',
    original_price: '386.00',
    sale_price: null,
    'default?': true,
    thumbnail_url: 'https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
    rating: [],
  },
  {
    id: 14807,
    name: 'Emmalee Dress',
    category: 'Dress',
    default_price: '386.00',
    original_price: '386.00',
    sale_price: null,
    'default?': true,
    thumbnail_url: 'https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
    rating: [],
  },
];

const Carousel = () => {
  const [currentCard, setCard] = React.useState(0);
  const { length } = relatedDummyData;
  return (
    <div data-test="component-carousel">
      <CarouselContainer>
        <Section />
        <LeftButton />
        <CardList relatedDummyData={relatedDummyData} />
        <RightButton />
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
