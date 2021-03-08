import React from 'react';
// import PropTypes from 'prop-types';
import FavIcon from './components/FavIcon/FavIcon';
import ImageContainer from './components/styles';

const CardAssets = ({ card }) => {
  // console.log('CardAssets', card)
  // const hasImage = card.defaultStyle.photos
  // console.log('hasImage', hasImage)
  return (
    <ImageContainer>
        <img
          className="default-thumbnail"
          src={card.defaultStyle.photos[0].thumbnail_url}
          alt={card.name}
        />
        <FavIcon className="fav-icon" />
    </ImageContainer>
  )
}

// CardAssets.propTypes = {
//   thumbnail_url: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   rating: PropTypes.array.isRequired,
// };

export default CardAssets;
