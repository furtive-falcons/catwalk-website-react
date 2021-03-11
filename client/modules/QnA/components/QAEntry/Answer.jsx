/* eslint-disable import/extensions */
import React from 'react';
import { shape, string, arrayOf } from 'prop-types';
import ImageThumbnail from '../../../../components/ImagePopUp';
import Paragraph from '../../../../components/Paragraph';

const Answer = ({ body, photos }) => {
  const images = photos.map((photo) => photo.url);
  return (
    <div>
      <Paragraph>{body}</Paragraph>
      {images.length > 0 ? <ImageThumbnail images={images} /> : null}
    </div>
  );
};

export default Answer;

Answer.propTypes = {
  body: string.isRequired,
  photos: arrayOf(shape({
    url: string,
  })),
};

Answer.defaultProps = {
  photos: arrayOf([]),
};
