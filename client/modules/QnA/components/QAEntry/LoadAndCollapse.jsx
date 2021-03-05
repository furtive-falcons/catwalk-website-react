import React from 'react';
import LinkTag from '../../../../components/LinkTag';

const LoadAndCollapse = ({
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

export default LoadAndCollapse;
