import React from 'react';
import LinkTag from '../../../../components/LinkTag';

const LoadMoreAnswers = ({children, handleOnClick, size}) => (
  <div className="load-more-answer">
    <LinkTag children={children} handleOnClick={handleOnClick} size={size} />
  </div>
);

export default LoadMoreAnswers;
