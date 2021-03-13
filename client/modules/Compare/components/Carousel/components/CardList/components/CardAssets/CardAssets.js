import React from 'react';
import { shape } from 'prop-types';
import FavIcon from './components/FavIcon/FavIcon';
import ImageContainer from './components/styles';
import Placeholder from '../../../../../../../../ui/ui-pictures/photo-1553830591-d8632a99e6ff.jpeg';

const CardAssets = ({ card }) => {
  const hasImg = Boolean(card.thumbnail_url);
  return (
    <ImageContainer data-test="component-assets">
      <FavIcon />
      <>
        {hasImg ? (
          <img
            className="default-thumbnail"
            src={card.thumbnail_url}
            alt={card.name}
          />
        ) : (
          <img
            className="default-thumbnail"
            src={Placeholder}
            alt="placeholder"
          />
        )}
      </>
    </ImageContainer>
  );
};

CardAssets.propTypes = {
  card: shape({}),
};

CardAssets.defaultProps = {
  card: {},
};

export default CardAssets;
