import React from 'react';
import LinkTag from '../../../../components/LinkTag';

const Report = ({ children, size, handleOnClick }) => (
  <div className="report">
    <LinkTag
      size={size}
      handleOnClick={handleOnClick}
      href={null}
    >
      {children}
    </LinkTag>
  </div>
);

export default Report;
