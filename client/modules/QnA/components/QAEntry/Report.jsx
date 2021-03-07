import React from 'react';
import LinkTag from '../../../../components/LinkTag';

const Report = ({children, size, handleOnClick}) => (
  <div className="report">
    <LinkTag
    children={children}
    size={size}
    handleOnClick={handleOnClick}
    href={null}
    />
  </div>
);

export default Report;
