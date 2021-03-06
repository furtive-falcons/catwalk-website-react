import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

import {
  Arrows,
  ImageGalleryWrapper,
  Slide,
  ExpandWrapper,
  Pagination,
  Thumbnail,
  IconStyles,
  IconStylesWrapper,
} from './styles';

const renderThumbnails = (item) => (
  <Thumbnail key={item.url} icon={item.thumbnail_url} />
);

const ImageGallery = ({ photos }) => (
  <ImageGalleryWrapper>
    <Slide image={photos[0].url} />
    <Arrows>
      <IconStylesWrapper>
        <IconStyles className="fas fa-arrow-left" />
      </IconStylesWrapper>
      <IconStylesWrapper>
        <IconStyles className="fas fa-arrow-right" />
      </IconStylesWrapper>
    </Arrows>
    <Pagination>{photos.map(renderThumbnails)}</Pagination>
    <ExpandWrapper>
      <IconStylesWrapper>
        <IconStyles className="fas fa-expand" />
      </IconStylesWrapper>
    </ExpandWrapper>
  </ImageGalleryWrapper>
);

ImageGallery.propTypes = {
  photos: arrayOf(shape({ url: string, thumbnail_url: string })),
};

ImageGallery.defaultProps = {
  photos: null,
};

export default ImageGallery;
