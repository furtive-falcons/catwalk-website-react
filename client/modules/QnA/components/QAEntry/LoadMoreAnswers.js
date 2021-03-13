import React from 'react';
import { string, number, func } from 'prop-types';
import LinkTag from '../../../../components/LinkTag';

const LoadMoreAnswers = ({
  children, handleOnClick, size, href,
}) => (
  <div className="load-more-answer">
    <LinkTag
      handleOnClick={handleOnClick}
      size={size}
      href={href}
    >
      {children}
    </LinkTag>
  </div>
);

export default LoadMoreAnswers;

LoadMoreAnswers.propTypes = {
  children: string,
  handleOnClick: func,
  size: number,
  href: string,
};

LoadMoreAnswers.defaultProps = {
  children: '',
  handleOnClick: () => {},
  size: null,
  href: null,
};
