/* eslint-disable import/extensions */
import React from 'react';
import ImageThumbnail from './ImageThumbnail.jsx';
import Paragraph from '../../../../components/Paragraph';

const Answer = ({ answer }) => (
  <div>
    <Paragraph children={answer.body} />
    {answer.photos.length > 0 ? <ImageThumbnail images={answer.photos} /> : null}
  </div>
);

export default Answer;
