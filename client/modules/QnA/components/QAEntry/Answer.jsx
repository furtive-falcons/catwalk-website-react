/* eslint-disable import/extensions */
import React from 'react';
import ImageThumbnail from './ImageThumbnail.jsx';
import Paragraph from '../../../../components/Paragraph';

const Answer = ({body}) => (
  <div className="answer">
    <Paragraph children={body} />
    <ImageThumbnail />
  </div>
);

export default Answer;
