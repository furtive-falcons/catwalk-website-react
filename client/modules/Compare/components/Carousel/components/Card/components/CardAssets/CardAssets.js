import React from 'react';
// import PropTypes from 'prop-types';
// import Image from './components/Image/Image';
import FavIcon from './components/FavIcon/FavIcon';
import ImageContainer from './components/styles';

const CardAssets = ({ card }) => (
  <ImageContainer>
    <img
      className="default-thumbnail"
      src={card.thumbnail_url}
      alt={card.name}
    />
    <FavIcon className="fav-icon" card={card.rating} />
  </ImageContainer>
);

// CardAssets.propTypes = {
//   thumbnail_url: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   rating: PropTypes.array.isRequired,
// };

export default CardAssets;
