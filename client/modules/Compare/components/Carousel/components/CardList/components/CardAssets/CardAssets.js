import React from 'react';
// import PropTypes from 'prop-types';
import FavIcon from './components/FavIcon/FavIcon';
import ImageContainer from './components/styles';

const CardAssets = ({ card }) => {
  const hasImg = Boolean(card.thumbnail_url)
  return (
    <ImageContainer>
      <FavIcon />
      <>
        {hasImg ? <img
          className="default-thumbnail"
          src={card.thumbnail_url}
          alt={card.name}
        /> : <img
          className="default-thumbnail"
          src={"https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"}
          alt='placeholder'
        />}
      </>
    </ImageContainer>
  )
}
// CardAssets.propTypes = {
//   thumbnail_url: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   rating: PropTypes.array.isRequired,
// };

export default CardAssets;
