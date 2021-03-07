import React, { useEffect } from 'react';
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

const ImageGallery = ({ photos }) => {
  const [index, setIndex] = React.useState(0);

  const renderThumbnails = (item, i) => (
    <Thumbnail
      key={item.url}
      onClick={() => setIndex(i)}
      icon={item.thumbnail_url}
    />
  );

  useEffect(() => {
    const lastIndex = photos.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  return (
    <ImageGalleryWrapper>
      {photos.map((photo, personIndex) => {
        const { url, thumbnail_url: thumb } = photo;

        let position = '100%';
        if (personIndex === index) {
          position = '0';
        }
        if (
          personIndex === index - 1
          || (index === 0 && personIndex === photos.length - 1)
        ) {
          position = '-100%';
        }

        return <Slide position={position} key={thumb} image={url} />;
      })}
      <Arrows>
        <IconStylesWrapper
          isVisible={index !== 0}
          onClick={() => setIndex(index - 1)}
        >
          <IconStyles className="fas fa-arrow-left" />
        </IconStylesWrapper>

        <IconStylesWrapper
          isVisible={index !== photos.length - 1}
          onClick={() => setIndex(index + 1)}
        >
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
};

ImageGallery.propTypes = {
  photos: arrayOf(shape({ url: string, thumbnail_url: string })),
};

ImageGallery.defaultProps = {
  photos: null,
};

export default ImageGallery;
