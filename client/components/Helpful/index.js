import React from 'react';
import LinkTag from '../LinkTag';

const Helpful = ({
  string, helpfulness, size, handleOnClick
}) => (
  <div>
    {string}
    Helpful?
    {' '}
    <LinkTag
      children="Yes"
      size={size}
      handleOnClick={handleOnClick}
    />
    {' '}
    (
    {helpfulness}
    )
  </div>
);
export default Helpful;
