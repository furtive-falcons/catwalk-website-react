/* eslint-disable import/extensions */
import React from 'react';
import { object } from 'prop-types';
import ImageThumbnail from '../../../../components/ImagePopUp';
import Paragraph from '../../../../components/Paragraph';

const Answer = ({ answer }) => {
  const photos = answer.photos.map((photo) => photo.url);
  return (
    <div>
      <Paragraph children={answer.body} />
      {answer.photos.length > 0 ? <ImageThumbnail images={photos} /> : null}
    </div>
  );
};

export default Answer;

Answer.propTypes = {
  answer: object.isRequired,
};
