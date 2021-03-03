import React from 'react';
import LinkTag from '../LinkTag';

const Helpful = ({
  string, helpfulness, size, handleOnClick, href,
}) => (
  <div>
    {string}
    Helpful?
    {' '}
    <LinkTag
      children="Yes"
      size={size}
      onClick={handleOnClick}
      href={href}
    />
    {' '}
    (
    {helpfulness}
    )
  </div>
);
export default Helpful;
