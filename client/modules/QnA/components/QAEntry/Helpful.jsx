import React from 'react';
import LinkTag from '../../../../components/LinkTag';

const Helpful = ({ helpfulness }) => (
  <div>
    Helpful?
    {' '}
    <LinkTag
      children="Yes"
      size={1}
    />
    {' '}
    (
    {helpfulness}
    )
  </div>
);
export default Helpful;
